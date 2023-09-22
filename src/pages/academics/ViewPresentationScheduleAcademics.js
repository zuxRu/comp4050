import React from "react";
import "../../styles/academics/ViewPresentationTimetableAca.css";
import WeeklySessions from "../../components/general/WeeklySessions";
import YourSessionDetailsAca from "../../components/academics/YourSessionDetailsAca";
import YourSessionTimetableAca from "../../components/academics/YourSessionTimetableAca";
import Header from "../../components/general/Header";

export default function ViewPresentationScheduleAcademics({ isOpen }) {
  return (
    <>
      <div className={isOpen ? "master-flexbox" : "master-flexbox-closed"}>
        <Header headerText="View Presentation Schedule" />
        <h2 className="h2-sub-heading">Weekly Session Timetable</h2>
        <div className="child-flexbox">
          <p>
            Below is the Session Schedule for the week. Please ensure you attend
            the session/s assigned to you. If you have any issues, please report
            them ASAP.
          </p>
          <WeeklySessions />
        </div>
        {/* ///////////////////// FLEXBOX SEPERATOR /////////////////////*/}

        <h2 className="h2-sub-heading">Your Session Details</h2>
        <div className="child-flexbox">
          <p>
            Below is your Session Details. You are the Chairperson for this
            session. You will find all relevant details regarding the
            current/upcoming session. If you have any issues, please report them
            ASAP.
          </p>
          <YourSessionDetailsAca />
        </div>
        {/* ///////////////////// FLEXBOX SEPERATOR /////////////////////*/}

        <h2 className="h2-sub-heading">Your Session Schedule</h2>
        <div className="child-flexbox">
          <p>
            Below is the timetable for the presentations running in your
            current/upcoming session. Students marked with an indicator are
            students under your supervision. Please ensure you attend the
            sessions assigned to you. If you have any issues, please report them
            ASAP.
          </p>
          <YourSessionTimetableAca />
        </div>
      </div>
    </>
  );
}
