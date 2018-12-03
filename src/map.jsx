import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

require('./paneles.js');

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  timeTicket = null;
  getInitialState = () => ({option: this.getOption()});

  componentDidMount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
    this.timeTicket = setInterval(() => {
      const option = this.state.option;
      const r = new Date().getSeconds();
      option.title.text = 'iphone销量' + r;
      option.series[0].name = 'iphone销量' + r;
      option.legend.data[0] = 'iphone销量' + r;
      this.setState({ option: option });
    }, 1000);
  };
  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  };
  randomData() {
    return Math.round(Math.random()*1000);
  };
  getOption = () => {
    return {
      title: {
        text: 'iphone销量',
        subtext: '纯属虚构',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data:['iphone3','iphone4','iphone5']
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],       // 文本，默认为数值文本
        calculable: true
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: 'iphone3',
          type: 'map',
          mapType: 'pk',
          roam: false,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data:[
            {name: 'NO11',value: this.randomData() },
            {name: 'NO13',value: this.randomData() },
            {name: 'NO12',value: this.randomData() },

          ]
        },
        {
          name: 'iphone4',
          type: 'map',
          mapType: 'pk',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data:[
            {name: 'NO12',value: this.randomData() },
            {name: 'NO12',value: this.randomData() },

          ]
        },
        {
          name: 'iphone5',
          type: 'map',
          mapType: 'pk',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data:[
            {name: 'NO11',value: this.randomData() },
            {name: '天津',value: this.randomData() },

          ]
        }
      ]
    };
  };
  render() {
    const code = "require('echarts/map/js/china.js'); \n" +
          "<ReactEcharts \n" +
          "  option={this.state.option || {}} \n" +
          "  style={{height: '350px', width: '100%'}}  \n" +
          "  className='react_for_echarts' />";
    return (
      <div className='examples'>
        <div className='parent'>
          <label> render a china map. <strong>MAP charts</strong>: </label>
          <ReactEcharts
            option={this.state.option}
            style={{height: '500px', width: '100%'}}
            className='react_for_echarts' />
          <label> code below: </label>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  };
}