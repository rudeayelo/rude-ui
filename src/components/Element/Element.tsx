import React from "react";
import { Element as BaseElement } from "react-ui";
import { ElementProps } from "../../types";

export const Element: React.FC<ElementProps> = props => (
  <BaseElement {...props} />
);
