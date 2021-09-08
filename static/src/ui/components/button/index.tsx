import React from "react";
import Button from "@atlaskit/button";

export interface ButtonProps {
  children?: React.ReactNode;
}

export const ActionButton = (props: ButtonProps) => {
  return <Button appearance="primary">{props.children}</Button>;
};
