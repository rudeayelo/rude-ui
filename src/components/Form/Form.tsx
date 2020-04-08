import React from "react";
import { Element, merge } from "react-ui";
import { Text, TextProps } from "../Text";
import { Stack, StackProps } from "../Stack";
import { ElementProps } from "../../types";

export interface FormProps extends HTMLFormElement, ElementProps {}

export const Form: React.FC<FormProps> = ({ css, children, ...rest }) => (
  <Element
    as="form"
    component="Form"
    css={merge({ width: "100%" }, css)}
    {...rest}
  >
    {children}
  </Element>
);

export interface FieldProps extends StackProps {}

export const FormField: React.FC<FieldProps> = props => (
  <Stack component="FormField" {...props} />
);

FormField.defaultProps = {
  direction: "vertical",
  gap: 2,
};

export interface LabelProps extends HTMLLabelElement, TextProps {}

export const FormLabel: React.FC<LabelProps> = props => (
  <Text as="label" component="FormLabel" {...props} />
);

FormLabel.defaultProps = {
  size: 2,
};
