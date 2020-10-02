import React, { Component } from 'react';


class List extends Component {

    render() {
        const items = this.props.items.map(function(itemList){
            return <li> {itemList} </li>;
          });

        return (
            < div className="List" >
                <h1>List</h1>
            </div >

        );
    }

}

export default List;