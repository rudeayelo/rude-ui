import React from "react";
import { Element, merge } from "react-ui";
import { Text, TextProps } from "../Text";
import { Stack, StackProps } from "../Stack";
import { ElementProps } from "../../types";

export interface FormProps extends HTMLFormElement, ElementProps {}

interface FormCompound {
  Field: React.FC<FieldProps>;
  Label: React.FC<LabelProps>;
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

export interface FieldProps extends StackProps {}

export const Field: React.FC<FieldProps> = props => (
  <Stack component="FormField" {...props} />
);

Field.defaultProps = {
  direction: "vertical",
  gap: 2,
};

export interface LabelProps extends HTMLLabelElement, TextProps {}

export const Label: React.FC<LabelProps> = props => (
  <Text as="label" component="FormLabel" {...props} />
);

Label.defaultProps = {
  size: 2,
};

Form.Field = Field;
Form.Label = Label;
