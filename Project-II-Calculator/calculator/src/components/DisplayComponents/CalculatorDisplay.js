import React from "react";
import "./Display.scss";

const CalculatorDisplay = props => {
  return <div className="display">{props.value}</div>;
};

export default CalculatorDisplay;
