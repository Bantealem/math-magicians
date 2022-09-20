import React from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <input className="number-input" type="number" />
        <div className="calculation">
          <button type="button" className="calculate-button">AC</button>
          <button type="button" className="calculate-button">+/-</button>
          <button type="button" className="calculate-button">%</button>
          <button type="button" className="calculate-button sign">+</button>
          <button type="button" className="calculate-button">7</button>
          <button type="button" className="calculate-button">8</button>
          <button type="button" className="calculate-button">9</button>
          <button type="button" className="calculate-button sign">-</button>
          <button type="button" className="calculate-button">4</button>
          <button type="button" className="calculate-button">5</button>
          <button type="button" className="calculate-button">6</button>
          <button type="button" className="calculate-button sign">x</button>
          <button type="button" className="calculate-button">1</button>
          <button type="button" className="calculate-button">2</button>
          <button type="button" className="calculate-button">3</button>
          <button type="button" className="calculate-button sign">÷</button>
          <button type="button" className="calculate-button">0</button>
          <button type="button" className="calculate-button">.</button>
          <button type="button" className="calculate-button sign">=</button>
        </div>
      </div>
    );
  }
}
