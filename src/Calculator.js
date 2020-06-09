import React from 'react';
import './App.css'

class Calculator extends React.Component {

  render() {

    return (
      <>
        {
          this.props.elements.map((number, index) => (
              <div key={index}
                   className={`cal-style ${number.type === "operand" ? 'operand-style' : ''}`}>
                {number.value}
              </div>
            )
          )
        }
      </>
    )
  }
}

export default Calculator;
    
