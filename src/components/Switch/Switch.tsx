import React from "react";
import { Switch as BaseSwitch } from "react-ui";
import { ElementProps } from "../../types";

export interface SwitchProps extends ElementProps {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = props => (
  <BaseSwitch
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      typeof props.onChange === "function" && props.onChange(e.target.checked)
    }
    {...props}
  />
);
