import React from "react";
import { Textarea as BaseTextarea } from "react-ui";
import { ElementProps } from "../../types";

export interface TextareaProps extends HTMLTextAreaElement, ElementProps {
  rows: number;
}

export const Textarea: React.FC<TextareaProps> = props => (
  <BaseTextarea {...props} />
);
