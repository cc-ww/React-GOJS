import React from 'react';
const scaleName = {
    f:"华氏度",
    c:"摄氏度"
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Temputure extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        // const name = e.target.name;
        this.props.onTestChange(e.target.value);
    }
    render(){
        return(
            <fieldset>
                <legend>please enter a type of {scaleName[this.props.scale]}</legend>
                <input type="text" name={ this.props.scale } value={ this.props.temperature } onChange={this.handleChange}/>
            </fieldset>
        )
    }
}



class Test1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"温度转换（状态提升）",
            c:"",
            f:""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(type,num){
        console.log(type,num)
        let func;
        if(type==="f"){
            func = toCelsius;
            this.setState({
                c:tryConvert(num,func),
                f:num
            })
        }else{
            func = toFahrenheit;
            this.setState({
                f:tryConvert(num,func),
                c:num
            })
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Temputure scale="c" temperature={this.state.c} onTestChange={this.handleChange.bind(this,"c")}/>
                <Temputure scale="f" temperature={this.state.f} onTestChange={this.handleChange.bind(this,"f")}/>
            </div>
        );
    }
}
export default Test1;