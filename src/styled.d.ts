import "styled-components";

interface Color {
  [k: string]: any;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Color;
    fontFamily: string;
    fontSizes: number[];
    fontWeights: number[];
    levels: {};
    lineHeights: number[];
    radii: number[];
    shadows: string[];
    space: number[];
    textSizes: {};
  }
}
