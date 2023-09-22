import React, { useState } from 'react'
import { getProjectPref } from '../utils/ApiUtil';
import "../styles/general/CustomTable.css"

export default function SetStudentsTable({list}) {
    const [data, setData] = useState(list);

    const onChangeInput = (e, id) => {
        const { name, value } = e.target
        console.log(name)
        const editData = data.map((item) =>
            item.id === id && name ? { ...item, [name]: value } : item
        )
    
        console.log('editData', editData)
    
        setData(editData)
    }
  return (
    <div className='table-container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Thesis A</th>
                    <th>Thesis B</th>
                </tr>
            </thead>
        <tbody>
        {data.map(({ id, numThesisA, numThesisB}) => (
            <tr key={id}>
              <td>
                <input
                    name="numThesisA"
                    value={numThesisA}
                    type="number"
                    onChange={(e) => onChangeInput(e, id)}
                    placeholder="Type project title"
                />
              </td>
              <td>
                <input
                    name="numThesisB"
                    value={numThesisB}
                    type="number"
                    onChange={(e) => onChangeInput(e, id)}
                    placeholder="Type project description"
                />
              </td>
            </tr>
          ))}
        </tbody>
        </table>
  </div>
  )
}
