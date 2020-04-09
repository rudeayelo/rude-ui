import React from "react";
import { Textarea as BaseTextarea } from "react-ui";
import { ElementProps, AllHTMLProps } from "../../types";

type NativeTextAreaElement = AllHTMLProps<HTMLTextAreaElement>;
export interface TextareaProps extends NativeTextAreaElement, ElementProps {
  rows: number;
}

export const Textarea: React.FC<TextareaProps> = props => (
  <BaseTextarea {...props} />
);
