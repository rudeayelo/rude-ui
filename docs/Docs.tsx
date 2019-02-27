import * as React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/theme";

export default ({ children }: { children: React.ReactChild }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);
