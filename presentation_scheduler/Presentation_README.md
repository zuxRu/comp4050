# Presentation Scheduler Documentation

This algorithm is the responsibility of David Yuelei Huo SID:460945376 of team Zeus, Sparta branch for the APEX project. 

This is file is documentation of the scheduler algorithm in the APEX project from creation. Right now it serves as notes for me to work on. Hopefully it will evolve to proper documentation of the the algorithm as time goes on.

## Initial Ideas and Feedbacks

### list of data I need in my algorithm:

Student info
    - Name
    - SID
    - (optional) student email
    - Discipline
    - Thesis project title
    - Advisor (should be assigned at this stage)
    - Marker (should be assigned at this stage)
    - (optional cuz students got no rights) Day preference
    - (optional) Time preference

Advisor Info:
    - Name
    - ID
    - Discipline
    - Day preference 
    - (optional) Time preference
    - List of students they're advicing/marking (SID)
    - (optional) List of projects they're marking
    - (optional) email
    - (optional) marking/advicing load

Marker Info:
    - Name
    - ID
    - Discipline
    - Day preference 
    - List of assigned students they're marking (SID)
    - (optional) Time preference
    - (optional) email
    - (optional) List of projects they're marking

Thesis project/presentation Info:
    - Project Titles
    - Project Disciplines
    - (Optional) presentation length (standard length for all presentations e.g. 15min)
    - (Optional/Advanced) break details (is there a break, when and how long)
    - (Optional/Advanced) room equipment details (and equipment requirement from students)

what I need to ping back:
    - Specify form data will be sent back in (array? CSV? Table? And what about order of variables?)
    - Specify ping back location (domain where I'm sending the data to)

### Team leader/Olympus reply

1 The presentation dates are fixed for ideally 2 days but maximum can be 3. If we have more kids just more classes are run in parallel over those 2/3 days.

2 markers time preferences dont matter you just tell them when to be there and if they really cant make it kate will manually override it

3 15 minutes per student 

4 There are 2 sessions per day am/pm 

5 One of the markers is s session "chair" who runs the session. This is where it gets a bit messy and I'm a bit unclear how they want this actually implemented. Normally kate is the session chair for quite literally all of our presentation but some other conveners assign someone else. Further there was talk of trying to group people with the same supervisor/same project together in the same session if possible. I'm not certain how much of this is a stretch goal and how much is MVP but I'll leave it to your judgement.

## Reconsideration and restarting the algorithm

After thinking about the problem longer, I realised a few things: 
1. We are making a schedule generator. At this stage of the program, the project allocation is done, the marker allocation is done, all we need to do is generate a presentation schedule in accordance to the preferences of the advisor. So, we need to pull relevant required info from database: all the student info, the project they’re doing, their assigned advisors and markers, relevant info about the project. 
2. Each student has 1 advisor and 1 or 2 markers. For a scheduled presentation, the student, the advisor and the marker(s) have to all be there. We ignore the student and marker’s preferences and only tend to the preference of the advisor. 
3. The presentation dates are fixed for ideally 2 days but maximum can be 3. If we are over capacity, more classes are run in parallel over those 2 to 3 days.
4. The algorithm should take in these new info: Class numbers (list of classroom codes for the classes are run in parallel that day for presentation), dates that the presentation is set on (2-3 dates in the form of DD/MM/YYYY), and the advisors’ date preference.
5. The schedule output should look something like this [“DateOfPresentation” “TimeOfPresentation” “ClassRoomNumber” “StudentID1” “AdvisorID1” “MarkerID1” “SecondMarkerID” “ProjectTitle”], [“DateOfPresentation” “TimeOfPresentation” “ClassRoomNumber” “StudentID2” “AdvisorID2” “MarkerID2” “No Second Marker” “ProjectTitle”], … With values it looks something like this: [06/11/2023,9:45am,4RPD102,46012345,40000000,40000001,40000002,Optimal arial pathing for drones]

So I decided to scrap the parts of the code where I am trying to allocate markers and advisors, and rethink about what info i have and don't have at this stage.

## Schema received from Olympus team (wk6)

Luca and Joe will update the Allocation Table first:

const AllocationTable = {
                    Student_Id,
                    Supervisor_Id,
                    Project_Id,
                    2nd_Marker_Id, // set to -1 for MVP
                    Presentation_Id, // set to -1 by default to be populated
                };

And my part of the algorithm is to pull this Allocation Table, and populate the Presentation_Id part with the presentation table:

const PresentationTable = {
                    Presentation_Id,                //unique id for each presentation
                    Time: AM || PM,                 //for mvp, separate each day into 2 timeslots
                    Day: "Mon" || "Tue"  || "Wed",  //preset days for mvp
                    Chair_Id: 1010,                 // chair is the person overseeing all the presentations, ususally Kate,
                    2nd_Marker_Id: -1,              // set to -1 for mvp
                };
I also need to work out how many classrooms we need. To do so, we know that it is fixed that we have 3 days and 2 sessions per day, which gives us 6 sessions per classroom. The number of AllocationTables = the number of students. Each session have 12 students in them, so each classroom can host 72 students. So the number of classrooms needed = (number of AllocationTables)/72. 


I also don't need to worry about the functions for manually changing the values of the fields (Raj's job)
Though my job suddenly seems much easier/clearer, I kinda have to redo the whole thing since this is different than what I thought. 

## 1-1 meeting with Luca

Finalised Schema for MVP:

  presentationID        //Unique ID: 1, 2, 3 ...
  classroomNumber       //Needs to be calculated. For MVP use 1, 2, 3.., substitute for real classrooms in later iterations
  time                  //Either AM || PM
  day                   //Preset. For mvp, assume Mon, Tue, Wed
  chairID (-1)          //Stay as -1 for now
  secondMarkerID (-1)   //Stay as -1 for now

PresID is unique for each unique session (specific classroom, time and day)

After thinking, I decided that the order of change will be time, classroom and day. 

E.G. For 2 classrooms C1 and C2, the presID 1,2,3 ... should represent

MonC1AM, MonC1PM, MonC2AM, MonC2PM, TueC1Am ... 

by filling 1 class before filling the next, minimises the chance for same Advisor to be scheduled in two diff classrooms at the same time. 

## Presentation_Scheduler Alpha MVP released

## Mid sem break goals
Fixed bugs in MVP, now fully working as intended
I want to implement ChairID and SecondMarkerID, but I have no idea how Kate and Hazer wants this to be done. 