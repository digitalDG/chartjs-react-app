import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';

class App extends Component {

  
  state = {
    chartData: {
      labels: ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover', 'Rochester', 'Salem', 'Londonderry', 'Merrimack', 'Hudson'],
      datasets: [
        {
          label: 'Population',
          data: [
            112525,
            89246,
            43412,
            33667,
            31771,
            31366,
            29554,
            26302,
            25969,
            25559
          ],
          backgroundColor: [
            'blue',
            'green',
            'purple',
            'yellow',
            'cyan',
            'lime',
            'aqua',
            'teal',
            'fuchsia',
            'navy'
          ]
        }
      ]

    },
    title: "Largest Cities In New Hampshire by Population"
  }
  
  
  render() {

    const { chartData, title } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sample Chart.js React App</h1>
        </header>

        <div className="sub chart-wrapper">
          <BarChart data={chartData} title={title} />
        </div>

        <div className="sub chart-wrapper">
          <PieChart data={chartData} title={title} />
        </div>

        <div className="sub chart-wrapper">
          <LineChart data={chartData} title={title} />
        </div>
      </div>
    );
  }
}

export default App;
