import React from "react";
import { Element, merge } from "react-ui";
import { useBasekick } from "../../hooks";
import { ElementProps, Tone } from "../../types";

export interface BadgeProps extends ElementProps {
  tone?: Tone;
}

export const Badge: React.FC<BadgeProps> = ({
  tone = "info",
  css,
  ...rest
}) => {
  const basekickCSS = useBasekick(1);

  return (
    <Element
      as="span"
      component="Badge"
      variant={tone}
      css={merge(basekickCSS, { display: "inline-block" }, css)}
      {...rest}
    />
  );
};
