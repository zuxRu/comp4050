import fakeData from "../../SampleData/MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";
import "../../styles/students/ShortlistedTopics.css";

export default function ShortlistedTopics() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Project ID",
        accessor: "project_id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Research Question",
        accessor: "research_question",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Discipline",
        accessor: "discipline",
      },
      {
        Header: "Supervisor",
        accessor: "supervisor",
      },
      {
        Header: "Co-Supervisor",
        accessor: "co-supervisor",
      },
      {
        Header: "Industry Topic",
        accessor: "industry_topic",
      },
      {
        Header: "Industry Supervisor",
        accessor: "industry_supervisor",
      },
      {
        Header: "Topic Type",
        accessor: "topic_type",
      },
      {
        Header: "Lab Access",
        accessor: "lab_access",
      },
      {
        Header: "Specific Skills",
        accessor: "specific_skills",
      },
      {
        Header: "Project Size",
        accessor: "project_size",
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
