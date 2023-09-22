import fakeData from '../../SampleData/JSON_files/DemoAlocation.json'
import * as React from "react";
import '../../styles/convenor/table.css'
import { useTable } from "react-table";
//import "../../styles/students/ShortlistedTopics.css";

export default function PresentationTable() {
  const columns = React.useMemo(
    () => [
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
    ],
    []
  );

  const data = React.useMemo(() => fakeData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="table-container">
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
