import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Button extends Component {

    render() {
        const newButton=this.props.isSelected ? "btn btn-primary" : "btn btn-outline-secondary";
        return (
            
                <button 
                type="button" 
                className={newButton} 
                onClick={this.props.clickFn}>{this.props.children}</button>
            
        )

    }
}
export default Button;