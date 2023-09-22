import React from "react";
import FakeData from "../../SampleData/WEEKLY_SCHED.json";
import "../../styles/general/Timetable.css";

export default function WeeklySessions() {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th className="centered-cell">Weekend</th>
          </tr>
        </thead>
        <tbody>
          {FakeData.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td>{item.monday}</td>
              <td>{item.tuesday}</td>
              <td>{item.wednesday}</td>
              <td>{item.thursday}</td>
              <td>{item.friday}</td>
              {index === 0 ? (
                <td className="centered-cell" rowSpan={FakeData.length}>
                  {item.weekend}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
