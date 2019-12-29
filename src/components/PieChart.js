import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class PieChart extends Component {

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right'
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
            <h2>PieChart Example</h2>
            <Pie data={this.props.data} options={this.options}/>
          </div>
        );
      }
}

export default PieChart;