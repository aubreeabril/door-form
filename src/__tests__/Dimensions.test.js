import React from "react";
import { render } from "react-testing-library";
import Dimensions from "../components/Dimensions.js";

describe("Dimensions section", () => {
  it("has width, height and length inputs", () => {
    const { getByText } = render(<Dimensions />);
    const widthInput = getByText("Width");
    const heightInput = getByText("Height");
    const thicknessInput = getByText("Thickness");
    expect(widthInput).toBeDefined();
    expect(heightInput).toBeDefined();
    expect(thicknessInput).toBeDefined();
  });
});
