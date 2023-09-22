import React from "react";
import "../../styles/students/StudentDetails.css";

export default function StudentDetails() {
  return (
    <div>
      <form>
        <div className="row">
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" />
          </div>
          <div className="form-group">
            <label>OneID:</label>
            <input type="number" name="oneId" />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label>Card Number:</label>
            <input type="number" name="cardNumber" />
          </div>
          <div className="form-group">
            <label>Other:</label>
            <input type="text" name="other" />
          </div>
        </div>
      </form>
    </div>
  );
}
