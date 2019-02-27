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
  space,
  SpaceProps,
} from "styled-system";
import { ClassName } from "../types";

interface InputProps
  extends ColorProps,
    DisplayProps,
    FontSizeProps,
    FontWeightProps,
    SpaceProps,
    ClassName {}

const Input = styled.input<InputProps>`
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
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.dark};
  }
`;

Input.defaultProps = {
  fontWeight: 1,
  m: 0,
  pl: 2,
  pr: 2,
};

export default Input;
