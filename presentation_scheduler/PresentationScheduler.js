async function projects() {
  const response = await fetch("http://localhost:8080/api/projects");
  const movies = await response.json();
  console.log(allocatedProjects);
}


//Allocated Projects generated by Luca
// let allocatedProjects = [
//   {
//     s_ID: 95439311,
//     supervisor_ID: 'mq15391351',
//     project_ID: 105,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88966598,
//     supervisor_ID: 'mq15533296',
//     project_ID: 208,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95649186,
//     supervisor_ID: 'mq15634092',
//     project_ID: 132,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95967598,
//     supervisor_ID: 'mq33725504',
//     project_ID: 111,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95543356,
//     supervisor_ID: 'mq15662398',
//     project_ID: 97,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88929195,
//     supervisor_ID: 'mq15792815',
//     project_ID: 211,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88438214,
//     supervisor_ID: 'mq21908415',
//     project_ID: 22,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95472165,
//     supervisor_ID: 'mq21335822',
//     project_ID: 26,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88613806,
//     supervisor_ID: 'mq15662398',
//     project_ID: 223,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88927762,
//     supervisor_ID: 'mq15432791',
//     project_ID: 125,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95150680,
//     supervisor_ID: 'mq43801749',
//     project_ID: 202,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95417903,
//     supervisor_ID: 'mq33510605',
//     project_ID: 9,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95309973,
//     supervisor_ID: 'mq21438214',
//     project_ID: 90,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95478889,
//     supervisor_ID: 'mq15207275',
//     project_ID: 76,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95309485,
//     supervisor_ID: 'mq15634092',
//     project_ID: 43,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 43228003,
//     supervisor_ID: 'mq21625693',
//     project_ID: 146,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95792895,
//     supervisor_ID: 'mq15533296',
//     project_ID: 104,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86258981,
//     supervisor_ID: 'mq33260056',
//     project_ID: 67,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95434913,
//     supervisor_ID: 'mq15219910',
//     project_ID: 88,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88428693,
//     supervisor_ID: 'mq15337194',
//     project_ID: 184,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 49507283,
//     supervisor_ID: 'mq15634092',
//     project_ID: 11,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95439311,
//     supervisor_ID: 'mq15207275',
//     project_ID: 59,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95867194,
//     supervisor_ID: 'mq15634092',
//     project_ID: 152,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86283013,
//     supervisor_ID: 'mq33510605',
//     project_ID: 217,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88966598,
//     supervisor_ID: 'mq15207275',
//     project_ID: 27,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95439311,
//     supervisor_ID: 'mq15634092',
//     project_ID: 86,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95665737,
//     supervisor_ID: 'mq21625693',
//     project_ID: 52,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86283013,
//     supervisor_ID: 'mq21164971',
//     project_ID: 213,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95986116,
//     supervisor_ID: 'mq15634092',
//     project_ID: 132,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95667365,
//     supervisor_ID: 'mq15792815',
//     project_ID: 39,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95673837,
//     supervisor_ID: 'mq15634092',
//     project_ID: 150,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86260056,
//     supervisor_ID: 'mq15156022',
//     project_ID: 41,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86160051,
//     supervisor_ID: 'mq15207275',
//     project_ID: 27,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95958238,
//     supervisor_ID: 'mq15219910',
//     project_ID: 169,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95391351,
//     supervisor_ID: 'mq15515515',
//     project_ID: 30,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95689016,
//     supervisor_ID: 'mq21335822',
//     project_ID: 72,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95682888,
//     supervisor_ID: 'mq21625693',
//     project_ID: 186,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95434913,
//     supervisor_ID: 'mq21625693',
//     project_ID: 172,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86725504,
//     supervisor_ID: 'mq15472165',
//     project_ID: 17,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86235949,
//     supervisor_ID: 'mq15515515',
//     project_ID: 130,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88625693,
//     supervisor_ID: 'mq43801749',
//     project_ID: 77,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95527652,
//     supervisor_ID: 'mq15515515',
//     project_ID: 94,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86158987,
//     supervisor_ID: 'mq33260056',
//     project_ID: 215,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 43682871,
//     supervisor_ID: 'mq15792815',
//     project_ID: 106,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88480741,
//     supervisor_ID: 'mq33510605',
//     project_ID: 153,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86175806,
//     supervisor_ID: 'mq21335822',
//     project_ID: 161,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86258981,
//     supervisor_ID: 'mq15630216',
//     project_ID: 114,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95207275,
//     supervisor_ID: 'mq15985915',
//     project_ID: 51,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86510605,
//     supervisor_ID: 'mq33510605',
//     project_ID: 133,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88929195,
//     supervisor_ID: 'mq21908415',
//     project_ID: 124,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95871728,
//     supervisor_ID: 'mq15533296',
//     project_ID: 4,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 43813518,
//     supervisor_ID: 'mq21910568',
//     project_ID: 188,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95636591,
//     supervisor_ID: 'mq15156022',
//     project_ID: 175,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95662398,
//     supervisor_ID: 'mq15432791',
//     project_ID: 204,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95096163,
//     supervisor_ID: 'mq15207275',
//     project_ID: 127,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95499918,
//     supervisor_ID: 'mq15792815',
//     project_ID: 39,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95204152,
//     supervisor_ID: 'mq21164971',
//     project_ID: 174,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95574766,
//     supervisor_ID: 'mq15533296',
//     project_ID: 208,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 49520328,
//     supervisor_ID: 'mq15634092',
//     project_ID: 11,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86116184,
//     supervisor_ID: 'mq15662398',
//     project_ID: 93,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95986116,
//     supervisor_ID: 'mq43801749',
//     project_ID: 128,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95162972,
//     supervisor_ID: 'mq15634092',
//     project_ID: 1,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95309973,
//     supervisor_ID: 'mq21910568',
//     project_ID: 188,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95712913,
//     supervisor_ID: 'mq21910568',
//     project_ID: 48,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88428693,
//     supervisor_ID: 'mq33510605',
//     project_ID: 153,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95096163,
//     supervisor_ID: 'mq21438214',
//     project_ID: 90,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95733007,
//     supervisor_ID: 'mq15432791',
//     project_ID: 204,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86160086,
//     supervisor_ID: 'mq33725504',
//     project_ID: 111,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95630216,
//     supervisor_ID: 'mq15515515',
//     project_ID: 130,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86160051,
//     supervisor_ID: 'mq33510605',
//     project_ID: 12,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88428693,
//     supervisor_ID: 'mq21164971',
//     project_ID: 174,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95871728,
//     supervisor_ID: 'mq21419775',
//     project_ID: 121,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95620326,
//     supervisor_ID: 'mq15219910',
//     project_ID: 113,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95986116,
//     supervisor_ID: 'mq33725504',
//     project_ID: 103,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95634092,
//     supervisor_ID: 'mq15985915',
//     project_ID: 38,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95607796,
//     supervisor_ID: 'mq15630216',
//     project_ID: 164,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95705879,
//     supervisor_ID: 'mq21438214',
//     project_ID: 99,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86222278,
//     supervisor_ID: 'mq15219910',
//     project_ID: 74,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88161388,
//     supervisor_ID: 'mq15634092',
//     project_ID: 132,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95238885,
//     supervisor_ID: 'mq33510605',
//     project_ID: 47,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95159629,
//     supervisor_ID: 'mq21625693',
//     project_ID: 92,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95667365,
//     supervisor_ID: 'mq15630216',
//     project_ID: 164,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95391351,
//     supervisor_ID: 'mq15662398',
//     project_ID: 196,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95952612,
//     supervisor_ID: 'mq15391351',
//     project_ID: 135,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88161388,
//     supervisor_ID: 'mq15391351',
//     project_ID: 5,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95966877,
//     supervisor_ID: 'mq15985915',
//     project_ID: 91,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95966877,
//     supervisor_ID: 'mq15219910',
//     project_ID: 74,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88481888,
//     supervisor_ID: 'mq33510605',
//     project_ID: 47,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95889910,
//     supervisor_ID: 'mq15985915',
//     project_ID: 78,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86158871,
//     supervisor_ID: 'mq15985915',
//     project_ID: 220,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 43682871,
//     supervisor_ID: 'mq15634092',
//     project_ID: 86,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86108777,
//     supervisor_ID: 'mq21164971',
//     project_ID: 40,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95634092,
//     supervisor_ID: 'mq43801749',
//     project_ID: 77,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86510605,
//     supervisor_ID: 'mq33510605',
//     project_ID: 73,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95430888,
//     supervisor_ID: 'mq15472165',
//     project_ID: 119,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95589550,
//     supervisor_ID: 'mq21625693',
//     project_ID: 138,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 95220522,
//     supervisor_ID: 'mq15207275',
//     project_ID: 224,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86331689,
//     supervisor_ID: 'mq15432791',
//     project_ID: 66,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 88480741,
//     supervisor_ID: 'mq21613415',
//     project_ID: 177,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
//   {
//     s_ID: 86158960,
//     supervisor_ID: 'mq43801749',
//     project_ID: 77,
//     second_marker_ID: -1,
//     presentation_ID: -1,
//   },
// ];

//Sort allocated Projects by supervisor as a Optimization -> Presentation more likely to have the same supervisor
//Problem/edge case: how to prevent same supervisor in multiple rooms at the same time?
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
let numberOfClassrooms = Math.ceil(allocatedProjects.length / allPresPerSesh); // no of presentations/persentations per sesh = num of classrooms we need
let classroomNum = 1;

// Implementing chairID and secondPresentationMarkerID

// No idea how this needs to be done 
// implementing chairID as picking between a predefined list of academics 
//(that way if kate wants to do all of them she can just self nominate herself and hazer can say which ones he wants working on it) 
let chairIDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];
// setting second marker as the last supervisor in the same sesh, or maybe a predefined array?
let secondPresentationMarkerIDarr = [466997,465796,466347,469056,469004,463817,460162,467174,465304,466355,466074,465382,461209,460413,469840,462845,469302];

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
    //tempPres.secondPresentationMarkerID = secondPresentationMarkerIDarr [presIDCounter-1 % secondPresentationMarkerIDarr.length];

    //implementation 2:
    //could also allocate chair as whoever's supervising in that sesh first
    tempPres.chairID = allocatedProjects[i].supervisor_ID;
    //second marker could be the last supervisor in the same sesh.
    if (allocatedProjects[i + 11] && allocatedProjects[i + 11].supervisor_ID) {
      tempPres.secondPresentationMarkerID = allocatedProjects[i + 11].supervisor_ID;
  } else { //if not enough people in the sesh,
      tempPres.secondPresentationMarkerID = allocatedProjects[i].supervisor_ID; // make second marker same as first supervisor
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

console.log("Number of Classrooms needed: " + numberOfClassrooms);
console.log(presSched);
console.log(allocatedProjects);

