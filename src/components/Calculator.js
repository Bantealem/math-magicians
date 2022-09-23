/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Keyboard from './keyboard';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  componentDidMount() {
    this.handleClick('AC');
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const data = calculate({ total, next, operation }, buttonName);
    this.setState(data);
  };

  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="number-input">{(this.state.next === null) ? this.state.total : this.state.next}</div>
          <Keyboard keyboard={['AC', '+/-', '%', '÷']} clickHandler={this.handleClick} />
          <Keyboard keyboard={['7', '8', '9', 'x']} clickHandler={this.handleClick} />
          <Keyboard keyboard={['4', '5', '6', '-']} clickHandler={this.handleClick} />
          <Keyboard keyboard={['1', '2', '3', '+']} clickHandler={this.handleClick} />
          <Keyboard keyboard={['0', '.', '=']} clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
