import React from "react";
import "../../App.css";
import WeeklySessions from "../../components/general/WeeklySessions";
import YourSessionTimetable from "../../components/students/YourSessionTimetable";
import YourSessionDetails from "../../components/students/YourSessionDetails";
import Header from "../../components/general/Header";

export default function ViewPresentationScheduleStudents({ isOpen }) {
  return (
    <>
      <div className={isOpen ? "master-flexbox" : "master-flexbox-closed"}>
        <Header headerText="View Presentation Schedule" />
        <h2 className="h2-sub-heading">Weekly Session Timetable</h2>
        <div className="child-flexbox">
          <p>
            Below is the Session Schedule for the week. Please ensure you attend
            the session assigned to you. If you have any issues, please report
            them ASAP.
          </p>
          <WeeklySessions />
        </div>
        {/* ///////////////////// FLEXBOX SEPERATOR /////////////////////*/}

        <h2 className="h2-sub-heading">Your Session Details</h2>
        <div className="child-flexbox">
          <p>
            Below is your Presentation Details. Please ensure you attend the
            session assigned to you. If you have any issues, please report them
            ASAP.
          </p>
          <YourSessionDetails />
        </div>
        {/* ///////////////////// FLEXBOX SEPERATOR /////////////////////*/}

        <h2 className="h2-sub-heading">Your Session Schedule</h2>
        <div className="child-flexbox">
          <p>
            Below is the timetable for the presentations running in your
            specific session. Please ensure you attend the session assigned to
            you. If you have any issues, please report them ASAP.
          </p>
          <YourSessionTimetable />
        </div>
      </div>
    </>
  );
}
