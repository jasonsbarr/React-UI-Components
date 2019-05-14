import React from "react";
import MainButtons from "./MainButtons";
import ComputeButtons from "./ComputeButtons";
import "./Buttons.scss";

const Buttons = props => {
  return (
    <div className="buttons">
      <MainButtons />
      <ComputeButtons />
    </div>
  );
};

export default Buttons;
