import React from "react";
import "../../styles/students/YourSessionDetails.css";
import FakeData from "../../SampleData/YOUR_SESH_DEETS_ACA.json";

export default function YourSessionDetailsAca() {
  const midpoint = Math.ceil(FakeData.length / 2);

  const firstHalf = FakeData.slice(0, midpoint);
  const secondHalf = FakeData.slice(midpoint);

  return (
    <div className="row">
      <div className="column">
        {firstHalf.map((item, index) => (
          <p className="display-text" key={index}>
            <span className="label">{item.label}:</span> {item.value}
          </p>
        ))}
      </div>
      <div className="column">
        {secondHalf.map((item, index) => (
          <p className="display-text" key={index}>
            <span className="label">{item.label}:</span> {item.value}
          </p>
        ))}
      </div>
    </div>
  );
}
