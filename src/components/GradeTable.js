import React, { useState } from 'react'
import { getProjectPref } from '../utils/ApiUtil';
import "../styles/general/CustomTable.css"

export default function GradeTable({list}) {
    const [data, setData] = useState(list);

    const onChangeInput = (e, id) => {
        const { name, value } = e.target
        console.log(name)
        const editData = data.map((item) =>
            item.st_ID === id && name ? { ...item, [name]: value, graded: true } : item
        )
    
        console.log('editData', editData)
    
        setData(editData)
    }
  return (
    <div className='table-container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Grade</th>
                </tr>
            </thead>
        <tbody>
        {data.map(({ st_ID, st_first_name, st_last_name, st_grade, graded }) => (
            <tr key={st_ID}>
              <td>
                {st_ID}
              </td>
              <td>
                {`${st_first_name} ${st_last_name}`}
              </td>
              <td>
                <input
                    name="st_grade"
                    value={st_grade}
                    type="number"
                    onChange={(e) => onChangeInput(e, st_ID)}
                    className={graded ? "graded":"to-graded"}
                    placeholder="Grade Mark"
                />
              </td>
            </tr>
          ))}
        </tbody>
        </table>
  </div>
  )
}
