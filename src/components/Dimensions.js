import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Dimensions extends Component {
  state = {
    width: "",
    height: "",
    thickness: ""
  };
  render() {
    return (
      <div id="dimensions-section">
        <h4>Dimensions</h4>
        <TextField label="Width" name="width" value={this.state.width} />
        <TextField label="Height" name="height" value={this.state.height} />

        <label htmlFor="thickness">Thickness</label>
        <input type="number" id="thickness" />
      </div>
    );
  }
}

export default Dimensions;
