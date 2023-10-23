import ProjectAlloc from "../lucasProjectAlloc.json";
import selfProposed from "../SelfProposedProject.json";
import preferences from "../Preferences.json";
import { getAcademics, getAllStudents, getAllProjects, getAllocations, getSupervisor } from "./ApiUtils";

var ProjectAllocStore;
var PresSchedStore;

var Supervisors = await getSupervisor();
var Academics = await getAcademics();
var Students = await getAllStudents();
var Projects = await getAllProjects();
//var ProjectAlloc = await getAllocations();

export function projectAllocation () {
  let projectAllocations = [];

  let unallocatable = [];
  let allocTemp = {};
  let superIDX;
  let allocated = false;
  let numberOfruns = 0;

  for (let i = 0; i < Students.length; i++) {
    numberOfruns++;
    allocated = false;
    let selfie = hasSelfProposed(Students[i].st_ID, selfProposed);
    if (selfie !== -1) {
      superIDX = findSupervisorIDX(
        selfProposed[selfie].sp_supervisor_ID,
        Supervisors
      );
      if (superIDX >= 0) {
        if (
          Supervisors[superIDX].s_capacity <
          Supervisors[superIDX].s_current_load
        ) {
          //find out if s_capacity is maxCapacity or current???
          //atm treating as current.

          Supervisors[superIDX].s_current_load++;

          allocTemp.s_ID = Students[i].st_ID;
          allocTemp.supervisor_ID = selfProposed[selfie].sp_supervisor_ID;
          allocTemp.project_ID = -1; //find out if i add projects from self proposed to Projects after allocation. And give it an ID
          allocTemp.second_marker_ID = -1;
          allocTemp.presentation_ID = -1;

          projectAllocations.push(allocTemp);
          allocTemp = {};

          continue;
        }
      }
    }
    let prefIDX = findPreferencesIDX(Students[i].st_ID, preferences);
    if (prefIDX !== -1) {
      for (let j = 1; j < 5; j++) {
        let strKey = 'pr_pref' + j;
        let projectIDX = findProjectIDX(
          preferences[prefIDX][strKey],
          Projects
        ); //can I use strKey like that?
        if (projectIDX !== -1) {
          if (Projects[projectIDX].p_size > 0) {
            superIDX = findSupervisorIDX(
              Projects[projectIDX].p_supervisor,
              Supervisors
            );
            if (
              Supervisors[superIDX].s_capacity <
              Supervisors[superIDX].s_current_load
            ) {
              allocTemp.s_ID = Students[i].st_ID;
              allocTemp.supervisor_ID = Projects[projectIDX].p_supervisor;
              allocTemp.project_ID = Projects[projectIDX].p_ID;
              allocTemp.second_marker_ID = -1;
              allocTemp.presentation_ID = -1;

              projectAllocations.push(allocTemp);
              allocTemp = {};

              Projects[projectIDX].p_size--;

              Supervisors[superIDX].s_current_load++;
              allocated = true;
              break;
            }
          }
        }
      }
      //allocate random
    }

    let numberOfProjectsTried = 0;

    while (allocated === false) {
      allocTemp = {};
      allocTemp.s_ID = Students[i].st_ID;
      let projectIDX = Math.floor(Math.random() * Projects.length);
      allocTemp.supervisor_ID = Projects[projectIDX].p_supervisor;
      allocTemp.project_ID = Projects[projectIDX].p_ID;
      allocTemp.second_marker_ID = -1;
      allocTemp.presentation_ID = -1;

      //find supervisor allocation weight
      superIDX = findSupervisorIDX(allocTemp.supervisor_ID, Supervisors);

      if (
        Supervisors[superIDX].s_capacity > 0 &&
        Projects[projectIDX].p_size > 0
      ) {
        if (
          (Students[i].st_unit.includes('COMP') &&
            Projects[projectIDX].p_fields.includes('Software')) ||
          (Students[i].st_unit.includes('CIVIL') &&
            Projects[projectIDX].p_fields.includes('Civil')) ||
          (Students[i].st_unit.includes('ELEC') &&
            Projects[projectIDX].p_fields.includes('Electrical')) ||
          (Students[i].st_unit.includes('ELEC') &&
            Projects[projectIDX].p_fields.includes('Electronics')) ||
          (Students[i].st_unit.includes('MECH') &&
            Projects[projectIDX].p_fields.includes('Mechanical')) ||
          (Students[i].st_unit.includes('MTRN') &&
            Projects[projectIDX].p_fields.includes('Mechatronics')) ||
          (Students[i].st_unit.includes('TELE') &&
            Projects[projectIDX].p_fields.includes('Telecommunications'))
        ) {
          //this condition may cause an infinite loop fix later
          Projects[projectIDX].p_size--;

          Supervisors[superIDX].s_current_load++;

          projectAllocations.push(allocTemp);

          allocated = true;
        }
      }

      numberOfProjectsTried++;

      if (numberOfProjectsTried > 1000) {
        //   console.log('tried 1000 times could not find a project for this kid');

        unallocatable.push(allocTemp);
        break;
      }
    }
  }
  console.log('the unallocatable kids');
  console.log(unallocatable);

  function hasSelfProposed(studnetID, selfPrj) {
    for (let i = 0; i < selfPrj.length; i++) {
      if (studnetID === selfPrj[i].sp_student_ID) {
        return i;
      }
    }
    return -1;
  }

  //finds supervisor index based on supervisor id
  function findSupervisorIDX(superVisor, superArr) {
    for (let i = 0; i < superArr.length; i++) {
      if (superVisor.localeCompare(superArr[i].s_ID)) {
        return i;
      }
    }

    return -1;
  }

  function findPreferencesIDX(studentID, prefs) {
    for (let i = 0; i < prefs.length; i++) {
      if (studentID === prefs[i].pr_student_ID) {
        return i;
      }
    }
    return -1;
  }

  function findProjectIDX(prjIDX, projects) {
    for (let i = 0; i < projects.length; i++) {
      if (prjIDX === projects[i].p_ID) {
        return i;
      }
    }
    return -1;
  }
}

export function markerAlgorithm () {
    var aCIVIL = [];
    var aCOMP = [];
    var aELEC = [];
    var aMECH = [];
    var aMTRN = [];
    var aTELE = [];

    //add marker capacities to all academics
    Academics = Academics.map(element => {
        return element = {
          ...{...element, a_cap: 10}
        };
    }, []);

    //if academic is a supervisor, update capacity
    Academics.reduce((accum, curr) => {
        const S = Supervisors.find(s => s.s_ID === curr.a_ID);
        if (S) {
          curr.a_cap = S.s_capacity - S.s_current_load;
        };
        return accum;
    });

    //sort academics into their disciplines
    for (let element of Academics) {
        if (element.a_discipline.includes("Civil")) {
          aCIVIL.push(element);
        }
        else if (element.a_discipline.includes("Electronics")) {
          aELEC.push(element);
        }
        else if (element.a_discipline.includes("Electrical")) {
          aELEC.push(element);
        }
        else if (element.a_discipline.includes("Mechanical")) {
            aMECH.push(element);
        }
        else if (element.a_discipline.includes("Mechatronics")) {
            aMTRN.push(element);
        }
        else if (element.a_discipline.includes("Software")) {
            aCOMP.push(element);
        }
        else if (element.a_discipline.includes("Telecommunications")) {
            aTELE.push(element);
        }
        else {
            console.log("error: New unit found at " + element);
        }
    }

    //sort markers in descending order to load balance
    function loadBalance(markers) {
        markers.sort((a, b) => {
          return b.a_cap - a.a_cap;
        });
    }

    //allocate single marker to project
    function allocateMarker(project, markers) {
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
    console.log(ProjectAlloc);
    //allocate markers
    ProjectAlloc.reduce((accum, curr) => {
        const P = Students.find(d => d.st_ID === curr.st_ID);
        if (P) {
          if (P.st_unit.includes("CIVIL")) {
            allocateMarker(curr, aCIVIL);
          } 
          else if (P.st_unit.includes("ELEC")) {
            allocateMarker(curr, aELEC);
          }
          else if (P.st_unit.includes("MECH")) {
            allocateMarker(curr, aMECH);
          }
          else if (P.st_unit.includes("MTRN")) {
            allocateMarker(curr, aMTRN);
          }
          else if (P.st_unit.includes("COMP")) {
            allocateMarker(curr, aCOMP);
          }
          else if (P.st_unit.includes("TELE")) {
            allocateMarker(curr, aTELE);
          }
        };
        return accum;
    }, []);

    //allocate edge markers
    ProjectAlloc.reduce((accum, curr) => {
        const P = Projects.find(d => d.p_ID === curr.project_ID);
        if (P) {
          if (P.p_fields.includes("Civil")) {
            allocateMarker(curr, aCIVIL);
          } 
          else if (P.p_fields.includes("Electrical")) {
            allocateMarker(curr, aELEC);
          }
          else if (P.p_fields.includes("Electronics")) {
            allocateMarker(curr, aELEC);
          }
          else if (P.p_fields.includes("Mechanical")) {
            allocateMarker(curr, aMECH);
          }
          else if (P.p_fields.includes("Mechatronics")) {
            allocateMarker(curr, aMTRN);
          }
          else if (P.p_fields.includes("Software")) {
            allocateMarker(curr, aCOMP);
          }
          else if (P.p_fields.includes("Computer")) {
            allocateMarker(curr, aCOMP);
          }
          else if (P.p_fields.includes("Telecommunication")) {
            allocateMarker(curr, aTELE);
          }
        };
        return accum;
    }, []);

    console.log(ProjectAlloc);
    ProjectAllocStore = ProjectAlloc;
}

export function presentationScheduler () {
    //Sort allocated Projects by supervisor as a Optimization -> Presentation more likely to have the same supervisor
    //Problem/edge case: how to prevent same supervisor in multiple rooms at the same time?
    ProjectAlloc.sort((a, b) => {
        return a.supervisor_ID.localeCompare(b.supervisor_ID, undefined, {
        numeric: true,
        sensitivity: 'base'
        })
    },[])

    /* Schema
    ps_ID        -> +1 every 12 students
    classroomNumber       -> for MVP, classroomNum = 1,2,3 ... substitues room code
    ps_time                  -> AM or PM
    day                   -> Mon Tue or Wed
    ps_chair_ID (-1)
    ps_2ndmarker_ID (-1) 
    */
    let presSched = []; // To be populated with final Presentation Schedule to print [{...} , {...} , ...]

    //Data to be built according to schema 
    let presIDCounter = 1; //Unique presID = 0,1,2,3 ... 

    let dayofWeek = ['Mon', 'Tue', 'Wed']; //preset for MVP
    let dayCount = 0; // use for idx of dayofweek

    let seshArr = ['AM', 'PM']; //Only 2 sessions/times per day
    let timeCount = 0; // use for idx of seshArr //redundant/can just use presIDcounter

    // Calculating no of classrooms needed
    let studentsPerRoomPerSesh = 12; // 3hr sesh, 15min per pres = 12 presentations per sesh per room
    let allPresPerSesh = studentsPerRoomPerSesh * dayofWeek.length * seshArr.length; //should be 12*3*2 = 72
    let numberOfClassrooms = Math.ceil(ProjectAlloc.length / allPresPerSesh); // no of presentations/persentations per sesh = num of classrooms we need
    let classroomNum = 1;

    // Implementing ps_chair_ID and ps_2ndmarker_ID

    // No idea how this needs to be done 
    // implementing ps_chair_ID as picking between a predefined list of academics 
    //(that way if kate wants to do all of them she can just self nominate herself and hazer can say which ones he wants working on it) 
    let ps_chair_IDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];
    // setting second marker as the last supervisor in the same sesh, or maybe a predefined array?
    let ps_2ndmarker_IDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];

    //Scheduling Alg
    for (let i = 0; i < ProjectAlloc.length; i++) {

    if (i % 12 === 0) { //for every batch of 12 students
        let tempPres = {}; // Used to build object according to schema before pusing onto presSched

        // Update the presentation properties
        tempPres.ps_ID = presIDCounter;
        tempPres.classroomNumber = classroomNum;
        tempPres.ps_time = seshArr[timeCount % seshArr.length];
        tempPres.ps_date = dayofWeek[dayCount % dayofWeek.length];
        
        //Implementation 1: using preset array of ps_chair_ID and second Marker IDs
        //tempPres.ps_chair_ID = ps_chair_IDarr [presIDCounter-1 % ps_chair_IDarr.length];
        //tempPres.ps_2ndmarker_ID = ps_2ndmarker_IDarr [presIDCounter-1 % ps_2ndmarker_IDarr.length];

        //implementation 2:
        //could also allocate chair as whoever's supervising in that sesh first
        tempPres.ps_chair_ID = ProjectAlloc[i].supervisor_ID;
        //second marker could be the last supervisor in the same sesh.
        if (ProjectAlloc[i + 11] && ProjectAlloc[i + 11].supervisor_ID) {
        tempPres.ps_2ndmarker_ID = ProjectAlloc[i + 11].supervisor_ID;
    } else { //if not enough people in the sesh,
        tempPres.ps_2ndmarker_ID = ProjectAlloc[i].supervisor_ID; // make second marker same as first supervisor
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
    ProjectAlloc[i].presentation_ID = presIDCounter - 1;
    }
    console.log(ProjectAlloc);
    console.log(presSched);
    ProjectAlloc = ProjectAllocStore;
    presSched = PresSchedStore;
}
