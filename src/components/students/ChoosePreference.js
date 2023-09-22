import React from "react";
import "../../styles/students/ChoosePreference.css";

export default function ChoosePreferences() {
  return (
    <div>
      <form className="choosepref">
        <div className="column">
          <div>
            <label>First Preference:</label>
            <input type="number" name="firstName" />
          </div>
          <div>
            <label>Second Preference:</label>
            <input type="number" name="cardNumber" />
          </div>
          <div>
            <label>Third Preference:</label>
            <input type="number" name="lastName" />
          </div>
        </div>
        <div className="column">
          <div>
            <label>Fourth Preference:</label>
            <input type="number" name="other" />
          </div>
          <div>
            <label>Fifth Preference:</label>
            <input type="number" name="oneId" />
          </div>
        </div>
      </form>
    </div>
  );
}
