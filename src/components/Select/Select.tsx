import React from "react";
import { Select as BaseSelect } from "react-ui";
import { ElementProps } from "../../types";

type HTMLSelectProps = Omit<HTMLSelectElement, "size">;

export interface SelectProps extends HTMLSelectProps, ElementProps {
  size: "small" | "medium" | "large";
}

export const Select: React.FC<SelectProps> = props => <BaseSelect {...props} />;
