import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'bottom' 
    }

    options = {
        //maintainAspectRatio: false,
        title: {
            display: this.props.displayTitle,
            text: this.props.title,
            fontSize: 25
        },
        legend: {
            display: this.props.displayLegend,
            position: this.props.legendPosition
        }
    
    }

    render() {
        return (
          <div>
            <h2>BarChart Example</h2>
            <Bar data={this.props.data} options={this.options}/>
          </div>
        );
      }
}

export default BarChart;