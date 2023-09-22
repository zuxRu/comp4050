import React, { useState } from 'react'
import { getProjectPref } from '../utils/ApiUtil';
import "../styles/general/CustomTable.css"

export default function CustomTable({list}) {
    const [data, setData] = useState(list);

    const onChangeInput = (e, id) => {
        const { name, value } = e.target
        console.log(name)
        const editData = data.map((item) =>
            item.p_ID === id && name ? { ...item, [name]: value } : item
        )
    
        console.log('editData', editData)
    
        setData(editData)
    }
  return (
    <div className='table-container'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Supervisor</th>
                </tr>
            </thead>
        <tbody>
        {data.map(({ p_ID, p_title, p_description, p_supervisor }) => (
            <tr key={p_ID}>
              <td>
                <input
                    name="p_title"
                    value={p_title}
                    type="text"
                    onChange={(e) => onChangeInput(e, p_ID)}
                    placeholder="Type project title"
                />
              </td>
              <td>
                <input
                    name="p_description"
                    value={p_description}
                    type="text"
                    onChange={(e) => onChangeInput(e, p_ID)}
                    placeholder="Type project description"
                />
              </td>
              <td>
                <input
                        name="p_supervisor"
                        value={p_supervisor}
                        type="text"
                        onChange={(e) => onChangeInput(e, p_ID)}
                        placeholder="Type Supervisor"
                    />
              </td>
            </tr>
          ))}
        </tbody>
        </table>
  </div>
  )
}
