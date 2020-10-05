import React, { Component } from 'react';
import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../css/App.css';

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
       this.props.addItem(this.state.itemName)
       this.props.addItem(this.state.price)
        

    }



    render() {

        return (

            <div className="App">
                <input type="text" onChange={this.updateItemName}></input>
                <button class="btn btn-primary" type="button" onClick={this.submitForm}>Add</button>
                <RCSlider
                          min={1}
                          max={10}
                          onChange={this.updatePrice}>{this.state.price}€                
                </RCSlider>    
            </div>

        );
    }

}

export default Add;