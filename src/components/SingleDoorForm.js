import React from "react";
import TextField from "@material-ui/core/TextField";
import Dimensions from "./Dimensions";

class SingleDoorForm extends React.Component {
  state = {
    location: ""
  };

  render() {
    return (
      <div style={{ marginTop: "8%" }}>
        <form>
          <div className="form-section">
            <TextField
              id="location"
              label="Location"
              value={this.state.location}
            />
          </div>
          <Dimensions />

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
        </form>
      </div>
    );
  }
}

export default SingleDoorForm;
