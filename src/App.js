import logo from './logo.svg';
import './App.css';


var Academics;
var ProjectsAloc;
var Students;
var Supervisors;
var Projects;
var AllAssigned = [];
var Test;

var presSched = [];
var allocatedProjects;

var aCIVIL = [];
var aCOMP = [];
var aELEC = [];
var aMECH = [];
var aMTRN = [];
var aTELE = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={markerAlgorithm}>
        Allocate Markers
        </button>
        <button type="button" onClick={exportMarkerData}>
        Export Marker Data
        </button>
        <button type="button" onClick={presentationScheduler}>
        Allocate Markers
        </button>
        <button type="button" onClick={exportPresentationData}>
        Export Presentation Data
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
      
    </div>
  );
}

function presentationScheduler ()  {
  //Sort allocated Projects by supervisor as a Optimization -> Presentation more likely to have the same supervisor
  //Problem/edge case: how to prevent same supervisor in multiple rooms at the same time?
  let allocatedProjects = ProjectsAloc;

  allocatedProjects.sort((a, b) => {
    return a.supervisor_ID.localeCompare(b.supervisor_ID, undefined, {
      numeric: true,
      sensitivity: 'base'
    })
  })
  //console.log(allocatedProjects);

  /* Schema
  presentationID        -> +1 every 12 students
  classroomNumber       -> for MVP, classroomNum = 1,2,3 ... substitues room code
  time                  -> AM or PM
  day                   -> Mon Tue or Wed
  chairID (-1)
  secondMarkerID (-1) 
  */
   // To be populated with final Presentation Schedule to print [{...} , {...} , ...]

  //Data to be built according to schema 
  let presIDCounter = 1; //Unique presID = 0,1,2,3 ... 

  let dayofWeek = ['Mon', 'Tue', 'Wed']; //preset for MVP
  let dayCount = 0; // use for idx of dayofweek

  let seshArr = ['AM', 'PM']; //Only 2 sessions/times per day
  let timeCount = 0; // use for idx of seshArr //redundant/can just use presIDcounter

  // Calculating no of classrooms needed
  let studentsPerRoomPerSesh = 12; // 3hr sesh, 15min per pres = 12 presentations per sesh per room
  let allPresPerSesh = studentsPerRoomPerSesh * dayofWeek.length * seshArr.length; //should be 12*3*2 = 72
  let numberOfClassrooms = Math.ceil(allocatedProjects.length / allPresPerSesh); // no of presentations/persentations per sesh = num of classrooms we need
  let classroomNum = 1;

  // Implementing chairID and secondMarkerID

  // No idea how this needs to be done 
  // implementing chairID as picking between a predefined list of academics 
  //(that way if kate wants to do all of them she can just self nominate herself and hazer can say which ones he wants working on it) 
  let chairIDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];
  // setting second marker as the last supervisor in the same sesh, or maybe a predefined array?
  let secondMarkerIDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];

  //Scheduling Alg
  for (let i = 0; i < allocatedProjects.length; i++) {

    if (i % 12 == 0) { //for every batch of 12 students
      let tempPres = {}; // Used to build object according to schema before pusing onto presSched

      // Update the presentation properties
      tempPres.presentationID = presIDCounter;
      tempPres.classroomNumber = classroomNum;
      tempPres.time = seshArr[timeCount % seshArr.length];
      tempPres.day = dayofWeek[dayCount % dayofWeek.length];
      
      //Implementation 1: using preset array of chairID and second Marker IDs
      //tempPres.chairID = chairIDarr [presIDCounter-1 % chairIDarr.length];
      //tempPres.secondMarkerID = secondMarkerIDarr [presIDCounter-1 % secondMarkerIDarr.length];

      //implementation 2:
      //could also allocate chair as whoever's supervising in that sesh first
      tempPres.chairID = allocatedProjects[i].supervisor_ID;
      //second marker could be the last supervisor in the same sesh.
      if (allocatedProjects[i + 11] && allocatedProjects[i + 11].supervisor_ID) {
        tempPres.secondMarkerID = allocatedProjects[i + 11].supervisor_ID;
    } else { //if not enough people in the sesh,
        tempPres.secondMarkerID = allocatedProjects[i].supervisor_ID; // make second marker same as first supervisor
    }

      // Add the presentation to the schedule
      presSched.push(tempPres);

      /*
      ==>Order of change: time, classroom then day. 
      e.g.
      For 2 classrooms C1 and C2, the presID 1,2,3 ... should represent
      MonC1AM, MonC1PM, MonC2AM, MonC2PM, TueC1Am ... 
      */

      // Increment counters based on the desired order of change
      timeCount++;
      if (timeCount % seshArr.length === 0) { //AM/PM switch
        classroomNum++;
      }
      if (classroomNum > numberOfClassrooms) { //Cycles through classrooms
        classroomNum = 1;
        dayCount++;
      }

      // Increment presentation ID for each batch of students
      presIDCounter++;
    }
    // Assign presentation ID to the allocated project
    allocatedProjects[i].presentation_ID = presIDCounter - 1;
  }
  console.log(presSched);
  console.log(allocatedProjects);
}

function markerAlgorithm () {
      Students = addStudentDisciplines();
      Academics = addAcademicCaps();
      addSupervisorCap();
      sortAcademics();
      Students = getUnitDiscipline();
      ProjectsAloc = addStUnitDisToPA();
      ProjectsAloc = addMarkers(ProjectsAloc);
      ProjectsAloc = addMarkersEdgeCases(ProjectsAloc);
      loadBalance(Academics);
      console.log(Academics);
      console.log(ProjectsAloc);
}
const exportMarkerData = () => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(allocatedProjects)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";

  link.click();
};

const exportPresentationData = () => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(presSched)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";

  link.click();
};

// api url
const api_url =
      "http://time.jsontest.com";
 
// Defining async function
async function getapi(url) {

    // Storing response
    const resAcademics = await fetch("Academic.json");
    const resStudents = await fetch("Student.json");
    const resProjectsAloc = await fetch("lucasProjectAlloc.json");
    const resSupervisors = await fetch("Supervisor.json");
    const resProjects = await fetch("Projects.json");
    const resTest = await fetch(api_url);
   
    // Storing data in form of JSON
    Academics = await resAcademics.json();
    Students = await resStudents.json();
    ProjectsAloc = await resProjectsAloc.json();
    Supervisors = await resSupervisors.json();
    Projects = await resProjects.json();
    Test = await resTest.json();
    
    console.log(Test);
}

// Calling that async function
getapi(api_url);

function loadBalance(markers) {
  markers.sort((a, b) => {
    return b.a_cap - a.a_cap;
  });
}
function addStudentDisciplines() {
  const temp = Students.map(element => {
    return element = {
      ...(element.st_unit.includes("CIVIL")) && {...element, st_disciplineID: 1},
      ...(element.st_unit.includes("ELEC")) && {...element, st_disciplineID: 3},
      ...(element.st_unit.includes("MECH")) && {...element, st_disciplineID: 4},
      ...(element.st_unit.includes("MTRN")) && {...element, st_disciplineID: 5},
      ...(element.st_unit.includes("COMP")) && {...element, st_disciplineID: 6},
      ...(element.st_unit.includes("TELE")) && {...element, st_disciplineID: 7},
      ...(element.st_unit.includes("ENGG")) && {...element, st_disciplineID: 8}
      
    };
  });
  return temp;
}

function addAcademicCaps() {
  const temp = Academics.map(element => {
    return element = {
      ...{...element, a_cap: 10}
    };
  });
  return temp;
}

function getUnitDiscipline(){
  let partialStudentDetails = Students.map((
    {st_ID, st_disciplineID, st_unit}) => ({st_ID, st_disciplineID, st_unit}));
    return partialStudentDetails;
}

function addStUnitDisToPA(){
  let combined = [];
  for(let i = 0; i < ProjectsAloc.length; i++) {
    combined.push({
     ...ProjectsAloc[i], 
     ...(Students.find((itmInner) => itmInner.st_ID === ProjectsAloc[i].st_ID))}
    );
  }
  return combined;
}

function addSupervisorCap() {
  var temp = Academics.reduce((accum, curr) => {
    const S = Supervisors.find(s => s.s_ID === curr.a_ID);
    if (S) {
      curr.a_cap = S.s_capacity - S.s_current_load;
    };
    return accum;
  });
  return temp;
}

function sortAcademics() {
  for (let element of Academics) {
    switch(element.a_discipline) {
      case 1:
        aCIVIL.push(element);
        break; 
      case 2:
        aELEC.push(element);
        break;
        case 3:
        aELEC.push(element);
        break;
      case 4:
        aMECH.push(element);
        break;
      case 5:
        aMTRN.push(element);
        break;
      case 6:
        aCOMP.push(element);
        break;
      case 7:
        aTELE.push(element);
        break;
      default:
        console.log("new unit");
        break;
    }
  }
}

function allocateMarkers(project, markers) {
  if (project.second_marker_ID !== -1) {
    return project;
  } 
  loadBalance(markers);
  var next;
  while (markers.length > 0){
    next = markers.shift();
    if (next.a_ID === project.supervisor_ID) {
      markers.push(next);
    }
    else {
      if (next.a_cap > 0) {
        project.second_marker_ID = next.a_ID;
        next.a_cap--;
        markers.push(next);
        return project;
      }
    }
  }
  
  return project;
}

function addMarkers (projects) {
  projects.reduce((accum, curr) => {
    const P = Students.find(d => d.st_ID === curr.st_ID);
    if (P) {
      if (P.st_unit.includes("CIVIL")) {
        allocateMarkers(curr, aCIVIL);
      } 
      else if (P.st_unit.includes("ELEC")) {
        allocateMarkers(curr, aELEC);
      }
      else if (P.st_unit.includes("MECH")) {
        allocateMarkers(curr, aMECH);
      }
      else if (P.st_unit.includes("MTRN")) {
        allocateMarkers(curr, aMTRN);
      }
      else if (P.st_unit.includes("COMP")) {
        allocateMarkers(curr, aCOMP);
      }
      else if (P.st_unit.includes("TELE")) {
        allocateMarkers(curr, aTELE);
      }
    };
    return accum;
  }, []);
  return projects;
}

function addMarkersEdgeCases (projects) {
  projects.reduce((accum, curr) => {
    const P = Projects.find(d => d.p_ID === curr.project_ID);
    if (P) {
      
      if (P.p_fields.includes("Civil")) {
        allocateMarkers(curr, aCIVIL);
      } 
      else if (P.p_fields.includes("Electrical")) {
        allocateMarkers(curr, aELEC);
      }
      else if (P.p_fields.includes("Electronics")) {
        allocateMarkers(curr, aELEC);
      }
      else if (P.p_fields.includes("Mechanical")) {
        allocateMarkers(curr, aMECH);
      }
      else if (P.p_fields.includes("Mechatronics")) {
        allocateMarkers(curr, aMTRN);
      }
      else if (P.p_fields.includes("Software")) {
        allocateMarkers(curr, aCOMP);
      }
      else if (P.p_fields.includes("Telecommunication")) {
        allocateMarkers(curr, aTELE);
      }
    };
    return accum;
  }, []);
  return projects;
}

export default App;
