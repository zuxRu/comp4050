/*




SelfProposedProject

sp_student_ID (PK), sp_title, sp_supervisor_ID (FK), sp_co_supervisor_ID (FK), sp_research_question, sp_description, sp_skills, sp_additional_skills, sp_required_labs,  sp_date_submitted


Preferences

pr_student_ID, pr_date_submitted, pr_pref1, pr_pref2, pr_pref3, pr_pref4, pr_pref5


Discipline

d_ID (PK), d_name */

// Student

// Fields:
//  st_ID (PK),
//   st_first_name
//   , st_last_name,
//   st_email,
//   st_unit,
//   st_WAM,
//   st_CP

class Student {
  studentID;
  firstName;
  lastName;
  studentEmail;
  unitEnrolled;
  wam;
  creditPoints; //?
}

// Academic

// Fields:
//  a_ID (PK),
//   a_first_name,
// a_last_name,
// a_email,
// a_discipline
//  (FK), a_school

class Academic {
  mqId;
  firstName;
  lastName;
  mqEmail;
  discipline;
  schoolOf;
}
// Supervisor

// Fields: s_ID (PK), s_capacity, s_current_load

class Supervisor extends Academic {
  students = [];
  studntCapacity;
  currentStudents = this.students.length;
}

// ProgramLead

// Fields: pl_ID (PK)

class ProgramLead extends Acadamic {
  LeadId;
}

// Project

// p_ID (PK),
// p_supervisor (FK),
//	p_size,
//p_title,
//p_description,
// p_research_question,
// p_fields,
//p_co_supervisor (FK) ,
// p_industry_topic,
//p_industry_supervisor,
// p_type, p_lab_access,
// p_skills,
//p_status

class Project {
  projcetId;
  projectSupervisor;
  size;
  title;
  description;
  researchQuestion;
  fields;
  coSupervisor;
  industryTopic;
  type;
  labAccess;
  skills;
  status;
}
function loadData() {
  //initilization
  let x; //load enrolled students,df_enrol
  //self-preoposed projects, df_self
  //student prefernces,  df_sp
  //student wam, df_WAM
  //supervisor df_super
  //project lists df_prjlst
}

function correctStdInfo(enrollmentInfo, prefernces) {
  //correct typos in sp_sp using df_enrol
}

function fillprjList(df_prjlist, df_super) {
  //fills in empty fields in df_prjList and removes
  // in unwated special charecters and spaces
}

function correctSelfProposed(df_self, df_enrol, df_super) {
  //correct typos in df_self with info from df_enrol and df_super
}

function generateDraft(df_sp) {
  //generates an empty draft project allocation --df_draft--
  //except student_Id's and project preferences cepied from df_sp
  //with correct column and index values
}

function fillUnsubmitted(df_enrol, df_sp, df_draft) {
  //fills in student info for those who did not submit any preferences
  //and returns draft allocation with filled values
}

function studentType(df_enrol, student_Id) {
  //Determines the student type (Thesis A or A+ extension)
}

df_prjlist = FellPrjList();
df_self = correctSelfProposed();
df_sp = correctStdInfo();
df_draft = generateDraft();
df_draft = fillUnsubmitted();

for (let i = 0; i < df_draft.size; i++) {
  if (df_draft[i].student_Id.isFaulty) {
    //manual allocation identify the student
    /*
    fill row k student info using df_sp
    fill row k unit major using df_sp
    fill in row k project using df_prjlis
    */
  } else {
    /*
      fill row k using student info using df_enrol
      fill in row k WAM using df_WAM
      fill in row k unit major using df_enrol
      fill in row k project using df_prjlist
      StudentType(df_enrol, Studnet ID)
      remove preferences not in 
    */
  }
}
