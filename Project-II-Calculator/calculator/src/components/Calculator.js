import React, { Component } from "react";
import CalculatorDisplay from "./DisplayComponents/CalculatorDisplay";
import ClearButton from "./ButtonComponents/ClearButton";
import MainButtons from "./ButtonComponents/MainButtons";
import ComputeButtons from "./ButtonComponents/ComputeButtons";
import "./Calculator.scss";
import "./ButtonComponents/Buttons.scss";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      prev: 0,
      action: "",
    };
  }

  handleClear = () =>
    this.setState({
      current: 0,
      prev: 0,
      action: "",
      clearNext: false,
    });

  handlePressNumber = n => {
    const current =
      this.state.current !== 0 && !this.state.clearNext
        ? parseInt(this.state.current.toString() + n)
        : parseInt(n);
    this.setState({
      current,
      clearNext: false,
    });
  };

  handleAction = actionArg => {
    const { current, prev, action } = this.state;
    const val =
      action === "add"
        ? prev + current
        : action === "subtract"
        ? prev - current
        : action === "multiply"
        ? prev * current
        : action === "divide"
        ? prev / current
        : current;
    this.setState({
      prev: val,
      current: val,
      action: actionArg,
      clearNext: true,
    });
  };

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay value={this.state.current} />
        <div className="buttons">
          <div className="buttons-main">
            <ClearButton onClick={this.handleClear} />
            <MainButtons onPressNumber={this.handlePressNumber} />
          </div>
          <ComputeButtons onClick={this.handleAction} />
        </div>
      </div>
    );
  }
}

export default Calculator;
