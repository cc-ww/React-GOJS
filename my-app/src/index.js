import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './media.css';
import App from './App';
import Test1 from './test1/Test1';
import Test2 from './test2/Test2';
import Test3 from './test3/Test3';


import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

class Sendhtml extends React.Component{
    constructor(props){
        super(props);
        this.goActive.bind(this);
    }
    goActive(a,match,location){
        if(a === location.pathname){
            return true;
        }
    }
    render(){
        return (
            <Router>
                <div>
                    <ul>
                        <li><NavLink exact  to='/' activeClassName="yellow" isActive={this.goActive.bind(this,'/')}>Home</NavLink></li>
                        <li><NavLink exact  to='test1' activeClassName="selected" isActive={this.goActive.bind(this,'/test1')}>NO.1</NavLink></li>
                        <li><NavLink exact to='test2' activeClassName="selected" isActive={this.goActive.bind(this,'/test2')}>NO.2</NavLink></li>
                        <li><NavLink exact to='test3' activeClassName="selected"  title = "position:sticky"  isActive={this.goActive.bind(this,'/test3')}>NO.3</NavLink></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/test1" component={Test1}/>
                    <Route exact path="/test2" component={Test2}/>
                    <Route exact path="/test3" component={Test3}/>
                </div>
            </Router>
        )
    }
}



// const BaseRoot = ()=>(
//
// )
ReactDOM.render(<Sendhtml />, document.getElementById('root'));
registerServiceWorker();
