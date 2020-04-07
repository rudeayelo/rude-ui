import React from "react";
import { Heading as BaseHeading, merge } from "react-ui";
import { useBasekick } from "../../hooks";
import { TextProps } from "../Text";
import { tokens } from "../../theme";

type PickedTextProps = Omit<TextProps, "size">;
type HeadingSizes = keyof typeof tokens.fontSizes.Heading;

interface HeadingProps extends PickedTextProps {
  size?: HeadingSizes;
  soft?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  css,
  size = "section",
  soft,
  ...rest
}) => {
  const basekickCSS = useBasekick(size);

  return (
    <BaseHeading
      size={size}
      css={merge(
        basekickCSS,
        {
          letterSpacing: size !== "aside" && "-.02em",
          color: size === "aside" && "text.subtle",
          textTransform: size === "aside" && "uppercase",
          fontWeight: soft && "normal",
        },
        css,
      )}
      {...rest}
    />
  );
};

Heading.displayName = "Heading";
