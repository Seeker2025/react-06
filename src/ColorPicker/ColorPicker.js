import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
    state ={
        activeOptionIdx: 0,
    }

    setActiveIdx = index =>{
        this.setState({ activeOptionIdx: index })
    };

    makeOptionClassName = index =>{
        const optionClasses = ['ColorPicker__option']

        if(index === this.state.activeOptionIdx){
            optionClasses.push('ColorPicker__option--active')
        }

        return optionClasses.join(' ');
    }

    render(){
        const{ activeOptionIdx } = this.state; 
        const { options } = this.props;

        const { label } = options[activeOptionIdx]
        return (
                <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбрали цвет: {label}</p>
        <div className="ColorPicker__box">   
            {this.props.options.map(({ label, color}, index)=>{
            const optionClassName = this.makeOptionClassName(index);   

                return (
                <button
             
                    key={label}
                    className={optionClassName}
                    style={{ backgroundColor: color }}
                    onClick={()=> this.setActiveIdx(index)}
                    >
                           
                </button>
                )
            })}
        </div>
    </div>

        )
    }

}

export { ColorPicker };
