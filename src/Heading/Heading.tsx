import styled from "styled-components";
import { textCrop, DEFAULT_TEXT_SIZE } from "../utils";
import { Box, BoxProps } from "../Box";

export interface HeadingProps extends BoxProps {
  level?: 1 | 2 | 3 | 4 | 5;
}

const textScale = {
  "5": 0,
  "4": 3,
  "3": 4,
  "2": 5,
  "1": 6,
};

export const Heading = styled(Box).attrs<HeadingProps>(
  ({ level = DEFAULT_TEXT_SIZE, ...props }) => ({
    fontSize: textScale[level],
    lineHeight: textScale[level],
    letterSpacing: level !== 5 && "-.02em",
    color: level !== 5 ? props.color : props.color || "secondaryText",
  }),
)<HeadingProps>`
  text-transform: ${({ fontSize }) => fontSize === 0 && "uppercase"};

  ${textCrop}
`;

Heading.defaultProps = {
  level: DEFAULT_TEXT_SIZE,
  fontWeight: 1,
};
