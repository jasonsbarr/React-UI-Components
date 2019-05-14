import React, { Component } from "react";
import CalculatorDisplay from "./DisplayComponents/CalculatorDisplay";
import Buttons from "./ButtonComponents/Buttons";
import "./Calculator.scss";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      history: [],
    };
  }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay current={this.state.current} />
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
