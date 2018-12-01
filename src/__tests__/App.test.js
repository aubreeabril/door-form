import React from "react";
import { render } from "react-testing-library";
import App from "../App.js";

it("renders without crashing", () => {
  render(<App />);
});
