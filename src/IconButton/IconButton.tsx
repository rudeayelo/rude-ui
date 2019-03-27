import React from "react";
import { Button } from "..";
import { ButtonProps } from "../Button/Button";

export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

const IconButton = ({
  icon,
  iconBefore,
  iconAfter,
  ...rest
}: IconButtonProps) => <Button iconBefore={icon} {...rest} />;

export { IconButton };
