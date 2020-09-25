import React, { Component } from 'react';
import Icon from './core/Icon';
import Slider from '../components/core/Slider';

class Temperature extends Component {

    render() {

        return (
            <div className="box col-md-2 col-6">
                <Icon name='wb_sunny' color='yellow'></Icon>
                <p>{this.props.temperature} °C </p>
                <Slider  max={this.props.max}
                         min={this.props.min}
                        onChange={this.props.onChange}
                        value={this.props.temperature}>
                </Slider>
            </div>
        )
    }
}
    

export default Temperature

