import * as React from "react";
import styled, { css } from "styled-components";
import { borderColor, color, space, variant } from "./styleProps";
import styledMap from "styled-map";
import Text from "./Text";
import { BorderColorProps, ColorProps, SpaceProps } from "styled-system";
import { ClassName, Intent } from "./types";

type Appearance = "default" | "primary" | "minimal";
type Color = string;
type Size = "small" | "medium" | "large";
type Props = BorderColorProps &
  ColorProps &
  SpaceProps & {
    appearance?: Appearance;
    className?: ClassName;
    iconAfter?: React.ReactNode;
    iconBefore?: React.ReactNode;
    iconColor?: Color;
    intent?: Intent;
    onClick?: () => void;
    size?: Size;
  };

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
  color: ${({ color }) => color};

  & > * {
    flex: 1;
  }
`;

const IconBefore = styled("span")<{ size?: Size; color?: Color }>`
  margin-right: ${iconMargin};
  ${iconStyles};
`;

const IconAfter = styled("span")<{ size?: Size; color?: Color }>`
  margin-left: ${iconMargin};
  ${iconStyles};
`;

const Base: React.SFC<Props> = props => (
  <button className={props.className} onClick={props.onClick}>
    {props.iconBefore && (
      <IconBefore size={props.size} color={props.iconColor}>
        {props.iconBefore}
      </IconBefore>
    )}
    <Text>{props.children}</Text>
    {props.iconAfter && (
      <IconAfter size={props.size} color={props.iconColor}>
        {props.iconAfter}
      </IconAfter>
    )}
  </button>
);

const Button = styled(Base)<Props>`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  border: none;

  ${intent};
  ${size};
  ${appearance};

  ${borderColor};
  ${color};
  ${space};
`;

Button.defaultProps = {
  appearance: "default",
  intent: "default",
  size: "medium",
};

export default Button;
