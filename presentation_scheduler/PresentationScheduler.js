// Sample Allocation Table and Presentation Table
const AllocationTable = [
    {
        Student_Id: 46012345,
        Supervisor_Id: 1000,
        Project_Id: 101,
        "2nd_Marker_Id": -1, //leave for mvp
        Presentation_Id: -1, //to be filled by presentationTable
    },
    // Other allocation entries, maybe copy paste sample data here for demo
];

const PresentationTable = [
    {
        Presentation_Id: 1,     //2, 3, 4...
        Time: "AM",             //or PM
        Day: "Mon",             // Tue or Wed
        Chair_Id: 1010,
        "2nd_Marker_Id": -1,    //leave at -1 for MVP
    },
    // Other allocation entries, maybe copy paste sample data here for demo
];
//TODO: How do I not cram everything on the same file? is there a way to put the above data in another file for MVP?
//TODO: Get test data from Luca

// Function to populate Presentation_Id in Allocation Table
function populatePresentationIds(AllocationTable, PresentationTable) {
    // Start with Presentation_Id = 1
    let currentPresentationId = 1;


    // TODO: Does this ref to Presentation_Id contain with everything in the presentationTable?
    for (const allocation of AllocationTable) {
        allocation.Presentation_Id = currentPresentationId;

        // Increment Presentation_Id and reset to 1 when it reaches the end of PresentationTable
        currentPresentationId++;
        if (currentPresentationId > PresentationTable.length) {
            currentPresentationId = 1;
        }
    }
}

// Function to calculate the number of classrooms needed
function calculateClassroomsNeeded(AllocationTable) {
    const numberOfStudents = AllocationTable.length;
    const studentsPerClassroom = 72;
    const classroomsNeeded = Math.ceil(numberOfStudents / studentsPerClassroom);
    return classroomsNeeded;
} //TODO: What do I even need this function for???

// Call the functions to populate Presentation_Id and calculate classrooms needed
populatePresentationIds(AllocationTable, PresentationTable);
const classroomsNeeded = calculateClassroomsNeeded(AllocationTable);

// Print the updated AllocationTable and classroomsNeeded
console.log("Updated Allocation Table:");
console.log(AllocationTable);

console.log("Number of Classrooms Needed:", classroomsNeeded);

//TODO: still need a way to test code ://///

