import React from 'react';
import './Counter.css';
import { Controls } from './Controls';

class Counter extends React.Component{
    static defaultProps ={
        initialValue: 0,
    };
    
    state = {
        value: this.props.initialValue,
    };
    handleIncrement =()=>{
        // console.log(this);
        this.setState(prevState =>({
            value: prevState.value + 1,
        }))
    };

    handleDecrement =()=>{
        // console.log(this);
        this.setState(prevState =>({
            value: prevState.value - 1,
        }))
    };

    render(){
        return (
            <div className="Counter">
                <span className="Counter__value">{this.state.value}</span>

                {/* <div className="Counter__controls">
                    <button type="button" onClick={this.handleIncrement}>Увеличить на 1</button>
                    <button type="button" onClick={this.handleDecrement}>Уменьшить на 1</button>
                </div> */}

                <Controls
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                />
                
            </div>
        );
    }
}

export {Counter};