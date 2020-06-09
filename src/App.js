import React from 'react';
// import Calculator from './Calculator';
// import Operators from './Operators'
import './App.css';


class App extends React.Component {

  render() {

    // const elements = [
    //   {type: 'element', value: 'AC'},
    //   {type: 'element', value: '+/-'},
    //   {type: 'element', value: '%'},
    //   {type: 'operand', value: '/'},
    //   {type: 'element', value: '7'},
    //   {type: 'element', value: '8'},
    //   {type: 'element', value: '9'},
    //   {type: 'operand', value: '*'},
    //   {type: 'element', value: '4'},
    //   {type: 'element', value: '5'},
    //   {type: 'element', value: '6'},
    //   {type: 'operand', value: '+'},
    //   {type: 'element', value: '1'},
    //   {type: 'element', value: '2'},
    //   {type: 'element', value: '3'},
    //   {type: 'operand', value: '-'}
    // ];
    // const elements2 = [
    //   {type: 'element', value: '0'},
    //   {type: 'element', value: '.'},
    //   {type: 'operand', value: '='}
    // ];

    const elements3 = [
      [
        {type: 'element', value: 'AC'},
        {type: 'element', value: '+/-'},
        {type: 'element', value: '%'},
        {type: 'operand', value: '/'}
      ],
      [
        {type: 'element', value: '7'},
        {type: 'element', value: '8'},
        {type: 'element', value: '9'},
        {type: 'operand', value: '*'}
      ],
      [
        {type: 'element', value: '4'},
        {type: 'element', value: '5'},
        {type: 'element', value: '6'},
        {type: 'operand', value: '+'}
      ],
      [
        {type: 'element', value: '1'},
        {type: 'element', value: '2'},
        {type: 'element', value: '3'},
        {type: 'operand', value: '-'}
      ],
      [
        {type: 'element', value: '0', isZero: true},
        {type: 'element', value: '.'},
        {type: 'operand', value: '='}
      ]
    ];


    return (
      <>
        {/*<div className="container" style={{marginBottom: 100}}>*/}
        {/*  <div className="app-2"/>*/}
        {/*  <div style={{marginBottom: 193}}>*/}
        {/*    <div className='app'>*/}
        {/*      <Calculator elements={elements}/>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className='app-3'>*/}
        {/*    <Calculator elements={elements2}/>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="container" style={{marginBottom: 100}}>
          <table style={{width: '100%'}}>
            <thead>
            <tr>
              <td colSpan={4} style={{height: 60, backgroundColor: 'grey'}}/>
            </tr>
            </thead>
            <tbody>
            {
              elements3.map((element, index) => (
                <tr key={index}>
                  {
                    element.map((item, index) => (
                      item.isZero?
                      <td className={`table-cal-style ${item.type === "operand" ? 'operand-style' : ''}`}
                          colSpan={2}
                          key={index}>{item.value}</td> :
                        <td className={`table-cal-style ${item.type === "operand" ? 'operand-style' : ''}`}
                            key={index}>{item.value}</td>
                    ))
                  }
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

// const result = () => <di>0</di>;


export default App;