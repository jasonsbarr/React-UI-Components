import React from "react";
import Button from "./Button";
import "./Buttons.scss";

const ActionButton = props => {
  return (
    <Button
      classes="btn btn-action"
      buttonText={props.buttonText}
      onClick={props.onClick}
    />
  );
};

export default ActionButton;
