import ProjectAlloc from "../lucasProjectAlloc.json";
import { getAcademics, getAllStudents, getAllProjects, getLucaSchema, getSupervisor } from "./ApiUtils";

const axios = require('axios');

var ProjectAllocStore;
var PresSchedStore;

//var ProjectAlloc =  await getLucaSchema();
var Supervisors = await getSupervisor();
var Academics = await getAcademics();
var Students = await getAllStudents();
var Projects = await getAllProjects();

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
    presentationID        -> +1 every 12 students
    classroomNumber       -> for MVP, classroomNum = 1,2,3 ... substitues room code
    time                  -> AM or PM
    day                   -> Mon Tue or Wed
    chairID (-1)
    secondPresentationMarkerID (-1) 
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

    // Implementing chairID and secondPresentationMarkerID

    // No idea how this needs to be done 
    // implementing chairID as picking between a predefined list of academics 
    //(that way if kate wants to do all of them she can just self nominate herself and hazer can say which ones he wants working on it) 
    let chairIDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];
    // setting second marker as the last supervisor in the same sesh, or maybe a predefined array?
    let secondPresentationMarkerIDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];

    //Scheduling Alg
    for (let i = 0; i < ProjectAlloc.length; i++) {

    if (i % 12 === 0) { //for every batch of 12 students
        let tempPres = {}; // Used to build object according to schema before pusing onto presSched

        // Update the presentation properties
        tempPres.presentationID = presIDCounter;
        tempPres.classroomNumber = classroomNum;
        tempPres.time = seshArr[timeCount % seshArr.length];
        tempPres.day = dayofWeek[dayCount % dayofWeek.length];
        
        //Implementation 1: using preset array of chairID and second Marker IDs
        //tempPres.chairID = chairIDarr [presIDCounter-1 % chairIDarr.length];
        //tempPres.secondPresentationMarkerID = secondPresentationMarkerIDarr [presIDCounter-1 % secondPresentationMarkerIDarr.length];

        //implementation 2:
        //could also allocate chair as whoever's supervising in that sesh first
        tempPres.chairID = ProjectAlloc[i].supervisor_ID;
        //second marker could be the last supervisor in the same sesh.
        if (ProjectAlloc[i + 11] && ProjectAlloc[i + 11].supervisor_ID) {
        tempPres.secondPresentationMarkerID = ProjectAlloc[i + 11].supervisor_ID;
    } else { //if not enough people in the sesh,
        tempPres.secondPresentationMarkerID = ProjectAlloc[i].supervisor_ID; // make second marker same as first supervisor
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

export function exportMarkerData () {
    console.log(ProjectAllocStore);
}