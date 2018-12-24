import React, { Component } from "react";
import "./App.css";
import SingleDoorForm from "./components/SingleDoorForm";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SingleDoorForm />
      </div>
    );
  }
}

export default App;
