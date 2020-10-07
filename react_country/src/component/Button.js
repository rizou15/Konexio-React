import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.buttonClick=this.buttonClick.bind(this);
    }

    buttonClick() {
        //console.log('click here')= remontée de données ok
        this.props.onClick()
    }

    render() {

        return (

            <button onClick={this.buttonClick} className="btn btn-primary">{this.props.children}</button>

        )
    }
}
export default Button;