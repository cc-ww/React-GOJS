import React from 'react';

import './test.css';
// import jquery from 'jquery';

// const $ = jquery;
// import { DatePicker, Button, Icon, Spin} from 'antd';
// import stickybits from 'stickybits'

class Test8 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "tricks",
			loading: true,
			value: "123",
			value2: "lalal",
			isFullScreen: false
		}
		this.change = this.change.bind(this);
		this.changeLo = this.changeLo.bind(this);
		this.click = this.click.bind(this);
		this.ccClick = this.ccClick.bind(this);
	}

	componentDidMount(){
		
	}

	change(event){
		var newValue = event.target.value;
		this.setState({value: newValue});
	}
	changeLo(e){
		console.log(e.target.value);
	}


	click(){
		console.log(this.state.value)
		this.setState({
			value2:this.state.value
		})
	}

	ccClick(){
		console.log(123)
		this.watchFullScreen();
	}

	fullScreen = () => {
		console.log('fullscreen:',this.state.isFullScreen);
		if (!this.state.isFullScreen) {
		  this.requestFullScreen();
		} else {
		  this.exitFullscreen();
		}
	};

	//进入全屏
	requestFullScreen = () => {
		console.log('requestFullScreen')
		var de = document.documentElement;
		if (de.requestFullscreen) {
			de.requestFullscreen();
		} else if (de.mozRequestFullScreen) {
			de.mozRequestFullScreen();
		} else if (de.webkitRequestFullScreen) {
			de.webkitRequestFullScreen();
		}
	};

	//退出全屏
	exitFullscreen = () => {
		console.log('exitFullscreen')
		var de = document;
		if (de.exitFullscreen) {
		  de.exitFullscreen();
		} else if (de.mozCancelFullScreen) {
		  de.mozCancelFullScreen();
		} else if (de.webkitCancelFullScreen) {
		  de.webkitCancelFullScreen();
		}
	};

	//监听fullscreenchange事件
	watchFullScreen = () => {
		console.log(document.webkitIsFullScreen)
		const _self = this;
		document.addEventListener(
			"fullscreenchange",
			function() {
				_self.setState({
					isFullScreen: document.fullscreen
				});
				console.log("fullscreenchange")
			},
			false
		);

		document.addEventListener(
			"mozfullscreenchange",
			function() {
				_self.setState({
				  isFullScreen: document.mozFullScreen
				});
				console.log("mozfullscreenchange")
			},
			false
		);

		document.addEventListener(
			"webkitfullscreenchange",
			function() {
				_self.setState({
					isFullScreen: document.webkitIsFullScreen
				});
				console.log("webkitfullscreenchange")
			},
			false
		);

		document.addEventListener("msfullscreenchange", function(e) {
			console.log("msfullscreenchange", e);
		});
	};


	render() {
		return (
			<div className="contentBox">
				<h3>{ this.state.title }</h3>
				<div className = "Box">
					<textarea className="" onChange={ this.change }    value={ this.state.value } ></textarea><button onClick={this.click}>复制</button>
					<input className="kl"  value = {this.state.value2} onChange = {this.changeLo}></input>
				</div>
				<div onClick = {this.ccClick}>点击全屏</div>
				<div style={{position:"relative"}}>
					<div style = {{ 'height': '1000px',width:'900px',background:'#03bbcc',overflow:"scroll",}}>
						<div  style = {{ 'height': '2000px',width:'800px',background:'#ccc'}}>
							<div style={{'width':"800px",background:"#ccc",position:"sticky",top:"2%"}}>
								<div style = {{ 'height': '100px',width:'100px',background:'yellow', }}>I am fixed document!</div>
							</div>
							<div style = {{ "marginTop":"100px"}}>11111</div>
							<div style = {{ 'height': '300px',width:'800px',background:'red' }} >11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>
							<div>11111</div>

						</div>
					</div>
				</div>
				
			</div>
		);
	}
}
export default Test8;