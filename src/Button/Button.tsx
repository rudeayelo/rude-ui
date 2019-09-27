import * as React from "react";
import styled, { css, DefaultTheme, StyledProps } from "styled-components";
import styledMap from "styled-map";
import { Text } from "../Text";
import { space, SpaceProps, variant } from "styled-system";
import { themeGet } from "@styled-system/theme-get";
import { ClassName, Intent } from "../types";
import { baseTheme } from "../theme";

type Appearance = "default" | "primary" | "minimal";
type Color = string;
type Size = "small" | "medium" | "large";

export interface ButtonProps extends SpaceProps, ClassName {
  appearance?: Appearance;
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
  iconColor?: Color;
  intent?: Intent;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  size?: Size;
  theme?: DefaultTheme;
}

interface IconProps {
  size?: Size;
  color?: Color;
}

const appearance = variant({
  prop: "appearance",
  variants: {
    default: {
      background: "linear-gradient(to top, currentColor -3000%, white 400%)",
      "&:hover": {
        background: "linear-gradient(to top, currentColor -2700%, white 700%)",
      },
    },
    primary: {
      color: "hsla(0, 0%, 100%, .95)",
      "&:hover": {
        boxShadow: `${baseTheme.shadows[0]}, ${baseTheme.shadows[1]}`,
      },
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

const intent = variant({
  prop: "intent",
  variants: {
    none: {
      color: "g.30",
      backgroundColor: "g.30",
    },
    default: {
      color: "blue.dark",
      backgroundColor: "blue.dark",
    },
    success: {
      color: "green.base",
      backgroundColor: "green.base",
    },
    danger: {
      color: "red.base",
      backgroundColor: "red.base",
    },
    warning: {
      color: "orange.base",
      backgroundColor: "orange.base",
    },
  },
});

const size = variant({
  prop: "size",
  variants: {
    small: {
      paddingRight: 3,
      paddingLeft: 3,
      height: 24,
      fontSize: 0,
    },
    medium: {
      paddingRight: 3,
      paddingLeft: 3,
      height: 32,
      fontSize: 1,
    },
    large: {
      paddingRight: 5,
      paddingLeft: 5,
      height: 48,
      fontSize: 2,
    },
  },
});

const iconSize = styledMap("size", {
  large: "20px",
  medium: "14px",
  small: "12px",
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
  border-radius: ${themeGet("radii.4")}px;

  ${intent};
  ${size};
  ${appearance};

  ${space};
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonStyled {...props}>
    {props.iconBefore && (
      <IconBefore size={props.size} color={props.iconColor}>
        {props.iconBefore}
      </IconBefore>
    )}
    {children && <Text>{children}</Text>}
    {props.iconAfter && (
      <IconAfter size={props.size} color={props.iconColor}>
        {props.iconAfter}
      </IconAfter>
    )}
  </ButtonStyled>
);

Button.defaultProps = {
  appearance: "default",
  intent: "default",
  size: "medium",
  theme: baseTheme,
};

export { Button };
