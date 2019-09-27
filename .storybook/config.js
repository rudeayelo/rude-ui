import React from "react";
import { createGlobalStyle } from "styled-components";
import { configure, addDecorator } from "@storybook/react";
import { baseTheme } from "../src/theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

configure(require.context("../src", true, /\.stories\.(tsx|mdx)$/), module);
