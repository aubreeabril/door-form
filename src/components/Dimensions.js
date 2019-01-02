import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

class Dimensions extends Component {
  state = {
    width: "",
    height: "",
    thickness: ""
  };
  render() {
    return (
      <div id="dimensions-section" className="form-section">
        <h4>Dimensions</h4>
        <TextField label="Width" name="width" value={this.state.width} />

        <TextField label="Height" name="height" value={this.state.height} />

        <TextField
          label="Thickness"
          name="thickness"
          value={this.state.thickness}
        />
      </div>
    );
  }
}

export default Dimensions;
