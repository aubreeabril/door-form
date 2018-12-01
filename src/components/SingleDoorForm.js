import React from "react";

const SingleDoorForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
        <div id="dimensions-section">
          <h4>Dimensions</h4>
          <label htmlFor="width">Width</label>
          <input type="number" id="width" />
          <label htmlFor="height">Height</label>
          <input type="number" id="height" />
          <label htmlFor="thickness">Thickness</label>
          <input type="number" id="thickness" />
        </div>
        <div id="materials-section">
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
      </form>
    </div>
  );
};

export default SingleDoorForm;
