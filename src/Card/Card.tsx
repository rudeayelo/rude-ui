import styled from "styled-components";
import { borderRadius, BorderRadiusProps } from "styled-system";
import { baseTheme } from "../theme";
import { level, Level } from "../variants";
import { Box, BoxProps } from "../Box";

export interface CardProps extends BorderRadiusProps, BoxProps, Level {}

const Card = styled(Box)<CardProps>`
  background: ${({ theme }) => theme.colors.accentBackground};

  ${borderRadius}
  ${level}
`;

Card.defaultProps = {
  borderRadius: 3,
  display: "block",
  level: 1,
  theme: baseTheme,
};

export { Card };
