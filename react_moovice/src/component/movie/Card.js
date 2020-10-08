import React, { Component } from 'react';

class Card extends Component {
            constructor(){
                super();
            }

    render(){
        return(
            <div>
                <p>{this.props.image}</p>
                <p>{this.props.titre}</p>
                <p>{this.props.description}</p>
            </div>


        )
    }

}
export default Card;
    
    

