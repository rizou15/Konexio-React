import React, { Component } from 'react';
import specimen from '../../img/specimen.jpg'


class Card extends Component {

    state = {
        source: specimen
    }

    componentDidMount() {
        const url = 'http://konexio.codiscovery.co/bakery/api/?q=croissant'
        fetch(url)
            .then(res => res.json())
            .then(json => {

              //  console.log('response', json);

                if (json.true) {
                    this.setState({
                        source: json.source
                    }

                    )
                }
            });
    }
    render() {

        return (
            <div>
                <button onClick={()=> this.props.onClickFn(this.props.itemName,this.props.price)}>
                    <img src={this.state.source} alt=""></img>
                </button>
            </div>
        )
    }

}
export default Card;