import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: 0
    }
  }

  update ( e ){
    console.log(this);
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <table>
          <tr>
            <button onClick={this.update.bind(this)}>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </tr>
          <tr>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
          </tr>
          <tr>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>x</button>
          </tr>
          <tr>
            <button>C</button>
            <button>0</button>
            <button>.</button>
            <button>/</button>
            <button>=</button>
          </tr>
        </table>
      </div>
    )
  }
}

export default App;
