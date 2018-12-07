import React from 'react';
import './test3.css';
import { DatePicker, Button, Icon, Spin} from 'antd';
// import stickybits from 'stickybits'

class Test3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"I just want to test the css style -- position:sticky",
			loading: true
		}
		this.onmuclick = this.onmuclick.bind(this);
	}

	componentDidMount() {
		console.log(">>>>>>>>>>>")
		this.onmuclick()
	}

	onmuclick(e){
		this.setState({
	        loading: true
	    });
		setTimeout(() => {
			this.setState({
	          	loading: false
	        });
		},3000)
	}

	render() {
		return (
			<div className="contentBox">
				<Button onClick = {this.onmuclick} >开关(loading)</Button>
				<div className="loadCont">
					{
						this.state.loading
						?<Spin className="myload"></Spin>
						:<span>TO BE OR NOT TO BE, THAT'S A QUESTION.</span>
					}
				</div>
				<div className="timeBox">
					<label>选择时间：</label>
					<div><DatePicker style={{ 'width':'280px' }} /></div>
					<Button type="primary"><Icon type="vertical-left" />Hello world!</Button>
				</div>
				<h1>{this.state.title}</h1>
				<div className="myBox">
					<nav className="nav_box">我是导航栏</nav>
					<div className="sticky-box">
						<h4>内容1</h4>
						<div>
							333
						</div>
					</div>
					<div className="sticky-box">内容2</div>
					<div className="sticky-box">内容3</div>
					<div className="sticky-box">内容4</div>
					<div className="sticky-box">内容5</div>
					<div className="sticky-box">内容6</div>
					<div className="sticky-box">内容7</div>
					<div className="sticky-box">内容8</div>
					<div className="sticky-box">内容9</div>
				</div>
			</div>
		);
	}
}
export default Test3;