import React, { Component } from 'react';

class Card extends Component {
            constructor(){
                super();

                this.state={
                    img: '/placeholder.png'
                }
            }

            componentDidMount(){

                let picture= `https://image.tmdb.org/t/p/w300/${this.props.name.poster_path}`;
            

            this.setState({
                img: picture
                
                
            })

        }
    render(){
        return(
            <div className='d-inline-flex text-center'>
                <img style={{ width: '80 rem'}} src={this.props.poster} alt="/"/>
                <p>{this.props.title}</p>
                <p>{this.props.resume}</p>
            </div>


        )
    }

}
export default Card;
    
    

