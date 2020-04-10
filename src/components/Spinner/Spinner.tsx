import React from "react";
import { Spinner as BaseSpinner } from "react-ui";
import { ElementProps } from "../../types";

export interface SpinnerProps extends ElementProps {
  size?: "small" | "medium" | "large";
}

const Spinner: React.FC<SpinnerProps> = props => <BaseSpinner {...props} />;

export { Spinner };
