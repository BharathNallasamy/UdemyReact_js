import React, { useState } from "react";
import CalcButton from "./CalcButton";
import "./calculator.css";

const Calculator = () => {
  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    initial: true,
    operator: "",
  });
  function handleNumber(value) {
    let newValue = value;
    if (!calc.initial) {
      newValue = calc.current + value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      initial: false,
      operator: calc.operator,
    });
  }

  function handleOperator(value) {
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      initial: true,
      operator: value,
    });
  }

  function doCalculation() {
    let totalValue = parseInt(calc.total);
    // debugger;
    switch (calc.operator) {
      case "+":
        totalValue += parseInt(calc.current);
        break;
      case "-":
        totalValue -= parseInt(calc.current);
        break;
      case "*":
        totalValue *= parseInt(calc.current);
        break;
      case "/":
        totalValue /= parseInt(calc.current);
        break;
      default:
        totalValue = parseInt(calc.current);
    }

    return totalValue;
  }

  function renderDisplay() {
    return calc.current;
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      initial: true,
      operator: "",
    });
  }

  // function handleEquals() {
  //   let total = doCalculation();

  //   setCalc({
  //     current: total.toString(),
  //     total: total.toString(),
  //     initial: true,
  //     operator: "=",
  //   });
  // }

  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>

      <CalcButton value="7" onClick={handleNumber} />
      <CalcButton value="8" onClick={handleNumber} />
      <CalcButton value="9" onClick={handleNumber} />
      <CalcButton value="/" className="operator" onClick={handleOperator} />

      <CalcButton value="4" onClick={handleNumber} />
      <CalcButton value="5" onClick={handleNumber} />
      <CalcButton value="6" onClick={handleNumber} />
      <CalcButton value="*" className="operator" onClick={handleOperator} />

      <CalcButton value="1" onClick={handleNumber} />
      <CalcButton value="2" onClick={handleNumber} />
      <CalcButton value="3" onClick={handleNumber} />
      <CalcButton value="-" className="operator" onClick={handleOperator} />

      <CalcButton value="C" onClick={handleClear} />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" onClick={handleOperator} />
      <CalcButton value="+" className="operator" onClick={handleOperator} />
    </div>
  );
};

export default Calculator;
