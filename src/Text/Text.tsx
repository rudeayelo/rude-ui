import styled from "styled-components";
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { textSize, TextSize } from "../variants";
import { baseTheme } from "../theme";

import { ClassName } from "../types";

export interface TextProps
  extends ColorProps,
    DisplayProps,
    SpaceProps,
    TextSize,
    TypographyProps,
    ClassName {}

const Text = styled.div<TextProps>`
  margin: 0;
  padding: 0;

  ${textSize}

  ${color};
  ${display};
  ${typography};
  ${space};
`;

Text.defaultProps = {
  theme: baseTheme,
};

export { Text };
