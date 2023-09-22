import React from 'react'
import Header from '../../components/general/Header'
import "../../styles/general/CustomTable.css"
import "../../App.css";
import { getThesisAstudents, getThesisBstudents, getThesisStudLimits } from '../../utils/ApiUtil'
import AcaAvalTable from '../../components/AcaAvalTable';
import SetStudentsTable from '../../components/SetStudentsTable';

export default function AcademicAvailabilities({isOpen}) {
    console.log(getThesisAstudents())
  return (
    <div className={isOpen ? "master-flexbox": "master-flexbox-closed"}>
        <Header headerText={"Academic Availability"} />
        <div className='child-flexbox'>
            <SetStudentsTable list={getThesisStudLimits()} />
        </div>
        <Header headerText={"Current Active Students"} />
        <div className='child-flexbox'>
            <div className='child-flexbox-row'>
                <AcaAvalTable list={getThesisAstudents()} isThesisA={true} />
                <AcaAvalTable list={getThesisBstudents()} isThesisA={false} />
            </div>
        </div>
        
    </div>
  )
}
