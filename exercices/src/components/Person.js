import React, { Component } from 'react';
import Icon from '../components/core/Icon';

class Person extends Component {

    render() {
        return (
            <div className="box col-md-2 col-6" style={{ fontSize: 100, color: 'black' }}>
                <Icon name='directions_walk' />
                
                <p>{this.props.steps}</p>

            </div>
        );

    }

}
export default Person;

