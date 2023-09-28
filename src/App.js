import logo from './logo.svg';
import './App.css';


var Academics;
var ProjectsAloc;
var Students;
var Supervisors;
var Projects;

var paCIVIL = [];
var paCOMP = [];
var paELEC = [];
var paENGG = [];
var paMECH = [];
var paMTRN = [];
var paTELE = [];

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
        <button type="button" onClick={exportData}>
        Export Data
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

const exportData = () => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(ProjectsAloc)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";

  link.click();
};

// api url
const api_url =
      "tba";
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const resAcademics = await fetch("Academic.json");
    const resStudents = await fetch("Student.json");
    const resProjectsAloc = await fetch("DemoAlocation.json");
    const resSupervisors = await fetch("Supervisor.json");
    const resProjects = await fetch("Projects.json");
   
    // Storing data in form of JSON
    Academics = await resAcademics.json();
    Students = await resStudents.json();
    ProjectsAloc = await resProjectsAloc.json();
    Supervisors = await resSupervisors.json();
    Projects = await resProjects.json();
    
    //Sorting object arrays
    Students = addStudentDisciplines();
    Academics = addAcademicCaps();
    //addProjectDisciplines();
    addSupervisorCap();
    sortAcademics();
    //Students = strip();
    ProjectsAloc = merge();
    
    /*allocateMarkers(paCIVIL, aCIVIL);
    allocateMarkers(paCOMP, aCOMP);
    allocateMarkers(paELEC, aELEC);
    allocateMarkers(paMECH, aMECH);
    allocateMarkers(paMTRN, aMTRN);
    allocateMarkers(paTELE, aTELE);*/
    ProjectsAloc = addMarkers(ProjectsAloc);

    //sortProjectsAloc();
    console.log(ProjectsAloc);
}
// Calling that async function
getapi(api_url);

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

function sortMarkers() {
  Academics.sort((a, b) => {
    return a.st_discipline - b.st_discipline;
  });
}

function addProjectDisciplines() {
  ProjectsAloc.reduce((accum, curr) => {
    const S = Students.find(s => s.st_ID === curr.S_ID);
    if (S) accum.push({...curr, st_Discipline: S.st_disciplineID});
    return accum;
  }, []);
}

function addAcademicCaps() {
  const temp = Academics.map(element => {
    return element = {
      ...{...element, a_cap: 10}
    };
  });
  return temp;
}

function strip(){
  let partialStudentDetails = Students.map((
    {st_ID, st_disciplineID}) => ({st_ID, st_disciplineID}));
    return partialStudentDetails;
}

function merge(){
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
  Academics.reduce((accum, curr) => {
    const S = Supervisors.find(s => s.s_ID === curr.a_ID);
    if (S) {
      curr.a_cap = S.s_capacity - S.s_current_load;
    };
    return accum;
  }, []);
}

function sortProjectsAloc() {
  for (let element of ProjectsAloc) {
    switch(element.st_disciplineID) {
      case 1:
        paCIVIL.push(element);
        break; 
      case 3:
        paELEC.push(element);
        break;
      case 4:
        paMECH.push(element);
        break;
      case 5:
        paMTRN.push(element);
        break;
      case 6:
        paCOMP.push(element);
        break;
      case 7:
        paTELE.push(element);
        break;
      case 8:
        paENGG.push(element);
        break;
      default:
        console.log("new unit");
        break;
    }
  }
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

function allocateMarkers(projects, markers){
  var next;
  let  i = 0;
  while ( i < projects.length){
    if (markers.length < 1) {
      console.log("more markers needed");
      break;
    }
    next = markers.shift();
    if (next.a_ID !== projects[i].supervisor_ID && next.a_cap > 0  && projects[i].second_marker_ID === -1 ) {
      projects[i].second_marker_ID = next.a_ID;
      next.a_cap--;
      markers.push(next);
    }
    else {
      i--;
    }
    i++;
  }
}

function allocateMarkersEdgeCases(project, markers) {
  var next;
  let  i = 0;
  while ( i < markers.length){
    next = markers.shift();
    if (next.a_ID !== project.supervisor_ID && next.a_cap > 0  && project.second_marker_ID === -1 ) {
      project.second_marker_ID = next.a_ID;
      next.a_cap--;
      markers.push(next);
      break;
    }
    else {
      i--;
    }
    i++;
  }
  return project;
}

function addMarkers (projects) {
  projects.reduce((accum, curr) => {
    const P = Projects.find(d => d.p_ID === curr.project_ID);
    if (P) {
      
      if (P.p_fields.includes("Civil")) {
        allocateMarkersEdgeCases(curr, aCIVIL);
      } 
      else if (P.p_fields.includes("Electrical")) {
        allocateMarkersEdgeCases(curr, aELEC);
      }
      else if (P.p_fields.includes("Electronics")) {
        allocateMarkersEdgeCases(curr, aELEC);
      }
      else if (P.p_fields.includes("Mechanical")) {
        allocateMarkersEdgeCases(curr, aMECH);
      }
      else if (P.p_fields.includes("Mechatronics")) {
        allocateMarkersEdgeCases(curr, aMTRN);
      }
      else if (P.p_fields.includes("Software")) {
        allocateMarkersEdgeCases(curr, aCOMP);
      }
      else if (P.p_fields.includes("Telecommunication")) {
        allocateMarkersEdgeCases(curr, aTELE);
      }
    };
    return accum;
  }, []);
  return projects;
}

export default App;
