// const fs = require('fs');
const uri = `./src/SampleData/JSON_files`;
const projects = require("../SampleData/JSON_files/Projects.json")
const students = require("../SampleData/JSON_files/Student.json")
const academic = require("../SampleData/JSON_files/Academic.json")
const projectPref = require("../SampleData/PROJECT_PREF.json")
const thesisAStudents = require("../SampleData/ThesisAStudents.json")
const thesisBStudents = require("../SampleData/ThesisBStudents.json")
const numThesisStudents = require("../SampleData/numThesisStud.json")
const toGradeStudents = require("../SampleData/Grade_students.json")

/// Returns the current view Students or Academic based on the user signed in


module.exports.getView = () => {
  // fill in
  console.log("get view");

  return {
    students: true,
    academics: false,
    convenor: false
  }
}

///function logs user out of the system
/// returns true/false based on success of the activity
module.exports.logout = () => {
    // fill in
    console.log("log out");
    return {
      students: false,
      academics: false,
      convenor: false
    }
}


///function logs user in to the system
/// returns true/false based on success of the activity
module.exports.login = () => {
  // fill in
  console.log("log in");
  return true;
};

module.exports.getGradeStudents = () => {
  return toGradeStudents;
}

module.exports.getProjectPref = () => {
  return projectPref;
}

///returns the thesis projects intended for students view
module.exports.getAllProjects = () => {
  return projects;
};

module.exports.getThesisAstudents = () => {
  return thesisAStudents
}

module.exports.getThesisBstudents = () => {
  return thesisBStudents
}

module.exports.getThesisStudLimits = () => {
  return numThesisStudents
}


/// returns the projects by the supplied supervisor id
/// intended for academic view
module.exports.getProjectsBySupervisor = (supId) => {
  return projects.filter(
    (el) =>
      el.p_supervisor === supId ||
      el.p_co_supervisor === supId ||
      el.p_industry_supervisor === supId
  );
};

///view the presentat
module.exports.viewPresentationSchedule = () => {
  console.log("view presentation schedule");
};

module.exports.viewThesisProjectsAcademics = () => {
  console.log("view thesis projects academics");
};

module.exports.submitThesisProjectPreference = (preference) => {
  console.log(preference);
  console.log("submit pref");
};

module.exports.markThesisProject = (obj) => {
  console.log(obj);
  console.log("hit marking function");
};

module.exports.viewAcademicAvailabilities = () => {
  console.log("view academic availabities");
};

module.exports.submitSelfProposedProject = () => {
  console.log("submit self pref");
};
