import React from 'react';
import './App.css'

class Calculator extends React.Component{
    render(){
        
        const elements = ['AC','+/-','%','7','8','9','4','5','6','1','2','3','0','.'];
        return(
                elements.map((numbers) => <div className="cal-style">{numbers}</div>
            )
        )
    }
}

export default Calculator;
    
