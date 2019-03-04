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
import c from "color";
import { ClassName } from "../types";

const toShadow = (col: string): string =>
  c(col)
    .alpha(0.2)
    .hsl()
    .string();

interface InputProps
  extends ColorProps,
    DisplayProps,
    FontSizeProps,
    FontWeightProps,
    SpaceProps,
    ClassName {}

const Input = styled.input<InputProps>`
  -webkit-appearance: initial; /* Resets the appearance in mobile Safari */
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  border: none;
  border-radius: 6px;
  height: 32px;
  box-shadow: 0 0 1px hsla(0, 0%, 0%, 0.05), 0 3px 6px hsla(0, 0%, 0%, 0.12);

  ${color};
  ${display};
  ${fontSize};
  ${fontWeight};
  ${space};

  &:hover,
  &:focus {
    transition: box-shadow 150ms ease-in;
    box-shadow: 0 0 1px hsla(0, 0%, 0%, 0.05), 0 5px 10px hsla(0, 0%, 0%, 0.12);
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => `0 0 0 3px ${toShadow(theme.colors.blue.dark)},
    0 3px 6px hsla(0, 0%, 0%, 0.12);`};
  }
`;

Input.defaultProps = {
  fontWeight: 1,
  m: 0,
  pl: 2,
  pr: 2,
};

export default Input;
