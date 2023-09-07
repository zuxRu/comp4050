import React, {useState} from 'react';
import fakeData from '../../DemoAlocation.json';
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'
import SideNav from '../../navigation/SideNav';

function sayHello() {
    alert('Generated');
  }


  // Usage
export default function PresentationSchedule() {

    const data = React.useMemo(()=> fakeData, []);
    const columns = React.useMemo( 
        ()=> [ 
    {
        Header: "StudentID",
        accessor: "s_ID"
    },
    {
        Header: "Project",
        accessor: "project_ID"
    },
    {
        Header: "Supervisor",
        accessor: "supervisor_ID"
    },
]);

const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = 
useTable({columns, data});

  //<button onClick={sayHello}>Generate Schedule</button>
  
  return (
    <div className="PresentationSchedule">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
