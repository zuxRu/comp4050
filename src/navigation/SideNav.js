import { NavLink, Link } from "react-router-dom";
import styles from "./sideBar.module.css"
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import { getView, logout } from "../utils/ApiUtil";
import { navDataAcademics } from "./NavBarAcademics";
import { navDataStudents } from "./NavBarStudents";

export default function SideNav() {
    const [open, setopen] = useState(true); //for knowing when to collapse and open

    const toggleOpen = () => {
        setopen(!open)
    }
    
    let navData = [];
    if(getView().students && !getView().academics) {
        navData = navDataStudents;
    } else if(!getView().students && getView().academics) {
        navData = navDataAcademics;
    } else {
        navData = [];
    }

    return (
    <div className={styles.container}>
       
        <div className={open?styles.sideBar:styles.sideBarClosed}>
            <div>
                <button className={styles.menuBtn} onClick={toggleOpen}>
                    {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
                </button>
                {navData && navData.length > 1 ? navData.map(item =>{
                    return <NavLink key={item.id} className={styles.sideComp} to={item.link}>
                            {item.icon}
                            <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
                        </NavLink>
                }) : <></> }
            </div>
            <div>
                <Link className={styles.logout} onClick={logout}>
                    <LogoutIcon />
                    <span className={open?styles.linkText:styles.linkTextClosed}>Log Out</span>
                </Link>
            </div>
    </div>
    </div>
    )
  }