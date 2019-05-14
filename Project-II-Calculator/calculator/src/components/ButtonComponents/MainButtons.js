import React from "react";
import ClearButton from "./ClearButton";
import NumberButton from "./NumberButton";
import ZeroButton from "./ZeroButton";
import "./Buttons.scss";

const numbers = Array.from(new Array(9), (_, i) => i + 1);

const MainButtons = props => {
  return (
    <div className="buttons-main">
      <ClearButton onClick={props.onClear} />
      {numbers.map(n => (
        <NumberButton buttonText={n} onClick={() => props.onPressNumber(n)} />
      ))}
      <ZeroButton onClick={() => props.onPressNumber(0)} />
    </div>
  );
};

export default MainButtons;
