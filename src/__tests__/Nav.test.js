import React from "react";
import { render } from "react-testing-library";
import Nav from "../components/Nav";

describe("Nav", () => {
  it("renders correctly", () => {
    render(<Nav />);
  });
});
