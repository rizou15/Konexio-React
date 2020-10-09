import React, { Component } from 'react';
import Icon from '../components/core/Icon'
import Slider from '../components/core/Slider';

class HeartRate extends Component {

    render() {

        return (

            <div className="box  col-md-2  col-6" >
                <Icon  name='favorite' color='red'></Icon>
                <p>{this.props.heart} BPM </p>

                <Slider max={this.props.max}
                         min={this.props.min}
                        onChange={this.props.onChange}
                         value={this.props.heart}>
                </Slider>
            </div>

        );

    }

}
export default HeartRate;