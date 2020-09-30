import React, { Component } from 'react';

class Add extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            price: 1
        }
    }

render() {

    return (
        
        <div className="Add">
          <input type="text" onChange={this.props.updateInput}></input>
        <button onClick= {this.props.submitForm}> Add </button>
        </div>
        
    
    );
}

}

export default Add;