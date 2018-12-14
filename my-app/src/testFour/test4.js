import React from 'react';
import './index.css';

class TestFour extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"TO like Css3",
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="contentBox">
				<div className = "col-sm-12">
					<h1>{this.state.title}</h1>
					<div className = "myBox">
						<div className = "ani_item">
							<h1>Sugar!Sugar!</h1>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

export default TestFour;