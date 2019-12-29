import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component {

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
            <h2>LineChart Example</h2>
            <Line data={this.props.data} options={this.options}/>
          </div>
        );
      }
}

export default LineChart;