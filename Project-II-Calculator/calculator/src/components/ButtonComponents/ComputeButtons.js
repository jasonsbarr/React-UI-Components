import React from "react";
import ActionButton from "./ActionButton";
import "./Buttons.scss";

const ComputeButtons = props => {
  return (
    <div className="buttons-compute">
      <ActionButton buttonText="÷" onClick={() => props.onClick("divide")} />
      <ActionButton buttonText="×" onClick={() => props.onClick("multiply")} />
      <ActionButton buttonText="-" onClick={() => props.onClick("subtract")} />
      <ActionButton buttonText="+" onClick={() => props.onClick("add")} />
      <ActionButton buttonText="=" onClick={() => props.onClick("")} />
    </div>
  );
};

export default ComputeButtons;
