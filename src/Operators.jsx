import React from 'react';
import './App.css'


class Operators extends React.Component {
  render() {
    const operands = ['/', '*', '+', '-', '='];
    return (
        operands.map((operand, index) => <p key={index}>{operand}</p>
      )
    )
  }
}

export default Operators;