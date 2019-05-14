import React from "react";

const Button = props => {
  const { classes = "btn", buttonText = "B" } = props;
  return (
    <button className={classes} onClick={props.onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
