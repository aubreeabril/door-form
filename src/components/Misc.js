import React, { Component } from "react";

class Misc extends Component {
  render() {
    return (
      <div id="misc-section" className="form-section">
        <label htmlFor="fire-door">Fire Door?</label>
        <select name="fire-door">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="stairwell-door">Stairwell Door?</label>
        <select name="stairwell-door">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="door-closer">Door Closer?</label>
        <select name="door-closer">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label htmlFor="automatic-operator">Automatic Operator?</label>
        <select name="automatic-operator">
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
    );
  }
}

export default Misc;
