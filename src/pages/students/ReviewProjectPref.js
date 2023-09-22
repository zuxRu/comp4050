import React from 'react'
import "../../styles/general/headerCommon.css";
import "../../App.css";
import Header from '../../components/general/Header';
import { getProjectPref } from '../../utils/ApiUtil';
import CustomTable from '../../components/CustomTable';

export default function ReviewProjectPref({isOpen}) {
  return (
    <div className={isOpen ? "master-flexbox": "master-flexbox-closed"}>
      <Header headerText={"Review Preferences"}/>
      <div className='child-flexbox'>
        <CustomTable list={getProjectPref()}/>
      </div>
    </div>
  )
}
