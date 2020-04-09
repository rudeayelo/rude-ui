import React from "react";
import { Link as BaseLink } from "react-ui";
import { ElementProps, AllHTMLProps } from "../../types";

type NativeAnchorProps = AllHTMLProps<HTMLAnchorElement>;
export interface LinkProps extends NativeAnchorProps, ElementProps {}

export const Link: React.FC<LinkProps> = props => (
  <BaseLink as="a" component="Link" {...props} />
);
