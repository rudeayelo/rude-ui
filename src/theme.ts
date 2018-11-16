import c from "color";

const baseColors = {
  blue: "hsl(210, 100%, 60%)",
  green: "hsl(90, 50%, 45%)",
  grey: "hsl(210, 5%, 40%)",
  orange: "hsl(36, 80%, 50%)",
  red: "hsl(10, 70%, 45%)",
};

const colors = {
  blue: Object.assign(baseColors.blue, {
    dark: c(baseColors.blue)
      .darken(0.4)
      .hsl()
      .string(),
    darker: c(baseColors.blue)
      .darken(0.6)
      .hsl()
      .string(),
  }),
  green: Object.assign(baseColors.green, {}),
  grey: Object.assign(baseColors.grey, {
    dark: c(baseColors.grey)
      .darken(0.5)
      .hsl()
      .string(),
    light: c(baseColors.grey)
      .lighten(0.5)
      .hsl()
      .string(),
    lighter: c(baseColors.grey)
      .lighten(1)
      .hsl()
      .string(),
  }),
  orange: Object.assign(baseColors.orange, {}),
  red: Object.assign(baseColors.red, {}),
  border: Object.assign(
    c(baseColors.grey)
      .lighten(1)
      .hsl()
      .string(),
    {
      dark: baseColors.grey,
    },
  ),
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];
const fontWeights = [400, 500, 600];

const buttons = {
  intent: {
    none: {
      color: colors.grey,
      background: colors.grey.dark,
    },
    default: {
      color: colors.blue.dark,
      background: colors.blue.dark,
    },
    success: {
      color: colors.green,
      background: colors.green,
    },
    danger: {
      color: colors.red,
      background: colors.red,
    },
    warning: {
      color: colors.orange,
      background: colors.orange,
    },
  },
  appearance: {
    default: {
      borderRadius: "6px",
      background: "linear-gradient(to top, hsl(210, 0%, 97%), white 10%)",
      boxShadow:
        "inset 0 0 0 1px hsla(0, 0%, 100%, .5), inset 0 0 2px hsla(210, 0%, 10%, .05), 0 0 1px hsla(210, 0%, 10%, .1), 0 2px 2px hsla(210, 0%, 10%, .1)",
    },
    primary: {
      borderRadius: "6px",
      color: "hsla(0, 0%, 100%, .85)",
      boxShadow:
        "inset 0 0 1px hsla(0, 0%, 10%, .05), inset 0 -4px 4px hsla(0, 0%, 10%, .1), 0 0 1px hsla(0, 0%, 10%, .15), 0 2px 2px hsla(0, 0%, 10%, .1)",
      textShadow: "0 1px 0 hsla(0, 0%, 10%, .2)",
    },
    minimal: {
      background: "none",
      padding: 0,
    },
  },
  size: {
    small: {
      paddingRight: "8px",
      paddingLeft: "8px",
      height: "24px",
      fontSize: `${fontSizes[0]}px`,
    },
    medium: {
      paddingRight: "16px",
      paddingLeft: "16px",
      height: "32px",
      fontSize: `${fontSizes[1]}px`,
    },
    large: {
      paddingRight: "24px",
      paddingLeft: "24px",
      height: "48px",
      fontSize: `${fontSizes[2]}px`,
    },
  },
};

const fontFamily =
  'ATCYara, "SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export default {
  colors,
  fontFamily,
  fontSizes,
  fontWeights,
  buttons,
};
