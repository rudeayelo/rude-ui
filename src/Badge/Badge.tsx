import styled, { DefaultTheme } from "styled-components";
import { Text } from "../Text";
import { variant } from "styled-system";
import { ClassName, Tone } from "../types";
import { baseTheme } from "../theme";

export interface BadgeProps extends ClassName {
  /** Specifies the color for the button */
  tone?: Tone;
  theme?: DefaultTheme;
}

const tone = variant({
  prop: "tone",
  variants: {
    neutral: {
      color: "g.30",
    },
    info: {
      color: "blue.dark",
    },
    positive: {
      color: "green.base",
    },
    critical: {
      color: "red.base",
    },
    caution: {
      color: "orange.base",
    },
  },
});

export const Badge = styled(Text).attrs({
  borderRadius: "rounded",
  display: "inline-block",
  verticalAlign: "baseline",
  fontSize: 0,
  px: 2,
  py: 1,
})<BadgeProps>`
  background: linear-gradient(to top, currentColor -3000%, white 400%);
  box-shadow: 0 0 2px currentColor;

  ${tone}
`;

Badge.defaultProps = {
  tone: "info",
  theme: baseTheme,
};
