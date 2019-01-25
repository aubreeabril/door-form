import React, { Component } from "react";

class Materials extends Component {
  render() {
    return (
      <div id="materials-section" className="form-section">
        <h4>Materials</h4>
        <label htmlFor="door-material">Door Material</label>
        <select name="materials">
          <option value="wood">Wood</option>
          <option value="aluminum">Aluminum</option>
          <option value="hollow-metal">Hollow Metal</option>
        </select>
        <label htmlFor="doorframe-materials">Door Frame Material</label>
        <select name="doorframe-materials">
          <option value="wood">Wood</option>
          <option value="aluminum">Aluminum</option>
          <option value="hollow-metal">Hollow Metal</option>
        </select>
      </div>
    );
  }
}

export default Materials;
