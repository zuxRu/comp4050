import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./sideBar.module.css"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState, useEffect } from "react";
import { getView, logout } from "../utils/ApiUtil";
import { navDataAcademics } from "./NavBarAcademics";
import { navDataStudents } from "./NavBarStudents";
import { navDataConvenor } from "./NavBarConvenor";

export default function SideNav({setIsOpenCheck, isAcademic, isStudent, isConvenor, isLoggedIn}) {
    const [open, setopen] = useState(true); //for knowing when to collapse and open
    const [student, setstudent] = useState(isStudent);
    const [academic, setacademic] = useState(isAcademic);
    const [convenor, setconvenor] = useState(isConvenor);
    const [logout, setLogout] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const navigate = useNavigate();

    // Function to update screen dimensions when the window is resized
    const updateScreenDimensions = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

     // Add an event listener to update dimensions when the window is resized
    useEffect(() => {
        window.addEventListener('resize', updateScreenDimensions);
        console.log(screenWidth)
        if(screenWidth < 800) {
            console.log("here")
            setopen(false);
            setIsOpenCheck(false)
            return;
        }
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateScreenDimensions);
            if(screenWidth < 800) {
                console.log("here")
                setopen(false);
                setIsOpenCheck(false)
                return;
            }
        };
    }, []);

    const toggleOpen = () => {
        setopen(!open)
        setIsOpenCheck(!open)
    }

    const nowLogout = () =>{
        navigate("/logout")
        setstudent = false;
        setacademic = false;
        setconvenor = false;
    }

    
    let navData = [];
    if(student && !academic && !convenor) {
        navData = navDataStudents;
    } else if(academic && !student && !convenor) {
        navData = navDataAcademics;
    } else if(convenor && !academic && !student) {
        navData = navDataConvenor;
    }else {
        navData = [];
    }

    return (
    <div className={styles.container}>
       
        <div className={open?styles.sideBar:styles.sideBarClosed}>
            <div>
                <button id="collapseButton" className={styles.menuBtn} onClick={toggleOpen}>
                    {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
                </button>
                {navData && navData.length > 1 ? navData.map(item =>{
                    return <NavLink key={item.id} className={styles.sideComp} to={item.link}>
                            {item.icon}
                            <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                        </NavLink>
                }) : <></> }
                <Link className={styles.sideComp} onClick={{nowLogout}}>
                    <LogoutIcon />
                    <span className={open?styles.linkText:styles.linkTextClosed}>Log Out</span>
                </Link>
            </div>
            {/* <div>
                <Link className={styles.logout} onClick={logout}>
                    <LogoutIcon />
                    <span className={open?styles.linkText:styles.linkTextClosed}>Log Out</span>
                </Link>
            </div> */}
        </div>
    </div>
    )
  }