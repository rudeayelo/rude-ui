import styled from "styled-components";
import {
  borderRadius,
  BorderRadiusProps,
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
import { baseTheme } from "../theme";
import { ClassName } from "../types";

const toShadow = (color: string): string =>
  c(color)
    .alpha(0.2)
    .hsl()
    .string();

export interface InputProps
  extends BorderRadiusProps,
    ColorProps,
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
  height: 32px;
  box-shadow: ${({ theme }) => `${theme.shadows[0]}, ${theme.shadows[1]}`};

  ${borderRadius};
  ${color};
  ${display};
  ${fontSize};
  ${fontWeight};
  ${space};

  &:hover,
  &:focus {
    transition: box-shadow 150ms ease-in;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) =>
      `0 0 0 3px ${toShadow(theme.colors.blue.dark)}, ${theme.shadows[1]}`};
  }
`;

Input.defaultProps = {
  borderRadius: 1,
  fontWeight: 1,
  fontSize: 2,
  m: 0,
  px: 2,
  theme: baseTheme,
};

export { Input };
