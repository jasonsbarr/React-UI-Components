import React from "react";
import Button from "./Button";
import "./Button.scss";

const NumberButton = props => {
  return (
    <Button
      classes="btn btn-default"
      buttonText={props.buttonText}
      onClick={props.onClick}
    />
  );
};

export default NumberButton;
