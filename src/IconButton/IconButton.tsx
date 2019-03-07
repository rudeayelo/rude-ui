import React from "react";
import Button from "../Button";

interface IconButtonProps {
  icon: React.ReactNode;
}

const IconButton = ({ icon, iconBefore, iconAfter, ...rest }) => (
  <Button iconBefore={icon} {...rest} />
);

export default IconButton;
