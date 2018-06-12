import * as React from "react";

import OutcomeIconProps from "./outcome-icon-props";
import { OutcomeUncertainColor } from "shared/constants";

const OutcomeUncertainIcon = (props: OutcomeIconProps) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 100 100"
    height={props.size}
    width={props.size}
  >
    <circle
      r="29.411764"
      cy="50"
      cx="50"
      opacity="1"
      fill="none"
      fillOpacity="1"
      stroke="#000000"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="1"
      strokeDasharray="none"
      strokeDashoffset="0"
      strokeOpacity="1" 
    />
    <circle
      r="48.511395"
      cy="50"
      cx="50"
      opacity="1"
      fill="none"
      fillOpacity="1"
      stroke="none"
      strokeWidth="0.97720796"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="1"
      strokeDasharray="none"
      strokeDashoffset="0"
      strokeOpacity="1" 
    />
  </svg>
  );
}

export default OutcomeUncertainIcon;
