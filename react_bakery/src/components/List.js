import React, { Component } from 'react';


class List extends Component {

    render() {

        return (
            <div>
                <h1>List</h1>
                <ul>
                    {this.props.items.map((elem, i) => <li key={i}>{elem.itemName}{elem.price}</li>
                        //console.log('elem')
                        //console.log('i')
                    )}
                </ul>
            </div >

        )
    }
}



export default List;