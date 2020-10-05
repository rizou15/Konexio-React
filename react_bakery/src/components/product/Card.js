import React, { Component } from 'react';
import Specimen from '../../img/specimen.jpg'


class Card extends Component {

    state= {
        source: specimen

    }

    componentDidMount(){
        const url= 'http://konexio.codiscovery.co/bakery/api/?q=croissant'
        fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log('result',json);
        
        });
    }

    render() {

        return (
            <div>
                
            </div >

        )
    }
}



export default Card;