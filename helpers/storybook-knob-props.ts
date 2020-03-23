import { number, select, text, radios } from "@storybook/addon-knobs";

// Space
const p = () => number("Padding", undefined, { min: 0, step: 1 });
const pt = () => number("Padding top", undefined, { min: 0, step: 1 });
const pr = () => number("Padding right", undefined, { min: 0, step: 1 });
const pb = () => number("Padding bottom", undefined, { min: 0, step: 1 });
const pl = () => number("Padding left", undefined, { min: 0, step: 1 });
const m = () => number("Margin", undefined, { min: 0, step: 1 });
const mt = () => number("Margin top", undefined, { step: 1 });
const mr = () => number("Margin right", undefined, { step: 1 });
const mb = () => number("Margin bottom", undefined, { step: 1 });
const ml = () => number("Margin left", undefined, { step: 1 });

export const spaceKnobProps = () => ({
  p: p(),
  pt: pt(),
  pr: pr(),
  pb: pb(),
  pl: pl(),
  m: m(),
  mt: mt(),
  mr: mr(),
  mb: mb(),
  ml: ml(),
});

// Position
const position = () =>
  select(
    "Position",
    {
      absolute: "absolute",
      fixed: "fixed",
      relative: "relative",
      static: "static",
      none: undefined,
    },
    undefined,
  );
const top = () => number("Top", undefined);
const right = () => number("Right", undefined);
const bottom = () => number("Bottom", undefined);
const left = () => number("Left", undefined);

export const positionKnobProps = () => ({
  position: position(),
  top: top(),
  right: right(),
  bottom: bottom(),
  left: left(),
});

// Display
const display = () =>
  select(
    "Display",
    {
      block: "block",
      flex: "flex",
      "inline-flex": "inline-flex",
      inline: "inline",
      "inline-block": "inline-block",
      table: "table",
      none: undefined,
    },
    undefined,
  );

export const displayKnobProps = () => ({
  display: display(),
});

// Size
const width = () => number("Width", undefined, { min: 0 });
const maxWidth = () => number("Max width", undefined, { min: 0 });
const height = () => number("Height", undefined, { min: 0 });
const maxHeight = () => number("Max height", undefined, { min: 0 });

export const sizeKnobProps = () => ({
  width: width(),
  maxWidth: maxWidth(),
  height: height(),
  maxHeight: maxHeight(),
});

// Color
const colors = {
  none: "none",
  "blue.base": "blue.base",
  "blue.lightest": "blue.lightest",
  "blue.light": "blue.light",
  "blue.dark": "blue.dark",
  "blue.darkest": "blue.darkest",
  "green.base": "green.base",
  "green.lightest": "green.lightest",
  "green.light": "green.light",
  "green.dark": "green.dark",
  "green.darkest": "green.darkest",
  "orange.base": "orange.base",
  "orange.lightest": "orange.lightest",
  "orange.light": "orange.light",
  "orange.dark": "orange.dark",
  "orange.darkest": "orange.darkest",
  "red.base": "red.base",
  "red.lightest": "red.lightest",
  "red.light": "red.light",
  "red.dark": "red.dark",
  "red.darkest": "red.darkest",
  "g.10": "g.10",
  "g.20": "g.20",
  "g.30": "g.30",
  "g.40": "g.40",
  "g.50": "g.50",
  "g.60": "g.60",
  "g.70": "g.70",
  "g.80": "g.80",
  "g.90": "g.90",
  "g.95": "g.95",
};

const color = defaultValue => select("Color", colors, defaultValue);
const bg = defaultValue => select("Background color", colors, defaultValue);

export const colorKnobProps = ({ defaultColor, defaultBg }) => ({
  color: color(defaultColor),
  bg: bg(defaultBg),
});

// Typography
const fontWeight = defaultValue =>
  number("Font weight", defaultValue, {
    min: 0,
    max: 1,
    step: 1,
  });
const textSize = defaultValue =>
  number("Text size", defaultValue, {
    min: 0,
    max: 8,
    step: 1,
  });

export const typographyKnobProps = ({
  defaultFontWeight,
  defaultTextSize,
}) => ({
  fontWeight: fontWeight(defaultFontWeight),
  textSize: textSize(defaultTextSize),
});

// Radii
const borderRadius = defaultValue =>
  number("Border radius", defaultValue, {
    min: 0,
    max: 5,
    step: 1,
  });

export const radiiKnobProps = ({ defaultRadii }) => ({
  borderRadius: borderRadius(defaultRadii),
});

// Border
const border = defaultValue => text("Border", defaultValue);
const borderColor = defaultValue =>
  select("Border color", colors, defaultValue);

export const borderKnobProps = ({ defaultBorder, defaultBorderColor }) => ({
  border: border(defaultBorder),
  borderColor: borderColor(defaultBorderColor),
});

// Flexbox
const flexDirection = defaultValue =>
  radios(
    "Flex direction",
    {
      row: "row",
      column: "column",
    },
    defaultValue,
  );
const justifyContent = defaultValue =>
  select(
    "Justify content",
    {
      "space-between": "space-between",
      "space-around": "space-around",
      "space-evenly": "space-evenly",
      "flex-start": "flex-start",
      "flex-end": "flex-end",
      baseline: "baseline",
      none: null,
    },
    defaultValue,
  );
const alignItems = defaultValue =>
  select(
    "Align items",
    {
      stretch: "stretch",
      "flex-start": "flex-start",
      "flex-end": "flex-end",
      baseline: "baseline",
      center: "center",
      none: null,
    },
    defaultValue,
  );

export const flexboxKnobProps = ({
  defaultFlexDirection,
  defaultJustifyContent,
  defaultAlignItems,
}) => ({
  flexDirection: flexDirection(defaultFlexDirection),
  justifyContent: justifyContent(defaultJustifyContent),
  alignItems: alignItems(defaultAlignItems),
});

/* -------------------------------------------------------------------------- */
/*                              Component aliases                             */
/* -------------------------------------------------------------------------- */

export const boxKnobProps = ({
  defaultRadii,
  defaultBorder,
  defaultBorderColor,
  defaultFontWeight,
  defaultTextSize,
  defaultColor,
  defaultBg,
  defaultFlexDirection,
  defaultJustifyContent,
  defaultAlignItems,
}) => ({
  ...colorKnobProps({ defaultColor, defaultBg }),
  ...typographyKnobProps({ defaultFontWeight, defaultTextSize }),
  ...radiiKnobProps({ defaultRadii }),
  ...borderKnobProps({ defaultBorder, defaultBorderColor }),
  ...spaceKnobProps(),
  ...sizeKnobProps(),
  ...positionKnobProps(),
  ...displayKnobProps(),
  ...flexboxKnobProps({
    defaultFlexDirection,
    defaultJustifyContent,
    defaultAlignItems,
  }),
});
