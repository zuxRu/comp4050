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
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Assuming we have fetched the required data

function generatePresentationSchedule(studentData, advisorData, classroomNumbers, presentationDates) {
    const schedule = [];

    for (const advisor of advisorData) {
        const advisorStudents = studentData.filter(student => student.advisorId === advisor.id);

        // Sort advisorStudents based on project preferences if needed

        for (const student of advisorStudents) {
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

