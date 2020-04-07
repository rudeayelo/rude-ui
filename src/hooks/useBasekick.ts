import { useTheme } from "emotion-theming";
import { ThemeTokens } from "../theme";
import { FontSizes } from "../types";

export const useBasekick = (size: FontSizes) => {
  const theme: ThemeTokens = useTheme();

  const fontSize =
    size === "display" ||
    size === "page" ||
    size === "section" ||
    size === "paragraph" ||
    size === "aside"
      ? theme.fontSizes.Heading[size]
      : size;

  const refTopCrop = 5;
  const refBottomCrop = 5;
  const referenceFontSize = 16;
  const referenceLineHeight = 1.4;
  const currentLineHeight = theme.lineHeights[fontSize];

  const topCrop =
    Math.max(
      refTopCrop +
        (currentLineHeight - referenceLineHeight) * (referenceFontSize / 2),
      0,
    ) / referenceFontSize;
  const bottomCrop =
    Math.max(
      refBottomCrop +
        (currentLineHeight - referenceLineHeight) * (referenceFontSize / 2),
      0,
    ) / referenceFontSize;

  return {
    display: "block",
    lineHeight: fontSize,
    "&::before, &::after": {
      content: '""',
      display: "block",
      height: 0,
      width: 0,
      paddingTop: "1px",
    },
    "&::before": { marginBottom: `calc(-${topCrop}em - 1px)` },
    "&::after": { marginTop: `calc(-${bottomCrop}em - 1px)` },
  };
};
