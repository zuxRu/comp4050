import React, {useState} from 'react';
import PresentationTable from '../../components/convenor/PresentationTable';


function sayHello() {
    alert('Generated');
  }

  // Usage
export default function ProjectAllocation({isOpen}) {
  return(
  <>
  <button onClick={sayHello}>Generate Schedule</button>
  <div className={isOpen ? "master-flexbox" : "master-flexbox-closed"}></div>
 <h2 className="h2-sub-heading">Presentation Schedule</h2>
 <div className="child-flexbox">
   <p>
     Please find presentation allocation for students below.
   </p>
   <PresentationTable />
 </div>
 </>
 );
}