import React from 'react';
// import jquery from 'jquery';
import 'distpicker';
import { Button } from 'antd';

const $ = require('jquery');
const scaleName = {
	f:"华氏度",
	c:"摄氏度"
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

class Temputure extends React.Component{
	constructor(props){
		super(props)
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		// const name = e.target.name;
		this.props.onTestChange(e.target.value);
	}
	render(){
		return(
			<fieldset>
				<legend>please enter a type of {scaleName[this.props.scale]}</legend>
				<input type="text" name={ this.props.scale } value={ this.props.temperature } onChange={this.handleChange}/>
			</fieldset>
		)
	}
}



class Test1 extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			title:"温度转换（状态提升）",
			c:"",
			f:""
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(type,num){
		console.log(type,num)
		let func;
		if(type==="f"){
			func = toCelsius;
			this.setState({
				c:tryConvert(num,func),
				f:num
			})
		}else{
			func = toFahrenheit;
			this.setState({
				f:tryConvert(num,func),
				c:num
			})
		}
	}

	myclick(){
		console.log($('#province1')[0].value,$('#city1')[0].value,$('#district1')[0].value)
	}

	componentDidMount() {
		$('#mykk').distpicker({
			province: '浙江省',
			city: '杭州市',
			district: '西湖区'
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<Temputure scale="c" temperature={this.state.c} onTestChange={this.handleChange.bind(this,"c")}/>
				<Temputure scale="f" temperature={this.state.f} onTestChange={this.handleChange.bind(this,"f")}/>
				<h2>省市联动</h2>
				<form className = "form-inline" style={{ "marginTop":"1rem" }}>
					<div data-toggle="distpicker" id="mykk">
						<div className = "form-group">
							<label className = "sr-only" htmlFor = "province1">Province</label>
							<select className = "form-control" id="province1" onChange = {this.proChange}></select>
						</div>
						<div className = "form-group">
							<label className = "sr-only" htmlFor = "city1">City</label>
							<select className = "form-control" id="city1"></select>
						</div>
						<div className = "form-group">
							<label className = "sr-only" htmlFor = "district1">District</label>
							<select className = "form-control" id="district1"></select>
						</div>
					</div>
					<Button onClick={this.myclick}>提交</Button>
				</form>
			</div>
		);
	}
}
export default Test1;