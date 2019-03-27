import * as React from "react";
import styled, { css } from "styled-components";
import styledMap from "styled-map";
import { Text } from "..";
import { space, SpaceProps, variant } from "styled-system";
import { ClassName, Intent } from "../types";
import { ThemedProps } from "../theme";

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
}

interface IconProps {
  size?: Size;
  color?: Color;
}

const appearance = variant({
  key: "buttons.appearance",
  prop: "appearance",
});

const intent = variant({
  key: "buttons.intent",
  prop: "intent",
});

const size = variant({
  key: "buttons.size",
  prop: "size",
});

const iconSize = styledMap("size", {
  large: "20px",
  medium: "18px",
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
  color: ${({ color }: ThemedProps<IconProps>) => color};

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
};

export { Button };
