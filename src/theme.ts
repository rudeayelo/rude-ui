import c from "color";
import * as styledComponents from "styled-components";

const lightness = (color: string, amount: number): string =>
  c(color)
    .lightness(amount)
    .hsl()
    .string();

const lighten = (color: string, amount: number): string =>
  c(color)
    .lighten(amount)
    .hsl()
    .string();

const darken = (color: string, amount: number): string =>
  c(color)
    .darken(amount)
    .hsl()
    .string();

const baseColors = {
  blue: "hsl(210, 100%, 60%)",
  green: "hsl(90, 50%, 45%)",
  grey: "hsl(210, 5%, 40%)",
  orange: "hsl(36, 80%, 50%)",
  red: "hsl(10, 70%, 45%)",
};

const paletteColors = {
  blue: {
    base: baseColors.blue,
    lightest: lighten(baseColors.blue, 0.5),
    light: lighten(baseColors.blue, 0.3),
    dark: darken(baseColors.blue, 0.4),
    darkest: darken(baseColors.blue, 0.6),
  },
  green: {
    base: baseColors.green,
    lightest: lighten(baseColors.green, 0.6),
    light: lighten(baseColors.green, 0.4),
    dark: darken(baseColors.green, 0.4),
    darkest: darken(baseColors.green, 0.6),
  },
  g: {
    "10": lightness(baseColors.grey, 10),
    "20": lightness(baseColors.grey, 20),
    "30": lightness(baseColors.grey, 30),
    "40": lightness(baseColors.grey, 40),
    "50": lightness(baseColors.grey, 50),
    "60": lightness(baseColors.grey, 60),
    "70": lightness(baseColors.grey, 70),
    "80": lightness(baseColors.grey, 80),
    "90": lightness(baseColors.grey, 90),
    "95": lightness(baseColors.grey, 95),
  },
  orange: {
    base: baseColors.orange,
    lightest: lighten(baseColors.orange, 0.6),
    light: lighten(baseColors.orange, 0.4),
    dark: darken(baseColors.orange, 0.4),
    darkest: darken(baseColors.orange, 0.6),
  },
  red: {
    base: baseColors.red,
    lightest: lighten(baseColors.red, 0.6),
    light: lighten(baseColors.red, 0.4),
    dark: darken(baseColors.red, 0.4),
    darkest: darken(baseColors.red, 0.6),
  },
};

const aliasColors = {
  background: paletteColors.g["95"],
  accentBackground: "white",
};

const colors = {
  ...paletteColors,
  ...aliasColors,
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const fontWeights = [300, 400, 700];

const shadows = [
  "0 0 1px hsla(210, 0%, 10%, .05)",
  "0 3px 6px hsla(210, 0%, 10%, .1)",
  "0 10px 20px hsla(0, 0%, 0%, .1)",
];

const levels = {
  "0": { boxShadow: `${shadows[0]}, ${shadows[1]}` },
  "1": { boxShadow: `${shadows[0]}, ${shadows[2]}` },
};

const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256];

const buttons = {
  intent: {
    none: {
      color: paletteColors.g["30"],
      background: paletteColors.g["30"],
    },
    default: {
      color: paletteColors.blue.dark,
      background: paletteColors.blue.dark,
    },
    success: {
      color: paletteColors.green.base,
      background: paletteColors.green.base,
    },
    danger: {
      color: paletteColors.red.base,
      background: paletteColors.red.base,
    },
    warning: {
      color: paletteColors.orange.base,
      background: paletteColors.orange.base,
    },
  },
  appearance: {
    default: {
      borderRadius: "99px",
      background: "linear-gradient(to top, currentColor -3000%, white 400%)",
    },
    primary: {
      borderRadius: "99px",
      color: "hsla(0, 0%, 100%, .95)",
    },
    minimal: {
      borderRadius: "99px",
      background: "none",
      "&:hover": {
        backgroundColor: paletteColors.g["95"],
      },
    },
  },
  size: {
    small: {
      paddingRight: space[3],
      paddingLeft: space[3],
      height: space[4],
      fontSize: `${fontSizes[0]}px`,
    },
    medium: {
      paddingRight: space[3],
      paddingLeft: space[3],
      height: space[5],
      fontSize: `${fontSizes[1]}px`,
    },
    large: {
      paddingRight: space[5],
      paddingLeft: space[5],
      height: space[6],
      fontSize: `${fontSizes[2]}px`,
    },
  },
};

const fontFamily =
  'ATCYara, "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const baseTheme = {
  buttons,
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  shadows,
  levels,
  space,
};

export type ThemeInterface = typeof baseTheme;
export type ThemedProps<P> = styledComponents.ThemedStyledProps<
  P,
  ThemeInterface
>;

export const createTheme = (theme: styledComponents.DefaultTheme) => ({
  ...baseTheme,
  ...theme,
});

export default baseTheme;
