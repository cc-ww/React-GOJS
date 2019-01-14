import React from 'react';

import './test.css';
import jquery from 'jquery';

const $ = jquery;
// import { DatePicker, Button, Icon, Spin} from 'antd';
// import stickybits from 'stickybits'

class Test6 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"百度地图",
			loading: true
		}
	}

	componentDidMount(){
		
	}
	
	render() {
		return (
			<div className="contentBox">
				<h3>{ this.state.title }</h3>
				<div className = "Box">
					
				</div>
			</div>
		);
	}
}
export default Test6;