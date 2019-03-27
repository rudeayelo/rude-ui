import styled from "styled-components";
import { borderRadius, BorderRadiusProps, themeGet } from "styled-system";
import { level, Level } from "../variants";
import { Box } from "..";
import { BoxProps } from "../Box/Box";

export interface CardProps extends BorderRadiusProps, BoxProps, Level {}

const Card = styled(Box)<CardProps>`
  background: ${themeGet("colors.accentBackground")};

  ${borderRadius}
  ${level}
`;
Card.defaultProps = {
  borderRadius: 3,
  display: "block",
  level: 1,
};

export { Card };
