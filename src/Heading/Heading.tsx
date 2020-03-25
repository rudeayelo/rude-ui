import styled from "styled-components";
import { variant } from "styled-system";
import { Box, BoxProps } from "../Box";

const headingSize = variant({
  prop: "textSize",
  variants: {
    "0": {
      color: "secondaryText",
      textTransform: "uppercase",
      fontSize: 0,
      lineHeight: 1,
      fontWeight: 1,
    },
    "1": {
      letterSpacing: "-.02em",
      fontSize: 3,
      lineHeight: 3,
      fontWeight: 2,
    },
    "2": {
      letterSpacing: "-.02em",
      fontSize: 4,
      lineHeight: 4,
    },
    "3": {
      letterSpacing: "-.02em",
      fontSize: 4,
      lineHeight: 4,
      fontWeight: 2,
    },
    "4": {
      letterSpacing: "-.02em",
      fontSize: 5,
      lineHeight: 5,
      fontWeight: 2,
    },
    "5": {
      letterSpacing: "-.02em",
      fontSize: 6,
      lineHeight: 6,
      fontWeight: 2,
    },
    "6": {
      letterSpacing: "-.02em",
      fontSize: 7,
      lineHeight: 7,
      fontWeight: 2,
    },
    "7": {
      letterSpacing: "-.02em",
      fontSize: 8,
      lineHeight: 8,
      fontWeight: 2,
    },
  },
});

export interface HeadingProps extends BoxProps {
  textSize?: number;
}

export const Heading = styled(Box)<HeadingProps>(headingSize);

Heading.defaultProps = {
  textSize: 4,
};
