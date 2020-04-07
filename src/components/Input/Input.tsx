import React from "react";
import { Input as BaseInput } from "react-ui";
import { ElementProps } from "../../types";

type HTMLInputAttributes = Omit<HTMLInputElement, "size">;

export interface InputProps extends HTMLInputAttributes, ElementProps {
  size: "small" | "medium" | "large";
}

export const Input: React.FC<InputProps> = props => <BaseInput {...props} />;
