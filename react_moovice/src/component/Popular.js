import React, { Component } from 'react';
import Card from './movie/Card';

class Popular extends Component {
  constructor() {
    super();
   

    this.state = {
      movies: [],
     
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  

  componentDidMount() {

    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
      .then(res => res.json())
      .then(json => {

        console.log('quest', json)   //  = remontée de données ok

        this.setState({
          movies: json.results

        })
      })
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <Card name={movie} ></Card>

        ))}
        </div>
    
        
        

       
      );
  }
}


export default Popular;