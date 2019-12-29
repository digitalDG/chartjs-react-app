import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
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
}


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
            <Pie data={data} options={this.options}/>
          </div>
        );
      }
}

export default PieChart;