//Import presSchedAlg to be tested here, so no changes would be made to main file while testing
import { PresentationAlg } from './PresentationScheduler.js';

//Testing edge cases: Using dummy data preset to induce edge cases, 
//see how alg handles the following simulated situations:
/*
- Multiple presentations in one room
- Different supervisors on different days
- Varying classroom sizes
- Single presentation
- Classroom size misfits
- Multiple supervisors with varying presentations
- Varying classroom sizes and no time left for some
*/
function testScheduling() {

    let testAllocatedProjects = [
        // Test case 1: Multiple presentations in one room
        { supervisor_ID: 1 },
        { supervisor_ID: 1 },
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },

        // Test case 2: Different supervisors on different days
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 3 },
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 3 },

        // Test case 3: Varying classroom sizes
        { supervisor_ID: 1 },
        { supervisor_ID: 1 },
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 3 },
        { supervisor_ID: 3 },
        { supervisor_ID: 3 },
        { supervisor_ID: 3 },
        { supervisor_ID: 3 },

        // Test case 4: Single presentation
        { supervisor_ID: 1 },

        // Test case 5: Classroom size misfits
        // This presentation won't fit in any classroom
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 3 },
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 3 },

        // Test case 6: Multiple supervisors with varying presentations
        { supervisor_ID: 1 },
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 3 },
        { supervisor_ID: 3 },
        { supervisor_ID: 4 },
        { supervisor_ID: 4 },
        { supervisor_ID: 4 },
        { supervisor_ID: 4 },
        { supervisor_ID: 5 },
        { supervisor_ID: 6 },

        // Test case 7: Varying classroom sizes and no time left for some
        { supervisor_ID: 1 },
        { supervisor_ID: 1 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 2 },
        { supervisor_ID: 3 },
        { supervisor_ID: 3 },
        { supervisor_ID: 4 },
        { supervisor_ID: 4 },
        { supervisor_ID: 4 },
        { supervisor_ID: 4 },
        { supervisor_ID: 5 },
        { supervisor_ID: 5 },
        { supervisor_ID: 5 },
        { supervisor_ID: 5 },
        { supervisor_ID: 5 },
    ];

    let testResults = [];

    // Test scheduling algorithm for each test case
    for (let i = 0; i < testAllocatedProjects.length; i++) {
        // Reset data structures and counters before each test
        let presSched = [];
        let tempPres = {};
        let presIDCounter = 1;
        let timeCount = 0;
        let classroomNum = 1;
        let dayCount = 0;


        // Push the scheduled presentations into testResults
        testResults.push(presSched);
    }

    // Display the results for each test case so results can be mesured against expected outcome
    for (let i = 0; i < testResults.length; i++) {
        console.log(`Test Case ${i + 1}:`);
        console.log(testResults[i]);
        console.log("\n");
    }
}

testScheduling();