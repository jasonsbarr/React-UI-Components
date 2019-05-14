import React from "react";
import Button from "./Button";

const ZeroButton = props => {
  return (
    <Button
      classes="btn btn-default btn-fw"
      buttonText="0"
      onClick={props.onClick}
    />
  );
};

export default ZeroButton;
