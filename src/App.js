import React,{Component} from 'react';
import Calculator from './Calculator';
import Operators from './Operators'
import './App.css';




class App extends React.Component{
		
	render(){
		return(

			<div className='app'>
				<Calculator />
				<div className="operand-style">
					<Operators />
				</div>
			</div>
		)
	}
}

const result = () => <di>0</di>;


export default App;