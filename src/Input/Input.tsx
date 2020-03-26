import styled from "styled-components";
import { Box, BoxProps } from "../Box";
import { ClassName } from "../types";

export interface InputProps extends BoxProps, ClassName {}

const Input = styled(Box).attrs({
  as: "input",
})<InputProps>`
  -webkit-appearance: initial; /* Resets the appearance in mobile Safari */

  &:hover,
  &:focus {
    transition: box-shadow 150ms ease-in;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) =>
      `0 0 0 2px ${theme.colors.blue.base}, ${theme.shadows[1]}`};
  }

  ::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[0]};
  }
`;

Input.defaultProps = {
  border: "none",
  borderRadius: 1,
  fontSize: 2,
  px: 2,
  height: "36px",
  width: "100%",
  boxShadow: "input",
};

export { Input };
