import React from 'react';
import './index.css';
import { Button } from 'antd';
import jquery from 'jquery';

const $ = jquery;

class TestFour extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"TO like Css3",
			myflag:0,
		}
		this.myAnimateClick = this.myAnimateClick.bind(this)
	}

	componentDidMount() {

	}

	myAnimateClick(){
		this.setState({
			myflag: !this.state.myflag
		});
		if(!this.state.myflag){
			$('.ani_item').find("div").removeClass("ani_center")
		}else{
			$('.ani_item').find("div").addClass("ani_center")
		}
		
	}

	render() {
		return (
			<div className="contentBox">
				<div className = "col-sm-12">
					<h1>{this.state.title}</h1>
					<Button type="primary" onClick={ this.myAnimateClick }>动画TOGGLE开关</Button>
					<div className = "myBox2">
						<div className = "ani_item">
							<h1>Sugar!Sugar!</h1>
							<div className = "ani_center ani_center_top"></div>
							<div className = "ani_center ani_center_bottom"></div>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default TestFour;