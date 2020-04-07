import React from "react";
import { Stack as BaseStack } from "react-ui";
import { ElementProps } from "../../types";
import { tokens } from "../../theme";

export interface StackProps extends ElementProps {
  gap?: keyof typeof tokens.space;
  direction?: "vertical" | "horizontal";
  justify?:
    | "normal"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "flex-start"
    | "flex-end";
  align?:
    | "normal"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "baseline";
  inline?: boolean;
}

export const Stack: React.FC<StackProps> = props => <BaseStack {...props} />;
