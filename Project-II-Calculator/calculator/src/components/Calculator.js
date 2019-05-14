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

  handleClear = () => this.setState({ current: 0, prev: 0 });

  handlePressNumber = n => {
    const current =
      this.state.current !== 0
        ? parseInt(this.state.current.toString() + n)
        : parseInt(n);
    this.setState({ current });
  };

  handleAction = actionArg => {
    const { current, prev, action } = this.state;
    const val =
      action !== ""
        ? action === "add"
          ? prev + current
          : action === "subtract"
          ? prev - current
          : action === "multiply"
          ? prev * current
          : action === "divide"
          ? prev / current
          : 0
        : 0; // Shouldn't ever reach this
    this.setState({
      prev: current,
      current: val,
      action: actionArg,
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
