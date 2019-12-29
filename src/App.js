import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

class App extends Component {

  
  state = {
    title: "Largest Cities In New Hampshire by Population"
  }
  
  
  render() {

    const { title } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sample Chart.js React App</h1>
        </header>

        <div className="sub chart-wrapper">
          <BarChart title={title} />
        </div>

        <div className="sub chart-wrapper">
          <PieChart title={title} />
        </div>

        <div className="sub chart-wrapper">
          <LineChart title={title} />
        </div>
      </div>
    );
  }
}

export default App;
