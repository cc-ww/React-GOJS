import React from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/graph';
import './test.css';
import jquery from 'jquery';

const $ = jquery;
// import { DatePicker, Button, Icon, Spin} from 'antd';
// import stickybits from 'stickybits'

class Test5 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"echarts 力图结构",
			loading: true
		}
	}

	componentDidMount(){
		let myChart = echarts.init($('.myEbox')[0]);
		let option = {
			title: {
				text: 'Graph 简单示例'
			},
			tooltip: {},
			animationDurationUpdate: 1500,
			animationEasingUpdate: 'quinticInOut',
			series : [
				{
					type: 'graph',
					layout: 'none',
					symbolSize: 50,
					roam: true,
					label: {
						normal: {
							show: true
						}
					},
					edgeSymbol: ['circle', 'arrow'],
					edgeSymbolSize: [4, 10],
					edgeLabel: {
						normal: {
							textStyle: {
								fontSize: 20
							}
						}
					},
					data: "",
					// links: [],
					links: [{
						source: 0,
						target: 1,
						symbolSize: [5, 20],
						label: {
							normal: {
								show: true
							}
						},
						lineStyle: {
							normal: {
								width: 5,
								curveness: 0.2
							}
						}
					}, {
						source: '节点2',
						target: '节点1',
						label: {
							normal: {
								show: true
							}
						},
						lineStyle: {
							normal: { curveness: 0.2 }
						}
					}, {
						source: '节点1',
						target: '节点3'
					}, {
						source: '节点2',
						target: '节点3'
					}, {
						source: '节点2',
						target: '节点4'
					}, {
						source: '节点1',
						target: '节点4'
					}],
					lineStyle: {
						normal: {
							opacity: 0.9,
							width: 2,
							curveness: 0
						}
					}
				}
			]
		};

		option.series[0].data = [{
						name: '节点1',
						x: 300,
						y: 300
					}, {
						name: '节点2',
						x: 800,
						y: 300
					}, {
						name: '节点3',
						x: 550,
						y: 100
					}, {
						name: '节点4',
						x: 550,
						y: 500
					}];

		myChart.setOption(option);

	}
	
	render() {
		return (
			<div className="contentBox">
				<iframe title="This is a unique title" height="1000px" width="1900px" src="test3" frameBorder="0" ></iframe>
				<h1>{this.state.title}</h1>
				<div className = "myEbox"></div>
			</div>
		);
	}
}
export default Test5;