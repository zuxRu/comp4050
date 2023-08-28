// Assumed Data Structure

// const students = [
//     {
//         id: '46012345', //should keep as string or change to int?
//         name: 'John Smith',
//         discipline: 'Software Engineering',
//         thesisTitle: 'The art of fucking around and finding out',
//         advisorId: '40123456',
//         markerId: '40123456',
//         needsSecondMarker: true //if need a second marker
//     },
//     // ... other student objects ...
// ];

// const advisors = [
//     {
//         id: 'advisor1',
//         name: 'Advisor 1',
//         discipline: 'Computer Science',
//         sessionPreference: ['am', 'pm'], // Example: Both morning and afternoon
//         assignedStudents: ['student1', 'student2'], // IDs of assigned students
//     },
//     // ... other advisor objects ...
// ];

// const markers = [
//     {
//         id: 'marker1',
//         name: 'Marker 1',
//         discipline: 'Computer Science',
//         dayPreference: ['Monday', 'Tuesday'], // Example: Available on Monday and Tuesday
//         assignedStudents: ['student1', 'student3'], // IDs of assigned students
//     },
//     // ... other marker objects ...
// ];

//Fetching Data
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//Define session timing
const AM_START_HOUR = 9;
const PM_START_HOUR = 12;
const NUM_TIME_SLOTS_PER_SESSION = 12;

//to be populated with time slots
const timeSlots = [];

// Generate time slots for AM session "hour:minute am"
for (let i = 0; i < NUM_TIME_SLOTS_PER_SESSION; i++) {
    const hour = AM_START_HOUR + Math.floor(i / 4);
    const minute = (i % 4) * 15;
    timeSlots.push(`${hour}:${minute === 0 ? '00' : minute} am`);
}

// Generate time slots for PM session "hour:minute pm"
for (let i = 0; i < NUM_TIME_SLOTS_PER_SESSION; i++) {
    const hour = PM_START_HOUR + Math.floor(i / 4);
    const minute = (i % 4) * 15;
    timeSlots.push(`${hour}:${minute === 0 ? '00' : minute} pm`);
}

async function main() {
    const studentData = await fetchData('API_URL/students'); //replace URLs with actual ones
    const advisorData = await fetchData('API_URL/advisors');
    const markerData = await fetchData('API_URL/markers');
    const schedule = generateSchedule(studentData, advisorData, markerData);
    applyManualOverrides(schedule, studentData);

    // Output the generated schedule
    console.log(schedule);
}

function generateSchedule(studentData, advisorData, markerData) {
    const schedule = {}; // Mapping of student IDs to assigned time slots
    
    for (const student of studentData) {
        const advisor = advisorData.find(a => a.id === student.advisorId);
        const marker = markerData.find(m => m.id === student.markerId);

        // Find an available time slot for the student and assign it
        const availableTimeSlot = findAvailableTimeSlot(student, advisor, marker);
        if (availableTimeSlot) {
            schedule[student.id] = availableTimeSlot;
            advisor.assignedStudents.push(student.id);
            marker.assignedStudents.push(student.id);
        } else {
            console.log(`No available time slot for student ${student.name}`);
        }

        // If a second marker is needed, try to assign one
        if (student.needsSecondMarker) {
            const secondMarker = markerData.find(m => m.id !== student.markerId);
            const availableTimeSlotForSecondMarker = findAvailableTimeSlot(student, advisor, secondMarker);
            if (availableTimeSlotForSecondMarker) {
                student.secondMarkerId = secondMarker.id;
                secondMarker.assignedStudents.push(student.id);
            } else {
                console.log(`No available time slot for second marker for student ${student.name}`);
            }
        }
    }

    return schedule;
}

function findAvailableTimeSlot(student, advisor, marker) {
    // TODO: finding unassigned available timeslot
}

function scheduleHasConflict(timeSlot, student, advisor, marker) {
    // TODO: checking schedule for conflicts
}

// Function to override/modify a timeslot
function applyManualOverrides(schedule, studentData) {
    for (const student of studentData) {
        if (student.manualTimeSlot) {
            schedule[student.id] = student.manualTimeSlot;
        }
    }
}


//to start the process
main();