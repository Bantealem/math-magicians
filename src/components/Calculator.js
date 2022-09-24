/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Keyboard from './keyboard';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    setState(calculate(state, buttonName));
  };
  return (
    <div className="container">
      <div className="main">
        <div className="number-input">{(state.next === null) ? state.total : state.next}</div>
        <Keyboard keyboard={['AC', '+/-', '%', '÷']} clickHandler={handleClick} />
        <Keyboard keyboard={['7', '8', '9', 'x']} clickHandler={handleClick} />
        <Keyboard keyboard={['4', '5', '6', '-']} clickHandler={handleClick} />
        <Keyboard keyboard={['1', '2', '3', '+']} clickHandler={handleClick} />
        <Keyboard keyboard={['0', '.', '=']} clickHandler={handleClick} />
      </div>
    </div>
  );
};
export default Calculator;
