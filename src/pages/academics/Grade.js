import React from 'react'
import "../../App.css";
import Header from '../../components/general/Header';
import { getGradeStudents } from '../../utils/ApiUtil';
import GradeTable from '../../components/GradeTable';

export default function Grade({isOpen}) {
  return (
    <div className={isOpen ? "master-flexbox": "master-flexbox-closed"}>
        <Header headerText={"Grade Students"} />
        <div className='child-flexbox'>
            <GradeTable list={getGradeStudents} />
        </div>
    </div>
  )
}
