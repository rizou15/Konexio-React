import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Add extends Component {
    constructor() {
        super();

        this.updateItemName = this.updateItemName.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        


        this.state = {
            itemName: '',
            price: 1
        }
    }

    updateItemName(evt) {
        this.setState({
            itemName: evt.target.value
        })


        //let newItemName = this.state.itemName
        //console.log(newItemName)
    }



   

    updatePrice(val) {

        this.setState({
            price: val

        })

    }
    submitForm() {
        this.props.addItem(this.state.itemName,this.state.price)
        //console.log(this.state.itemName)
        //console.log(this.state.price)

    }



    render() {

        return (

            <div>
                <input type="text" onChange={this.updateItemName}></input>
                <button class="btn btn-outline-secondary" type="button" onClick={this.submitForm}>Add</button>
                <RCSlider max={10}
                          min={1}
                          onchange={this.updatePrice}>                  
                </RCSlider>
                {this.state.price}
            </div>


        );
    }

}

export default Add;