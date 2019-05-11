import React from "react";
import "./Display.scss";

const CalculatorDisplay = props => {
  return <div className="display">{props.current}</div>;
};

export default CalculatorDisplay;
