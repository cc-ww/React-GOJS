import React from 'react';

import './test.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/todo'
import App from './components/App'

class Test9 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "redux",
		}
	
	}

	componentDidMount(){
		
	}

	render() {
		return (
			<Provider>
                <App />
            </Provider>
		);
	}
}
export default Test9;