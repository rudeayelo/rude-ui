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
  bold,
  italic,
  size = 3,
  children,
  ...rest
}) => {
  const basekickCSS = useBasekick(size);

  const styleProps = {
    fontWeight: bold && "bold",
    fontStyle: italic && "italic",
  };

  return (
    <Element css={css} {...rest}>
      <BaseText
        size={size}
        component="BaseText"
        css={merge(basekickCSS, styleProps)}
      >
        {children}
      </BaseText>
    </Element>
  );
};
