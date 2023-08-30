/*Data we need to fetch:
- StudentID
- AdvisorID
- Marker1ID
- Marker2ID (if exists)
- Project Title
*/

/*Data we need to feed the alg:
- List of Class numbers e.g. ["4RPD101"."4RPD102","4RPD103"]
- Dates set for presentation (2-3 dates in the form of DD/MM/YYYY), 
- Advisors’ date preference (Same form as dates set for presentation) 
^ SHOULD THIS BE FROM THE DATABASE?? (bese if is a part of the Advisor object)
*/


//TODO: NEED TO FETCH DATA SOMEHOW
//PROBLEM: Still need a way to simulate fetch data in order to test code!!!
async function fetchData(url) {
// something here TODO
    return data;
}

// Assuming we have fetched the required data

function generatePresentationSchedule(studentData, advisorData, classroomNumbers, presentationDates) {
    const schedule = [];

    // Sort students by advisor ID
    studentData.sort((a, b) => a.advisorId.localeCompare(b.advisorId));

    for (const advisor of advisorData) {
        const advisorStudents = studentData.filter(student => student.advisorId === advisor.id);

        // Use advisor's preferred presentation date(s)
        //assumes that the presentationDatePreferences property is present in the advisor data
        //Maybe find a way to add preference to Database <= TODO!!!!!!!!!!!!!!!!!
        for (const presentationDate of advisor.presentationDatePreferences) {
            // Find available time slot on presentationDate
            const availableTimeSlot = getTimeSlotForPresentation(presentationDate, schedule);

            if (availableTimeSlot !== null) {
                const classroomNumber = findAvailableClassroom(classroomNumbers, presentationDate);
                if (!classroomNumber) {
                    console.log(`No available classroom for advisor ${advisor.id}`);
                    continue;
                }

                const student = advisorStudents.pop(); // Get the next student from the list

                const presentation = {
                    date: presentationDate,
                    time: availableTimeSlot,
                    classroom: classroomNumber,
                    studentId: student.id,
                    advisorId: advisor.id,
                    markerId: student.markerId,
                    secondMarkerId: student.secondMarkerId || "No Second Marker",
                    projectTitle: student.projectTitle,
                };

                schedule.push(presentation);
            }
        }
    }

    return schedule;
}

// TODO: Implement the findAvailablePresentationDate and getTimeSlotForPresentation functions

function getTimeSlotForPresentation(presentationDate, scheduledPresentations) {
    // Calculate the total number of time slots from 9:00 am to 3:00 pm
    const totalSlots = (3 * 60 - 9 * 60) / 15; //should be 24 slots

    // Create an array to track available time slot; true = empty, false = assigned
    const availableSlots = new Array(totalSlots).fill(true); //initialized as true

    // Mark time slots that are already scheduled as unavailable
    for (const presentation of scheduledPresentations) {
        if (presentation.date === presentationDate) {
            const timeSlotIndex = getTimeSlotIndex(presentation.time);
            availableSlots[timeSlotIndex] = false;
        }
    }

    // Find the index of the first available time slot
    const availableSlotIndex = availableSlots.indexOf(true);
    
    if (availableSlotIndex !== -1) {
        return getTimeSlotByIndex(availableSlotIndex);
    }

    return null; // No available time slot on this date
}

function getTimeSlotIndex(time) {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    return (totalMinutes - 9 * 60) / 15;
}

function getTimeSlotByIndex(index) {
    const totalMinutes = 9 * 60 + index * 15;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes === 0 ? '00' : minutes}`;
}