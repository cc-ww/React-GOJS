import React from 'react';
// import logo from './logo.svg';
import './App.css';

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
			return <p>水会烧开</p>;
	}
	return <p>水不会烧开</p>;
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
			fColor: 'red',
			nameOne: '',
			placeHolder: 'please write a word!',
			name_2: '',
			isGoing: true,
			temperature: ''
		};

		// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
		this.showClick = this.showClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChange_2 = this.handleChange_2.bind(this);
		this.judgeTemperature = this.judgeTemperature.bind(this);

	}

	handleClick() {
		console.log(this)
		this.setState(prevState => (
		{
			isToggleOn: !prevState.isToggleOn,
		}
		));
	}

	showClick() {
		if (this.state.fColor === "red") {
			this.setState(prevState => ({
				fColor: 'hahaha!'
			}))
		} else {
			this.setState(prevState => ({
				fColor: 'red'
			}))
		}
		this.setState((prevState, props) => {
			console.log(prevState, props)
		})
	}

	handleChange(e) {
		const name = e.target.name;
		this.setState({
			[name]: e.target.value
		},()=>{
				console.log(typeof this.state.temperature)
		})
	}

	handleChange_2(e) {
		console.log(e.target)
		this.setState({
			name_2: e.target.value
		})
	}

	judgeTemperature(){
			if(parseFloat(this.state.temperature)>60){
					console.log("这水有点热！")
			}else{
					console.log("这水有点凉！")
			}
	}
	
	render() {
		return (
			<div>
				<p className={this.state.isToggleOn ? 'yellow' : 'red'} >you are a hobo!</p>
				<button onClick={this.handleClick}>
					{this.state.isToggleOn ? 'chose red!' : 'chose yellow!'}
				</button>
				<br />
				<button onClick={this.showClick.bind(this, this.state.fColor)} className="red">have a good mood!</button>
				<div>
					<input type="text" name="nameOne" value={this.state.nameOne} onChange={this.handleChange} placeholder={this.state.placeHolder} />
				</div>
				<div>{this.state.nameOne}</div>
				<select value={this.state.name_2} name="name_2" onChange={this.handleChange_2} >
					<option>one</option>
					<option>two</option>
					<option>three</option>
					<option>four</option>
				</select>
				<fieldset>
					<legend>水温表</legend>
					<label htmlFor="">水温测试：</label>
					<input type='text' name="temperature" value = { this.state.temperature } onChange={ this.handleChange }/>
					<button onClick={this.judgeTemperature}>测试</button>
					<BoilingVerdict celsius={parseFloat(this.state.temperature)}></BoilingVerdict>
				</fieldset>
			</div>
		);
	}
}


export default Toggle;
