import React from "react";
import { Element, merge } from "react-ui";
import { Text } from "../Text";
import { Stack } from "../Stack";
import { Tone, ElementProps } from "../../types";

type Appearance = "primary" | "secondary" | "minimal";
type Size = "small" | "medium" | "large";

type NativeButtonProps = Omit<
  React.AllHTMLAttributes<HTMLButtonElement>,
  "size" | "as"
>;
export interface ButtonProps extends NativeButtonProps, ElementProps {
  /** Specifies the color for the button */
  tone?: Tone;
  /** Variant for the main aspect of the button <"default" | "primary" | "minimal"> */
  appearance?: Appearance;
  /** Text/spacing size <"small" | "medium" | "large"> */
  size?: Size;
  /** Icon to show after the text inside the button */
  iconAfter?: React.ReactNode;
  /** Icon to show before the text inside the button */
  iconBefore?: React.ReactNode;
  /** Color of the icon */
  iconColor?: string;
}

interface IconProps {
  size?: Size;
  color?: string;
}

const iconSize = {
  small: "14px",
  medium: "16px",
  large: "18px",
};

const iconGap = {
  small: 1 as const,
  medium: 2 as const,
  large: 2 as const,
};

const fontSizes = {
  small: 2 as const,
  medium: 2 as const,
  large: 3 as const,
};

const iconStyles = ({ size, color }: { size: Size; color?: string }) => ({
  display: "inline-flex",
  alignItems: "center",
  width: iconSize[size],
  color,
  "& > *": {
    flex: "1",
  },
});

const IconBefore: React.FC<IconProps> = ({
  size = "medium",
  color,
  ...rest
}) => <Element as="span" css={iconStyles({ size, color })} {...rest} />;

const IconAfter: React.FC<IconProps> = ({
  size = "medium",
  color = "currentColor",
  ...rest
}) => <Element as="span" css={iconStyles({ size, color })} {...rest} />;

const tones = {
  neutral: {
    color: "grays.600",
    background: "grays.600",
    "&:hover": { background: "grays.300" },
  },
  info: {
    color: "blues.600",
    background: "blues.600",
    "&:hover": { background: "blues.800" },
  },
  positive: {
    color: "greens.500",
    background: "greens.500",
    "&:hover": { background: "greens.700" },
  },
  critical: {
    color: "reds.500",
    background: "reds.500",
    "&:hover": { background: "reds.700" },
  },
  caution: {
    color: "oranges.500",
    background: "oranges.500",
    "&:hover": { background: "oranges.700" },
  },
};

const sizes = {
  small: {
    paddingX: 3,
    height: 7,
  },
  medium: {
    paddingX: 3,
    height: 8,
  },
  large: {
    paddingX: 5,
    height: 10,
  },
};

export const Button: React.FC<ButtonProps> = ({
  tone = "info",
  size = "medium",
  appearance = "primary",
  iconBefore,
  iconAfter,
  iconColor,
  children,
  css,
  ...rest
}) => (
  <Element
    as="button"
    component="Button"
    variant={appearance}
    size={size}
    css={merge(sizes[size], tones[tone], css)}
    {...rest}
  >
    <Stack gap={iconGap[size]} align="center">
      {iconBefore && (
        <IconBefore size={size} color={iconColor}>
          {iconBefore}
        </IconBefore>
      )}
      {children && <Text size={fontSizes[size]}>{children}</Text>}
      {iconAfter && (
        <IconAfter size={size} color={iconColor}>
          {iconAfter}
        </IconAfter>
      )}
    </Stack>
  </Element>
);
