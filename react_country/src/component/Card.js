import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        
    }

     render() {

        return (
            <div>
                <img className='card-img-top' src={this.props.info.flag} style={{width: 10 +'em'}} style={{height: 10 +'em'}}></img>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.capital}</p>
                <p>{this.props.info.flag}</p>
                <p>{this.props.info.population}</p>
                <p>{this.props.info.region}</p>
            </div>

        )
        
    }
}
export default Card;