import { useTheme } from "emotion-theming";
import { leadingTrim } from "leading-trim";
import { ThemeTokens } from "../theme";
import { FontSizes } from "../types";

const interReference = {
  topCrop: 7,
  bottomCrop: 6,
  fontSize: 40,
  lineHeight: 1.1,
};

export const useBasekick = (size: FontSizes) => {
  const theme: ThemeTokens = useTheme();

  const scaleSize =
    size === "display" ||
    size === "page" ||
    size === "section" ||
    size === "paragraph" ||
    size === "aside"
      ? theme.fontSizes.Heading[size]
      : size;

  return leadingTrim({
    lineHeight: theme.lineHeights[scaleSize],
    reference: interReference,
  });
};
