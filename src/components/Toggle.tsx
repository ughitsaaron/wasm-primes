import React from "react";
import { noop } from "../lib";

interface ToggleProps {
  value: boolean;
  onChange?(v: boolean): void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange = noop, ...rest }) => {
  return <input type="checkbox" onChange={e => onChange(e.target.checked)} />;
};

export default Toggle;
