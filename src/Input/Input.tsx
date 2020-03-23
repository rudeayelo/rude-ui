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
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";
import { baseTheme } from "../theme";
import { ClassName } from "../types";

export interface InputProps
  extends BorderRadiusProps,
    ColorProps,
    DisplayProps,
    FontSizeProps,
    FontWeightProps,
    ShadowProps,
    SpaceProps,
    ClassName {}

const Input = styled.input<InputProps>`
  -webkit-appearance: initial; /* Resets the appearance in mobile Safari */
  border: none;
  height: 36px;

  ${borderRadius};
  ${color};
  ${display};
  ${fontSize};
  ${fontWeight};
  ${shadow};
  ${space};

  &:hover,
  &:focus {
    transition: box-shadow 150ms ease-in;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) =>
      `0 0 0 3px ${theme.colors.blue.base}, ${theme.shadows[1]}`};
  }

  ::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[0]};
  }
`;

Input.defaultProps = {
  borderRadius: 1,
  fontSize: 2,
  m: 0,
  px: 2,
  boxShadow: "input",
  theme: baseTheme,
};

export { Input };
