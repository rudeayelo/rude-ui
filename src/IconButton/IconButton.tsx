import React from "react";
import { Button, ButtonProps } from "../Button";

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
