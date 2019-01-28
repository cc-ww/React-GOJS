import React from 'react';
import ReactDOM from 'react-dom';

//css
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

import './index.css';
import './media.css';

//js
import App from './App';
import Test1 from './test1/Test1';
import Test2 from './test2/Test2';
import Test3 from './test3/Test3';
import TestFour from './testFour/test4';
import Test5 from './test5/Test';
import Test6 from './test6/Test';
import Test7 from './test7/Test';
import Test8 from './test8/Test';



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
                        <li><NavLink exact to='testFour' activeClassName="selected"  isActive={this.goActive.bind(this,'/testFour')}>css3</NavLink></li>
                        <li><NavLink exact to='test5' activeClassName="selected"  isActive={this.goActive.bind(this,'/test5')}>echarts</NavLink></li>
                        <li><NavLink exact to='test6' activeClassName="selected"  isActive={this.goActive.bind(this,'/test6')}>百度地图</NavLink></li>
                        <li><NavLink exact to='test7' activeClassName="selected"  isActive={this.goActive.bind(this,'/test7')}>echarts地图</NavLink></li>
                        <li><NavLink exact to='test8' activeClassName="selected"  isActive={this.goActive.bind(this,'/test8')}>tricks</NavLink></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/test1" component = {Test1}/>
                    <Route exact path="/test2" component = {Test2}/>
                    <Route exact path="/test3" component = {Test3}/>
                    <Route exact path="/testFour" component = {TestFour}/>
                    <Route exact path="/test5" component = {Test5}/>
                    <Route exact path="/test6" component = {Test6}/>
                    <Route exact path="/test7" component = {Test7}/>
                    <Route exact path="/test8" component = {Test8}/>
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
