import React, { useState } from 'react'
import { getProjectPref } from '../utils/ApiUtil';
import "../styles/general/CustomTable.css"

export default function AcaAvalTable({list, isThesisA}) {
  const [data, setData] = useState(list);

  return (
    <div className='table-container'>
        {isThesisA ? (<h1>Thesis A</h1>): (<h1>Thesis B</h1>)}
        <table className='table'>
            <thead>
                <tr>                
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Student Email</th>
                    <th>Unit</th>
                </tr>
            </thead>
        <tbody>
        {data.map(({ st_ID, st_first_name, st_last_name, st_email, st_unit }) => (
            <tr key={st_ID}>
              <td>
                {st_ID}
              </td>
              <td>
                {st_first_name + " " + st_last_name}
              </td>
              <td>
                {st_email}
              </td>
              <td>
                {st_unit}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
  </div>
  )
}
