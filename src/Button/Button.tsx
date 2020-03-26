import * as React from "react";
import styled, { css, StyledProps } from "styled-components";
import styledMap from "styled-map";
import { Text } from "../Text";
import { space, SpaceProps, variant } from "styled-system";
import { ClassName, Tone } from "../types";
import { baseTheme } from "../theme";

type Appearance = "default" | "primary" | "minimal";
type Color = string;
type Size = "small" | "medium" | "large";

export interface ButtonProps extends SpaceProps, ClassName {
  /** Variant for the main aspect of the button <"default" | "primary" | "minimal"> */
  appearance?: Appearance;
  /** Icon to show after the text inside the button */
  iconAfter?: React.ReactNode;
  /** Icon to show before the text inside the button */
  iconBefore?: React.ReactNode;
  /** Color of the icon */
  iconColor?: Color;
  /** Specifies the color for the button */
  tone?: Tone;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Text/spacing size <"small" | "medium" | "large"> */
  size?: Size;
}

interface IconProps {
  size?: Size;
  color?: Color;
}

const appearance = variant({
  prop: "appearance",
  variants: {
    default: {
      background: "white",
      "&:hover": {
        background: "linear-gradient(to top, currentColor -3000%, white 400%)",
      },
      border: `2px solid`,
      fontWeight: 1,
    },
    primary: {
      color: "hsla(0, 0%, 100%, .95)",
      fontWeight: 1,
    },
    minimal: {
      "&:not(:hover)": {
        background: "none",
      },
      "&:hover": {
        background: "linear-gradient(to top, currentColor -3000%, white 400%)",
      },
    },
  },
});

const tone = variant({
  prop: "tone",
  variants: {
    neutral: {
      color: "g.30",
      bg: "g.30",
      "&:hover": { bg: "g.20" },
    },
    info: {
      color: "blue.dark",
      bg: "blue.dark",
      "&:hover": { bg: "blue.darkest" },
    },
    positive: {
      color: "green.base",
      bg: "green.base",
      "&:hover": { bg: "green.dark" },
    },
    critical: {
      color: "red.base",
      bg: "red.base",
      "&:hover": { bg: "red.dark" },
    },
    caution: {
      color: "orange.base",
      bg: "orange.base",
      "&:hover": { bg: "orange.dark" },
    },
  },
});

const size = variant({
  prop: "size",
  variants: {
    small: {
      paddingRight: 3,
      paddingLeft: 3,
      height: 34,
      fontSize: 1,
    },
    medium: {
      paddingRight: 3,
      paddingLeft: 3,
      height: 44,
      fontSize: 2,
    },
    large: {
      paddingRight: 4,
      paddingLeft: 4,
      height: 56,
      fontSize: 2,
    },
  },
});

const iconSize = styledMap("size", {
  large: "20px",
  medium: "16px",
  small: "14px",
});

const iconMargin = styledMap("size", {
  large: "12px",
  medium: "8px",
  small: "6px",
});

const iconStyles = css`
  display: inline-flex;
  align-items: center;
  width: ${iconSize};
  color: ${({ color }: StyledProps<IconProps>) => color};

  & > * {
    flex: 1;
  }
`;

const IconBefore = styled.span<IconProps>`
  ${iconStyles};

  & + * {
    margin-left: ${iconMargin};
  }
`;

const IconAfter = styled.span<IconProps>`
  margin-left: ${iconMargin};
  ${iconStyles};
`;

const ButtonStyled = styled.button`
  display: inline-flex;
  vertical-align: middle;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.radii[1]}px;

  ${tone};
  ${size};
  ${appearance};

  ${space};
`;

ButtonStyled.defaultProps = {
  theme: baseTheme,
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonStyled {...props}>
    {props.iconBefore && (
      <IconBefore size={props.size} color={props.iconColor}>
        {props.iconBefore}
      </IconBefore>
    )}
    {children && (
      <Text mt={props.size === "medium" ? "-1px" : ""}>{children}</Text>
    )}
    {props.iconAfter && (
      <IconAfter size={props.size} color={props.iconColor}>
        {props.iconAfter}
      </IconAfter>
    )}
  </ButtonStyled>
);

Button.defaultProps = {
  appearance: "default",
  tone: "info",
  size: "medium",
};
