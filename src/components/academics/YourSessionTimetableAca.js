import React from "react";
import { useTable } from "react-table";
import "../../styles/general/Timetable.css";
import FakeData from "../../SampleData/YOUR_SESH_SCHED_ACA.json";

export default function YourSessionTimetableAca() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Time",
        accessor: "Time",
        width: 100,
        className: "first-column",
      },
      {
        Header: "Student",
        accessor: "Student",
      },
    ],
    []
  );

  const data = React.useMemo(() => FakeData, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="table-container">
      <table className="table" {...getTableProps()}>
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
                    <td
                      {...cell.getCellProps()}
                      className={cell.column.className}
                    >
                      {cell.render("Cell")}
                    </td>
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
