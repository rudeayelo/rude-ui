import React from "react";
import { Element, Text as BaseText, merge } from "react-ui";
import { useBasekick } from "../../hooks";
import { ElementProps, FontSizes } from "../../types";

export interface TextProps extends ElementProps {
  size?: FontSizes;
  align?: "left" | "right" | "center" | "justify" | "inherit" | "initial";
  maxWidth?: string | number;
  bold?: boolean;
  italic?: boolean;
}

export const Text: React.FC<TextProps> = ({
  css,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,
  bold,
  italic,
  size = 3,
  ...rest
}) => {
  const basekickCSS = useBasekick(size);

  const marginProps = {
    // Just sending the props down to `Text` seems to reset them when undefined
    ...(marginX && { marginX }),
    ...(marginY && { marginY }),
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  };

  const styleProps = {
    fontWeight: bold && "bold",
    fontStyle: italic && "italic",
  };

  return (
    <Element {...marginProps} css={css}>
      <BaseText
        size={size}
        component="BaseText"
        css={merge(basekickCSS, styleProps)}
        {...rest}
      />
    </Element>
  );
};
