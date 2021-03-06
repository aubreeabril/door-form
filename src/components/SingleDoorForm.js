import React from "react";
import TextField from "@material-ui/core/TextField";
import Dimensions from "./Dimensions";
import Materials from "./Materials";
import Misc from "./Misc";

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
          <Materials />
          <Misc />
        </form>
      </div>
    );
  }
}

export default SingleDoorForm;
