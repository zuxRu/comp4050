import React from "react";
import "../../styles/general/Dashboard.css";
import "../../App.css";
import { Button } from "@mui/material";
import { navDataAcademics } from "../../navigation/NavBarAcademics";
import { navDataStudents } from "../../navigation/NavBarStudents";
import { navDataConvenor } from "../../navigation/NavBarConvenor";
import { getView } from "../../utils/ApiUtil";

export default function Dashboard({isOpen}) {
  let navData = [];
  if (getView().students && !getView().academics && !getView().convenor) {
    navData = navDataStudents;
  } else if (!getView().students && getView().academics && !getView().convenor) {
    navData = navDataAcademics;
  } else if (!getView().students && !getView().academics && getView().convenor) {
    navData = navDataConvenor;
  } else {
    navData = [];
  }
  console.log(navData)
  const handleButtonClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className={isOpen ? "master-flexbox": "master-flexbox-closed"}>
      Dashboard
      {navData && navData.length > 0 ? (
        <div className="child-flexbox">
          {navData.map((item) => (
            <Button
              size="large"
              color="error"
              className="container"
              variant="outlined"
              key={item.id}
              onClick={() => handleButtonClick(item.link)}
            >
              {" "}
              {item.text}
            </Button>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
