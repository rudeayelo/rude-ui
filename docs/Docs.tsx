import * as React from "react";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "../src";

export default ({ children }: { children: React.ReactChild }) => (
  <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
);
