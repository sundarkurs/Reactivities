import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){
    this.setState({
      values: [{id: 1, name: 'Value 01'}, {id: 1, name: 'Value 02'}]
    })
  }
  

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {this.state.values.map((value: any) => (
            <li>{value.name}</li>
          ))}
        </ul>
      </header>
    </div>
    )
  }
}