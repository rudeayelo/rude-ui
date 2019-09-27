import c from "color";
import { DefaultTheme } from "styled-components";
import merge from "deepmerge";

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
};

const aliasColors = {
  background: paletteColors.g["95"],
  accentBackground: "white",
  primary: paletteColors.blue.base,
  accent: paletteColors.green.base,
};

const colors = {
  ...paletteColors,
  ...aliasColors,
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const lineHeights = [1.5, 1.5, 1.4, 1.3, 1.2, 1.1, 1, 1, 0.9];
const fontWeights = [300, 400, 700];

const shadows = [
  "0 0 1px hsla(210, 0%, 10%, .1)",
  "0 3px 6px hsla(210, 0%, 10%, .15)",
  "0 10px 20px hsla(0, 0%, 0%, .20)",
];

const levels = {
  "0": { boxShadow: `${shadows[0]}, ${shadows[1]}` },
  "1": { boxShadow: `${shadows[0]}, ${shadows[2]}` },
};

const textSizes = {
  "0": { fontSize: fontSizes[0], lineHeight: lineHeights[0] },
  "1": { fontSize: fontSizes[1], lineHeight: lineHeights[1] },
  "2": { fontSize: fontSizes[2], lineHeight: lineHeights[2] },
  "3": { fontSize: fontSizes[3], lineHeight: lineHeights[3] },
  "4": { fontSize: fontSizes[4], lineHeight: lineHeights[4] },
  "5": { fontSize: fontSizes[5], lineHeight: lineHeights[5] },
  "6": { fontSize: fontSizes[6], lineHeight: lineHeights[6] },
  "7": { fontSize: fontSizes[7], lineHeight: lineHeights[7] },
  "8": { fontSize: fontSizes[8], lineHeight: lineHeights[8] },
};

const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256];

const radii = [0, 6, 12, 16, 99];

const fontFamily =
  '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const baseTheme: DefaultTheme = {
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  levels,
  lineHeights,
  radii,
  shadows,
  space,
  textSizes,
};

// @ts-ignore
const overwriteMerge = (destinationArray: [], sourceArray: [], options: {}) =>
  sourceArray;
const createTheme = (theme: DefaultTheme): DefaultTheme =>
  merge(baseTheme, theme, { arrayMerge: overwriteMerge });

export { baseTheme, createTheme };
