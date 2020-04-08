import React from "react";
import { Element, merge } from "react-ui";
import { Text, TextProps } from "../Text";
import { Stack, StackProps } from "../Stack";
import { ElementProps } from "../../types";

export interface FormProps extends HTMLFormElement, ElementProps {}

interface FormCompound {
  Field: React.FC<FormFieldProps>;
  Label: React.FC<FormLabelProps>;
}

export const Form: React.FC<FormProps> & FormCompound = ({
  css,
  children,
  ...rest
}) => (
  <Element
    as="form"
    component="Form"
    css={merge({ width: "100%" }, css)}
    {...rest}
  >
    {children}
  </Element>
);

export interface FormFieldProps extends StackProps {}

export const FormField: React.FC<FormFieldProps> = props => (
  <Stack component="FormField" {...props} />
);

FormField.defaultProps = {
  direction: "vertical",
  gap: 2,
};

export interface FormLabelProps extends HTMLLabelElement, TextProps {}

export const FormLabel: React.FC<FormLabelProps> = props => (
  <Text as="label" component="FormLabel" {...props} />
);

FormLabel.defaultProps = {
  size: 2,
};

Form.Field = FormField;
Form.Label = FormLabel;
