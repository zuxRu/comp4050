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