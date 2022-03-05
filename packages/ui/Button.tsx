import React from "react";
import { MouseEventHandler } from "react";

export const Button = ({
  name,
  onClick,
}: {
  name: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
};
