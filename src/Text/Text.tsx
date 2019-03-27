import styled from "styled-components";
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  space,
  SpaceProps,
} from "styled-system";
import { textSize, TextSize } from "../variants";
import { ClassName } from "../types";

export interface TextProps
  extends ColorProps,
    DisplayProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    SpaceProps,
    TextSize,
    ClassName {}

const Text = styled.div<TextProps>`
  margin: 0;
  padding: 0;

  ${textSize}

  ${color};
  ${display};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
`;

Text.defaultProps = {
  textSize: 1,
};

export { Text };
