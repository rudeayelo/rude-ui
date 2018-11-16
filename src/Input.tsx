import styled from "styled-components";
import { color, display, fontSize, fontWeight, space } from "./styleProps";
import {
  ColorProps,
  DisplayProps,
  FontSizeProps,
  FontWeightProps,
  SpaceProps,
} from "styled-system";
import { ClassName } from "./types";

type Props = ColorProps &
  DisplayProps &
  FontSizeProps &
  FontWeightProps &
  SpaceProps & {
    className?: ClassName;
  };

const Input = styled.input<Props>`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  height: 32px;

  ${color};
  ${display};
  ${fontSize};
  ${fontWeight};
  ${space};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.border.dark};
  }
`;

Input.defaultProps = {
  fontWeight: 1,
  pr: 2,
  pl: 2,
  m: 0,
};

export default Input;
