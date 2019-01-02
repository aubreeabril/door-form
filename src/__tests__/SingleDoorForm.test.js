import React from "react";
import { render } from "react-testing-library";
import SingleDoorForm from "../components/SingleDoorForm.js";

describe("Single door form", () => {
  it("renders correctly", () => {
    render(<SingleDoorForm />);
  });

  it("has a location input", () => {
    const { getByLabelText } = render(<SingleDoorForm />);
    const inputNode = getByLabelText("Location");
    expect(inputNode).toBeDefined();
  });

  it("has material fields", () => {
    const { getByText } = render(<SingleDoorForm />);
    const doorMaterial = getByText("Door Material");
    const doorFrameMaterial = getByText("Door Frame Material");
    expect(doorFrameMaterial).toBeDefined();
    expect(doorMaterial).toBeDefined();
  });
});
