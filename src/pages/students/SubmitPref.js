import React from "react";
import "../../styles/general/headerCommon.css";
import "../../App.css";
import Header from "../../components/general/Header";

import StudentDetails from "../../components/students/StudentDetails";
import ShortlistedTopics from "../../components/students/ShortlistedTopics";
import ChoosePreferences from "../../components/students/ChoosePreference";

export default function SubmitPref({ isOpen }) {
  return (
    <>
      <div className={isOpen ? "master-flexbox" : "master-flexbox-closed"}>
        <Header headerText="Submit Thesis Preference" />
        <h2 className="h2-sub-heading">Enter Student Details</h2>
        <div className="child-flexbox">
          <p>Please enter your Student Details below.</p>
          <StudentDetails />
        </div>
        {/* ///////////////////// FLEXBOX SEPERATOR /////////////////////*/}

        <h2 className="h2-sub-heading">View Shortlisted Topics</h2>
        <div className="child-flexbox">
          <p>
            Here are the 10 topics you had shortlisted. You can compare them and
            choose your preferences below.
          </p>
          <ShortlistedTopics />
        </div>
        {/* ///////////////////// FLEXBOX SEPERATOR /////////////////////*/}

        <h2 className="h2-sub-heading">Submit Thesis Preferences</h2>
        <div className="child-flexbox">
          <p>
            Please choose your top 5 topic preferences by entering in their
            Project ID.
          </p>
          <ChoosePreferences />
        </div>
      </div>
    </>
  );
}
