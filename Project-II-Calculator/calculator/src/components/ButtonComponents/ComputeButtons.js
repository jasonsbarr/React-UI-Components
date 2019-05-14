import React from "react";
import ActionButton from "./ActionButton";
import "./Buttons.scss";

const ComputeButtons = props => {
  return (
    <div className="buttons-compute">
      <ActionButton buttonText="÷" onClick={props.onClick} />
      <ActionButton buttonText="×" onClick={props.onClick} />
      <ActionButton buttonText="-" onClick={props.onClick} />
      <ActionButton buttonText="+" onClick={props.onClick} />
      <ActionButton buttonText="=" onClick={props.onClick} />
    </div>
  );
};

export default ComputeButtons;
