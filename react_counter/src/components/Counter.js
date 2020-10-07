import React from 'react';

class Counter extends React.Component {

    render() {

        return (

            <div>
                <h2>{this.props.count}</h2>
                <button onClick={this.props.incrementFn}>+</button>
                <button onClick={this.props.decrementFn}>-</button> 
           
            </div>

        );

    }

}
export default Counter;