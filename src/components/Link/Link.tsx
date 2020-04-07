import React from "react";
import { Link as BaseLink } from "react-ui";
import { ElementProps } from "../../types";

export interface LinkProps extends HTMLAnchorElement, ElementProps {}

export const Link: React.FC<LinkProps> = props => (
  <BaseLink as="a" component="Link" {...props} />
);
