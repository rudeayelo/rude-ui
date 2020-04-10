import React from "react";
import { Select as BaseSelect } from "react-ui";
import { ElementProps, AllHTMLProps } from "../../types";

type NativeSelectProps = Omit<AllHTMLProps<HTMLSelectElement>, "size">;

export interface SelectProps extends NativeSelectProps, ElementProps {
  size?: "small" | "medium" | "large";
}

export const Select: React.FC<SelectProps> = props => <BaseSelect {...props} />;
