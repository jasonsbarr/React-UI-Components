import React from "react";
import NumberButton from "./NumberButton";
import ZeroButton from "./ZeroButton";
import "./Buttons.scss";

const numbers = Array.from(new Array(9), (_, i) => i + 1);

const MainButtons = props => {
  return (
    <React.Fragment>
      {numbers.map(n => (
        <NumberButton buttonText={n} onClick={() => props.onPressNumber(n)} />
      ))}
      <ZeroButton onClick={() => props.onPressNumber(0)} />
    </React.Fragment>
  );
};

export default MainButtons;
