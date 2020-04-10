import c from "color";
import merge from "deepmerge";

export interface ThemeTokens {
  name: string;
  space: typeof space;
  radii: typeof radii;
  fonts: typeof fonts;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  lineHeights: typeof lineHeights;
  breakpoints: typeof breakpoints;
  durations: typeof durations;
  shadows: typeof shadows;
  colors: typeof colors;
  sizes: typeof space;
}

/* -------------------------------------------------------------------------- */
/*                                 Color utils                                */
/* -------------------------------------------------------------------------- */

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

const generatePalette = (color: string) => ({
  100: lighten(color, 0.8),
  200: lighten(color, 0.6),
  300: lighten(color, 0.4),
  400: lighten(color, 0.2),
  500: color,
  600: darken(color, 0.2),
  700: darken(color, 0.4),
  800: darken(color, 0.6),
  900: darken(color, 0.8),
});

/* -------------------------------------------------------------------------- */
/*                                Theme tokens                                */
/* -------------------------------------------------------------------------- */

const space = {
  0: 0,
  1: "6px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
  15: "60px",
  16: "64px",
};

const radii = {
  0: 0,
  1: "2px",
  2: "4px",
  3: "50%",
  rounded: "99em",
};

const fonts = {
  body:
    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  mono:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const baseFontSizes = {
  0: 0,
  1: "10px",
  2: "12px",
  3: "14px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "32px",
  8: "40px",
  9: "52px",
  10: "64px",
};

const aliasFontSizes = {
  Heading: {
    display: 8 as const,
    page: 7 as const,
    section: 6 as const,
    paragraph: 5 as const,
    aside: 2 as const,
  },
};

const fontSizes = {
  ...baseFontSizes,
  ...aliasFontSizes,
};

const fontWeights = {
  normal: 400,
  bold: 600,
};

const lineHeights = {
  0: 0,
  1: 1.5,
  2: 1.6,
  3: 1.5,
  4: 1.4,
  5: 1.4,
  6: 1.3,
  7: 1.1,
  8: 1.1,
  9: 0.9,
  10: 0.9,
};

const breakpoints = {
  0: "576px",
  1: "768px",
  2: "992px",
};

const durations = {
  0: 0,
  1: "75ms",
  2: "100ms",
  3: "150ms",
  4: "200ms",
  5: "300ms",
  6: "500ms",
  7: "1000ms",
};

const shadows = {
  0: "none",
  1: "0 0 0 1px hsla(210, 0%, 10%, .10)",
  2: "0 0 1px hsla(210, 0%, 10%, .1), 0 1px 2px hsla(210, 0%, 10%, .1), 0 3px 5px hsla(210, 0%, 10%, .1)",
  3: "0 0 1px hsla(210, 0%, 10%, .1), 0 3px 6px -1px hsla(210, 0%, 10%, .1), 0 10px 20px -2px hsla(210, 0%, 10%, .1)",
  4: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  5: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

const baseColors = {
  blue: "hsl(210, 100%, 50%)",
  green: "hsl(90, 50%, 50%)",
  yellow: "hsl(55, 100%, 50%)",
  orange: "hsl(40, 100%, 50%)",
  red: "hsl(10, 70%, 50%)",
  grey: "hsl(210, 5%, 50%)",
};

const paletteColors = {
  white: "#fff",
  blues: generatePalette(baseColors.blue),
  greens: generatePalette(baseColors.green),
  yellows: generatePalette(baseColors.yellow),
  oranges: generatePalette(baseColors.orange),
  reds: generatePalette(baseColors.red),
  grays: {
    100: lightness(baseColors.grey, 95),
    200: lightness(baseColors.grey, 90),
    300: lightness(baseColors.grey, 80),
    400: lightness(baseColors.grey, 65),
    500: lightness(baseColors.grey, 50),
    600: lightness(baseColors.grey, 35),
    700: lightness(baseColors.grey, 20),
    800: lightness(baseColors.grey, 10),
    900: lightness(baseColors.grey, 5),
  },
};

const aliasColors = {
  text: {
    subtle: "grays.500",
    body: "grays.800",
    link: "blues.500",
    linkHover: "blues.600",
  },
  error: {
    background: "reds.100",
    border: "reds.300",
    text: "reds.700",
  },
  App: {
    backgroundColor: "white",
    color: "grays.900",
    borderColor: "grays.200",
  },
};

const colors = {
  ...paletteColors,
  ...aliasColors,
};

const tokens: ThemeTokens = {
  name: "React UI Base",
  space,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints,
  durations,
  shadows,
  colors,
  sizes: space,
};

/* -------------------------------------------------------------------------- */
/*                              Component styles                              */
/* -------------------------------------------------------------------------- */

const tableCell = {
  fontVariantNumeric: "tabular-nums",
  textAlign: "left",
  paddingBottom: 3,
  paddingRight: 3,
  borderBottom: "1px solid",
  "&:last-of-type": {
    paddingRight: 0,
  },
};

const components = {
  Global: {
    "*, *::before, *::after": { boxSizing: "border-box" },
    body: {
      minHeight: "100vh",
      scrollBehavior: "smooth",
      textRendering: "optimizeSpeed",
      background: "white",
      color: "text.body",
      fontFamily: "body",
      fontSize: 3,
    },
    "ul, ol": { padding: "0", margin: "0", listStyle: "none" },
    "body, h1, h2, h3, h4, p, li, figure, figcaption, blockquote, dl, dd": {
      margin: 0,
    },
    "a:not([class])": {
      color: "text.link",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    },
    img: { maxWidth: "100%", display: "block" },
    "input, button, textarea, select": { font: "inherit" },
  },
  Avatar: {
    border: "2px solid",
    borderColor: "grays.200",
  },
  Button: {
    display: "inline-flex",
    verticalAlign: "middle",
    flexWrap: "nowrap",
    alignItems: "center",
    cursor: "pointer",
    border: "none",
    fontSize: 3,
    borderRadius: 2,
    paddingX: 3,
    variants: {
      primary: {
        color: "hsla(0, 0%, 100%, .95)",
        fontWeight: "bold",
        boxShadow:
          "inset 0 0 0 1px hsla(0, 0%, 0%, .1), inset 0 0 2px hsla(0, 0%, 0%, .1)",
      },
      secondary: {
        background: "white",
        "&:hover": {
          background:
            "linear-gradient(to top, currentColor -3000%, white 400%)",
        },
        boxShadow: "inset 0 0 0 2px currentColor",
        fontWeight: "bold",
      },
      minimal: {
        "&:not(:hover)": {
          background: "none",
        },
        "&:hover": {
          background:
            "linear-gradient(to top, currentColor -3000%, white 400%)",
        },
      },
    },
  },
  Heading: {
    color: "text.body",
    fontWeight: "bold",
  },
  Image: {},
  Input: {
    sizes: { small: 7, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    backgroundColor: "grays.100",
    borderColor: "grays.300",
    color: "text.body",
    "::placeholder": {
      color: "text.subtle",
    },
    ":hover:not(:disabled)": {
      borderColor: "grays.400",
    },
    ":focus:not(:disabled)": {
      outline: "none",
      borderColor: "blues.500",
      boxShadow: `0 0 0 2px ${colors.blues[200]}`,
    },
    "&[aria-invalid]": {
      backgroundColor: "error.background",
      borderColor: "error.border",
    },
  },
  Link: {
    display: "inline",
    cursor: "pointer",
    textDecoration: "none",
    variants: {
      default: {
        color: "text.link",
        ":hover, :focus": {
          color: "text.linkHover",
        },
        "&[aria-current]": {
          color: "text.linkHover",
        },
      },
      subtle: {
        color: "text.subtle",
        ":hover": {
          color: "text.linkHover",
        },
        "&[aria-current]": {
          color: "text.link",
        },
        ":focus": {
          color: "text.linkHover",
        },
      },
      body: {
        color: "text.body",
        ":hover": {
          color: "text.linkHover",
        },
        "&[aria-current]": {
          color: "text.link",
        },
        ":focus": {
          color: "text.linkHover",
        },
      },
    },
  },
  Select: {
    sizes: { small: 7, medium: 8, large: 10 },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    backgroundColor: "grays.100",
    borderColor: "grays.300",
    color: "text.body",
    "::placeholder": {
      color: "text.subtle",
    },
    ":hover:not(:disabled)": {
      borderColor: "grays.600",
    },
    ":focus:not(:disabled)": {
      outline: "none",
      borderColor: "blues.500",
      boxShadow: `0 0 0 2px ${colors.blues[200]}`,
    },
    "&[aria-invalid]": {
      backgroundColor: "error.background",
      borderColor: "error.border",
    },
  },
  Spinner: {
    sizes: { small: 4, medium: 7, large: 10 },
    borderColor: "grays.200",
    borderLeftColor: "blues.600",
  },
  Switch: {
    colors: {
      backgroundOff: "grays.300",
      backgroundOn: "blues.500",
    },
  },
  Text: {
    variants: {
      default: { color: "inherit" },
      body: { color: "text.body" },
      subtle: { color: "text.subtle" },
      critical: { color: "error.text" },
    },
  },
  Textarea: {
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    paddingY: 2,
    backgroundColor: "grays.100",
    borderColor: "grays.300",
    color: "text.body",
    "::placeholder": {
      color: "text.subtle",
    },
    ":hover:not(:disabled)": {
      borderColor: "grays.600",
    },
    ":focus:not(:disabled)": {
      outline: "none",
      borderColor: "blues.500",
      boxShadow: `0 0 0 2px ${colors.blues[200]}`,
    },
    "&[aria-invalid]": {
      backgroundColor: "error.background",
      borderColor: "error.border",
    },
  },
  Table: {
    borderCollapse: "collapse",
    width: "100%",
  },
  Th: {
    ...tableCell,
    borderColor: "grays.300",
    fontSize: 2,
    fontWeight: "bold",
    color: "text.subtle",
  },
  Td: {
    ...tableCell,
    paddingTop: 3,
    borderColor: "grays.200",
    fontSize: 3,
  },
  Badge: {
    borderRadius: "rounded",
    display: "inline-block",
    verticalAlign: "baseline",
    fontSize: 2,
    paddingX: 2,
    paddingY: 1,
    background: "linear-gradient(to top, currentColor -3000%, white 400%)",
    boxShadow: "0 0 2px currentColor",
    variants: {
      neutral: {
        color: "grays.500",
      },
      info: {
        color: "blues.600",
      },
      positive: {
        color: "greens.600",
      },
      critical: {
        color: "reds.500",
      },
      caution: {
        color: "oranges.600",
      },
    },
  },

  /** Molecules */

  Breadcrumb: {
    fontSize: 3,
  },
  BreadcrumbSeparator: {
    display: "inline-block",
    color: "text.subtle",
    paddingX: 2,
  },
  BreadcrumbItem: {
    display: "inline-block",
    "&[aria-current]": {
      color: "text.body",
    },
  },
  Card: {
    backgroundColor: "white",
    borderRadius: 2,
  },
  Form: {},
  FormLabel: {},
  FormField: {},
  FormHeader: {
    color: "text.body",
    fontSize: 5,
    fontWeight: "normal",
    marginBottom: 4,
  },
  MenuList: {
    backgroundColor: "white",
    borderColor: "grays.200",
    borderRadius: 2,
    marginTop: 1,
    boxShadow: 3,
  },
  MenuItem: {
    paddingY: 2,
    paddingX: 3,
    "&[data-selected]": {
      backgroundColor: "blues.600",
      color: "grays.100",
    },
  },
  Paragraph: {},
};

const theme = { tokens, components };

const overwriteMerge = (_destinationArray: [], sourceArray: [], _options: {}) =>
  sourceArray;
const createTokens = (clientTokens: {}): {} =>
  merge(tokens, clientTokens, { arrayMerge: overwriteMerge });
const createComponents = (clientComponents: {}): {} =>
  merge(components, clientComponents, {
    arrayMerge: overwriteMerge,
  });

export { tokens, components, theme, createTokens, createComponents };
