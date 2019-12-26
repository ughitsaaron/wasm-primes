import React from "react";
import { noop } from "../lib";

interface NumberProps {
  value: number;
  onChange?(n: number): void;
}

const Number: React.FC<NumberProps> = ({ value, onChange = noop, ...rest }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={e => {
        onChange(parseInt(e.target.value));
      }}
      {...rest}
    />
  );
};

export default Number;
