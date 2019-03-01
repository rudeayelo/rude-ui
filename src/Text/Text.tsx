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
import { ClassName } from "../types";

interface TextProps
  extends ColorProps,
    DisplayProps,
    FontSizeProps,
    FontWeightProps,
    LineHeightProps,
    SpaceProps,
    ClassName {}

const Text = styled.div<TextProps>`
  margin: 0;
  padding: 0;

  ${color};
  ${display};
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${space};
`;

Text.defaultProps = {
  fontWeight: 1,
};

export default Text;
