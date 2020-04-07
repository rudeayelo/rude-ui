import React from "react";
import { Button, ButtonProps } from "../Button";

export interface IconButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const IconButton = ({
  children,
  iconBefore,
  iconAfter,
  ...rest
}: IconButtonProps) => <Button iconBefore={children} {...rest} />;
