import React from "react";
import { Element, Text as BaseText } from "react-ui";
import { useBasekick } from "../../hooks";
import { ElementProps, FontSizes } from "../../types";

export interface TextProps extends ElementProps {
  size?: FontSizes;
  align?: "left" | "right" | "center" | "justify" | "inherit" | "initial";
  maxWidth?: string | number;
}

export const Text: React.FC<TextProps> = ({
  css,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  size = 3,
  ...rest
}) => {
  const basekickCSS = useBasekick(size);

  // Just sending the props down to `Text` seems to reset them when undefined
  const marginProps = {
    ...(marginTop && { marginTop }),
    ...(marginRight && { marginRight }),
    ...(marginBottom && { marginBottom }),
    ...(marginLeft && { marginLeft }),
    ...(marginX && { marginX }),
    ...(marginY && { marginY }),
  };

  return (
    <Element {...marginProps} css={css}>
      <BaseText size={size} component="BaseText" css={basekickCSS} {...rest} />
    </Element>
  );
};
