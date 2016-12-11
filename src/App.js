import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: 0,
      num: ''
    }
    this.update = this.update.bind(this)
  }

  update ( e ){
    debugger;
    this.setState({value: e.target.textContent})
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <table>
          <tbody>
            <button onClick={this.update}>1</button>
            <button onClick={this.update}>2</button>
            <button onClick={this.update}>3</button>
            <button onClick={this.update}>+</button>
          </tbody>
          <tbody>
            <button onClick={this.update}>4</button>
            <button onClick={this.update}>5</button>
            <button onClick={this.update}>6</button>
            <button>-</button>
          </tbody>
          <tbody>
            <button onClick={this.update}>7</button>
            <button onClick={this.update}>8</button>
            <button onClick={this.update}>9</button>
            <button>x</button>
          </tbody>
          <tbody>
            <button>C</button>
            <button onClick={this.update}>0</button>
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
