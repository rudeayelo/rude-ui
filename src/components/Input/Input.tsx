import React from "react";
import { Input as BaseInput } from "react-ui";
import { ElementProps, AllHTMLProps } from "../../types";

type NativeInputProps = Omit<AllHTMLProps<HTMLInputElement>, "size">;
export interface InputProps extends NativeInputProps, ElementProps {
  size: "small" | "medium" | "large";
}

export const Input: React.FC<InputProps> = props => <BaseInput {...props} />;
