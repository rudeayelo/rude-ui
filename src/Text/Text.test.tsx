import React from "react";
import { Text } from ".";
import { render } from "@testing-library/react";

describe("Text", () => {
  test("renders text", () => {
    const { getByText } = render(<Text>Test</Text>);

    expect(getByText("Test")).toBeTruthy();
  });
});
