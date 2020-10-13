import React, { Component } from 'react';

class Card extends Component {

    render(){
            const {
               
                title,
                resume,
                poster

            } = this.props 
           
        return(
            <div>
                <img src={poster} alt=""/>
                <p>{title}</p>
                <p>{resume}</p>
            </div>


        )
    }

}
export default Card;
    
    

