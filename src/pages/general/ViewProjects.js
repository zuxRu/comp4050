import React from "react";
import { useTable, useSortBy } from "react-table";
import Projects from "../../SampleData/JSON_files/Projects.json";
import "../../App.css";
import Header from "../../components/general/Header";

export default function ViewProjects({ isOpen }) {
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "p_ID",
      },
      {
        Header: "Supervisor",
        accessor: "p_supervisor",
      },
      {
        Header: "Size",
        accessor: "p_size",
      },
      {
        Header: "Title",
        accessor: "p_title",
      },
      {
        Header: "Description",
        accessor: "p_description",
        Cell: ({ cell }) => <div className="cell-text">{cell.value}</div>,
      },
      {
        Header: "Research Question",
        accessor: "p_research_question",
      },
      {
        Header: "Fields",
        accessor: "p_fields",
      },
      {
        Header: "Co-Supervisor",
        accessor: "p_co_supervisor",
      },
      {
        Header: "Industry Topic",
        accessor: "p_industry_topic",
      },
      {
        Header: "Industry Supervisor",
        accessor: "p_industry_supervisor",
      },
      {
        Header: "Type",
        accessor: "p_type",
      },
      {
        Header: "Lab Access",
        accessor: "p_lab_access",
      },
      {
        Header: "Skills",
        accessor: "p_skills",
        Cell: ({ cell }) => <div className="cell-text">{cell.value}</div>,
      },
      {
        Header: "Status",
        accessor: "p_status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: Projects });

  return (
    <div className={isOpen ? "master-flexbox" : "master-flexbox-closed"}>
      <Header headerText="View Thesis Topics" />
      <h2 className="h2-sub-heading">View All Thesis Topics</h2>
      <div className="child-flexbox">
        <div className="table-container">
          <table className="table" {...getTableProps()}>
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
      </div>
    </div>
  );
}
