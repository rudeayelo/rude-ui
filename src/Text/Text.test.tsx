import React from "react";
import { Text } from ".";
import { render } from "react-testing-library";

describe("Text", () => {
  test("shows text", () => {
    const { getByText } = render(<Text>Test</Text>);

    expect(getByText("Test")).toBeTruthy();
  });
});
