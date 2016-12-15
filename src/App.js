import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentValue: 0
    }
    this.input = this.input.bind(this)
    this.reset = this.reset.bind(this)
    // this.addDecimal = this.addDecimal.bind(this)
  }

  var keys = document.querySelectorAll('#calculator span');
  var operators = ['+', '-', 'x', '÷'];
  var addDecimal = false;


  render() {
    return (
      <div id='calculator'>
        <div className='keys'>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>0</span>
        </div>
      </div>
    )
  }
}

// <h1>{this.state.currentValue}</h1>
// <table>
//   <tbody>
//     <button onClick={this.input}>1</button>
//     <button onClick={this.input}>2</button>
//     <button onClick={this.input}>3</button>
//     <button>+</button>
//   </tbody>
//   <tbody>
//     <button onClick={this.input}>4</button>
//     <button onClick={this.input}>5</button>
//     <button onClick={this.input}>6</button>
//     <button>-</button>
//   </tbody>
//   <tbody>
//     <button onClick={this.input}>7</button>
//     <button onClick={this.input}>8</button>
//     <button onClick={this.input}>9</button>
//     <button onClick={this.input}>*</button>
//   </tbody>
//   <tbody>
//     <button onClick={this.reset}>C</button>
//     <button onClick={this.input}>0</button>
//     <button>.</button>
//     <button>/</button>
//     <button>=</button>
//   </tbody>
// </table>

export default App;
