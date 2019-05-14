import React from "react";
import Button from "./Button";

const ClearButton = props => {
  return (
    <Button
      classes="btn btn-default btn-fw"
      buttonText="clear"
      onClick={props.onClick}
    />
  );
};

export default ClearButton;
