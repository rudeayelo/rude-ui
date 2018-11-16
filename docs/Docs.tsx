import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import YaraRegular from "./fonts/ATCYara-Regular.woff2";
import YaraMedium from "./fonts/ATCYara-Medium.woff2";
import YaraBold from "./fonts/ATCYara-Bold.woff2";
import defaultTheme from "../src/theme";

interface FontShape {
  style: string;
  weight: number;
  woff2: YaraRegular | YaraMedium | YaraBold;
}

const FontFaceName = "ATCYara";
const FontFaceDefs = [
  {
    style: "normal",
    weight: 400,
    woff2: YaraRegular,
  },
  {
    style: "normal",
    weight: 500,
    woff2: YaraMedium,
  },
  {
    style: "normal",
    weight: 600,
    woff2: YaraBold,
  },
];

const defineFontFace = (FontFaceDefs: FontShape[]): string[] =>
  FontFaceDefs.map(
    FontFaceDef => `
    @font-face {
      font-family: ${FontFaceName};
      src: url(${FontFaceDef.woff2}) format('woff2');
      font-weight: ${FontFaceDef.weight};
      font-style: ${FontFaceDef.style};
    }
  `,
  );

const GlobalStyle = createGlobalStyle`
  ${defineFontFace(FontFaceDefs)}
`;

export default ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);
