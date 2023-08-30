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
*/


//TODO: NEED TO FETCH DATA SOMEHOW
//PROBLEM: Still need a way to simulate fetch data in order to test code!!!

async function fetchData(url) {
// something here TODO
    return data;
}

// Assuming we have fetched the required data

function generatePresentationSchedule(studentData, advisorData, classroomNumbers, presentationDates) {
    const schedule = []; //to populate for final schedule

    for (const advisor of advisorData) {
        const advisorOfStudents = studentData.filter(student => student.advisorId === advisor.id);

        // Sort advisor of Students based on project preferences
        for (const student of advisorOfStudents) {
            const presentationDate = findAvailablePresentationDate(advisor, presentationDates);
            if (!presentationDate) {
                console.log(`No available presentation date for student ${student.id}`);
                continue;
            }

            const classroomNumber = findAvailableClassroom(classroomNumbers, presentationDate);
            if (!classroomNumber) {
                console.log(`No available classroom for student ${student.id}`);
                continue;
            }

            const presentation = { //the form the presentation is in 
                date: presentationDate,
                time: getTimeSlotForPresentation(presentationDate), // Implement this function
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