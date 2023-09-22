import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import SideNav from "./navigation/SideNav";
import ViewProjects from "./pages/general/ViewProjects";
import SubmitPref from "./pages/students/SubmitPref";
import SubmitSelfPref from "./pages/students/SubmitSelfPref";
import Feedback from "./pages/general/feedback";
import TopNav from "./navigation/TopNavBar";
import Dashboard from "./pages/general/Dashboard";
import Login from "./pages/general/Login";
import AddProject from "./pages/academics/AddProject";
import EditProject from "./pages/academics/EditProject";
import ViewPresentationScheduleStudents from "./pages/students/ViewPresentationScheduleStudents";
import ViewPresentationScheduleAcademics from "./pages/academics/ViewPresentationScheduleAcademics";
import Logout from "./pages/general/Logout";
import { useState } from "react";
import Auth from "./components/Auth";
import ReviewProjectPref from "./pages/students/ReviewProjectPref";
import AcademicAvailabilities from "./pages/academics/AcademicAvailabilities";
import Grade from "./pages/academics/Grade";
import ProjectAllocation from "./pages/convenor/ProjectAllocation";
import PresentationSchedule from "./pages/convenor/PresentationSchedule";


function App() {
  const [isOpenCheck, setIsOpenCheckv2] = useState(true);

  const setIsOpenCheck = () => {
    console.log(isOpenCheck);
    setIsOpenCheckv2(!isOpenCheck);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isAcademic, setIsAcademic] = useState(false);
  const [isConvenor, setIsConvenor] = useState(false);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setIsAcademic={setIsAcademic}
              setIsStudent={setIsStudent}
              setIsConvenor={setIsConvenor}
            />
          }
        />
        {/* <Route
          element={
            <>
              <TopNav
                isStudent={isStudent}
                isAcademic={isAcademic}
                className="App"
              />
              <SideNav
                isStudent={isStudent}
                isAcademic={isAcademic}
                className="contents"
              />
            </>
          }
        /> */}
        <Route
          path="/dashboard/"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <Dashboard isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/view-thesis-projects"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <ViewProjects isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/submit-preferences"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                    isLoggedIn={isLoggedIn}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <SubmitPref isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/submit-selfproposed-preferences"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <SubmitSelfPref isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />

        <Route
          path="/view-presentation-timetable-students"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <ViewPresentationScheduleStudents isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />

        <Route
          path="/review-project-preferences"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <ReviewProjectPref isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />

<Route
          path="/presentation-display"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <PresentationSchedule isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/project-allocations"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <ProjectAllocation isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />

        {/* <Route
          element={
            <>
              <TopNav className="App" />
              <SideNav className="contents" />
            </>
          }
        /> */}
        <Route
          path="/dashboard/*"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <Dashboard />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/view-thesis-projects-academic"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <ViewProjects isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/add-thesis-project"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <AddProject isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />

        <Route
          path="/grade-students"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <Grade isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/view-presentation-timetable-aca"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <ViewPresentationScheduleAcademics isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />

        <Route
          path="/view-academic-availabilities"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <AcademicAvailabilities isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route
          path="/edit-thesis-project"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <EditProject isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />

        <Route
          path="/submit-feedback"
          element={
            <>
              <Auth
                isAcademic={isAcademic}
                isStudent={isStudent}
                isConvenor={isConvenor}
                isLoggedIn={isLoggedIn}
              >
                <TopNav
                  isStudent={isStudent}
                  isAcademic={isAcademic}
                  isConvenor={isConvenor}
                  className="App"
                />
                <div className="contents">
                  <SideNav
                    isStudent={isStudent}
                    isAcademic={isAcademic}
                    isConvenor={isConvenor}
                    setIsOpenCheck={setIsOpenCheck}
                  />
                  <div className={isOpenCheck ? "box-open" : "box-closed"}>
                    <Feedback isOpen={isOpenCheck} />
                  </div>
                </div>
              </Auth>
            </>
          }
        />
        <Route path="/logout" element={<Logout></Logout>} />
      </Routes>
    </main>
    //</div>
    //</div>
  );
}

export default App;
