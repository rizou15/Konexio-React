import React, { Component } from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider';

class Person extends Component {

    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name='directions_walk' color= 'black'></Icon>
                <p>{this.props.steps} steps </p>
                <Slider
                        max={this.props.max}
                         min={this.props.min}
                        onChange={this.props.onChange}
                        value={this.props.steps}>
                </Slider>

            </div>
        );

    }

}
export default Person;

