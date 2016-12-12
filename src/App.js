import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentValue: 0
    }
    this.input = this.input.bind(this)
  }

  addition(){}

  subtraction(){}

  multiplication(){}

  division(){}

  reset(){}

  input(e){
    this.setState({currentValue: e.target.textContent})
  }

  render() {
    return (
      <div>
        <h1>{this.state.currentValue}</h1>
        <table>
          <tbody>
            <button onClick={this.input}>1</button>
            <button onClick={this.input}>2</button>
            <button onClick={this.input}>3</button>
            <button onClick={this.input}>+</button>
          </tbody>
          <tbody>
            <button onClick={this.input}>4</button>
            <button onClick={this.input}>5</button>
            <button onClick={this.input}>6</button>
            <button onClick={this.input}>-</button>
          </tbody>
          <tbody>
            <button onClick={this.input}>7</button>
            <button onClick={this.input}>8</button>
            <button onClick={this.input}>9</button>
            <button onClick={this.input}>*</button>
          </tbody>
          <tbody>
            <button onClick={this.input}>C</button>
            <button onClick={this.input}>0</button>
            <button>.</button>
            <button>/</button>
            <button>=</button>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
