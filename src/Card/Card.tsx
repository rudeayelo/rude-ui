import styled from "styled-components";
import { level, LevelProps } from "../variants";
import { Box, BoxProps } from "../Box";

export interface CardProps extends BoxProps, LevelProps {}

export const Card = styled(Box)<CardProps>`
  ${level}
`;

Card.defaultProps = {
  bg: "accentBackground",
  borderRadius: 1,
  level: 1,
};
