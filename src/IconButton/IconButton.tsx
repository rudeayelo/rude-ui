import React from "react";
import Button from "../Button";
import { ButtonProps } from "../Button/Button";

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

const IconButton = ({
  icon,
  iconBefore,
  iconAfter,
  ...rest
}: IconButtonProps) => <Button iconBefore={icon} {...rest} />;

export default IconButton;
