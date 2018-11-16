import styled from "styled-components";
import {
  color,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} from "./styleProps";
import {
  ColorProps,
  DisplayProps,
  FontSizeProps,
  FontWeightProps,
  SpaceProps,
  LineHeightProps,
} from "styled-system";
import { ClassName } from "./types";

type Props = ColorProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  SpaceProps & {
    className?: ClassName;
  };

const Text = styled.span<Props>`
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
