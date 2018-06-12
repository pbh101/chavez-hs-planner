import * as React from "react";

import OutcomeIconProps from "./outcome-icon-props";
import { OutcomeLikelyColor } from "shared/constants";

const OutcomeLikelyIcon = (props: OutcomeIconProps) => {
  return (
    <svg
      height={props.size}
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
    >
    <path
      d="m 15,50 70,0"
      fill="none"
      fillRule="evenodd"
      stroke="#000000"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeDasharray="none"
      strokeOpacity="1" 
    />
    <path
      d="m 50,15 0,70"
      fill="none"
      fillRule="evenodd"
      stroke="#000000"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="miter"
      strokeMiterlimit="4"
      strokeDasharray="none"
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

export default OutcomeLikelyIcon;
