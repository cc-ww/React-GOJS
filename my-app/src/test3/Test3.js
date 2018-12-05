import React from 'react';
// import stickybits from 'stickybits'

class Test3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title:"I just want to test the css style -- position:sticky"
		}
	}
	render() {
		return (
			<div>
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