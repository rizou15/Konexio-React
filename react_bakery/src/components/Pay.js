import React,{Component} from 'react';
import Card from './product/Card';

class Pay extends Component {

        state = {
            basket: [],
            total: 0,
            totalVat: 0,
            totalEcotax: 0
        }

        onClickProduct(name,price){

            console.log('click test',name,price)

        }

        renderNewCard(){

            return this.props.items.map((elem, i) =>{ 

             return <Card 
                      itemName={elem.itemName}
                      price={elem.price}
                      onClickFn={this.onClickProduct}>
                    </Card>

            })
        }

    
        
        render(){
            
            return (
            <div>
                <h1>Pay</h1>
                <div>{this.state.total}</div>
                {this.renderNewCard()}
            </div>

            )
        }    
    }            

export default Pay;


 {/*<Card product="croissant"></Card>*/}