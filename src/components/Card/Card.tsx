import React from "react";
import { Element, merge } from "react-ui";
import { ElementProps } from "../../types";

export interface CardProps extends ElementProps {
  level?: 0 | 1 | 2 | 3;
}

const Card: React.FC<CardProps> = ({ level = 1, css, ...rest }) => (
  <Element component="Card" css={merge({ boxShadow: level }, css)} {...rest} />
);

export { Card };
