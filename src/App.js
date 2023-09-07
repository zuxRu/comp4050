import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SideNav from './navigation/SideNav';
import View from "./pages/students/ViewProjects";
import SubmitPref from "./pages/students/SubmitPref";
import SubmitSelfPref from "./pages/students/SubmitSelfPref";
import Feedback from "./pages/general/feedback";
import TopNav from "./navigation/TopNavBar";
import Dashboard from "./pages/general/Dashboard";
import Login from "./pages/general/Login";
import navDataAcademics  from "./navigation/NavBarAcademics";
import Academics from "./pages/academics/Academics";
import PresentationSchedule from "./pages/academics/PresentationSchedule";
import ProjectAllocation from "./pages/academics/ProjectAllocation";


function App() {
  return (
    <div className="App">

      <div className="contents">
        
        <main>
          
          <Routes>  
            <Route path="/" element={<Login />}/>
            <Route element={<><TopNav className="App"/><SideNav className="contents"/></>}/>
            <Route path="/Academics/*" element={<><TopNav/><div className="contents"><SideNav /><Dashboard/></div> </>}/>
            <Route path="/dashboard/*" element={<><TopNav/><div className="contents"><SideNav /><Dashboard/></div> </>}/>
            <Route path="/PresentationSchedule/*" element={<><TopNav/><div className="contents"><SideNav /><PresentationSchedule/></div> </>}/>
            <Route path="/ProjectAllocation/*" element={<><TopNav/><div className="contents"><SideNav /><ProjectAllocation/></div> </>}/>
            <Route path="/view-thesis-projects" element={<><TopNav/><div className="contents"><SideNav /><View/></div> </>}/>
            <Route path="/submit-preferences" element={<><TopNav/><div className="contents"><SideNav /><SubmitPref/></div> </>} />
            <Route path="/submit-selfproposed-preferences" element={<><TopNav/><div className="contents"><SideNav /><SubmitSelfPref/></div> </>}/>
            <Route path="/submit-feedback" element={<><TopNav/><div className="contents"><SideNav /><Feedback/></div> </>}/>
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;