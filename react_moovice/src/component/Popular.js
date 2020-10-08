import React, { Component } from 'react';
import Card from './movie/Card';

class Popular extends Component {
  constructor() {
    super();
    this.filmChoice= this.filmChoice.bind(this);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
      .then(res => res.json())
      .then(json => {

        this.setState({
          image: json[0].image,
          titre: json[0].titre,
          description: json[0].description

        
        });
      })
  }

  filmChoice(movies) {
    console.log(movies)

    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e/${movies}`)
      .then(res => res.json())
      .then(json => {

        console.log('quest', json)   //  = remontée de données ok
      })
  }



  render() {
    return (
      <div className="Popular">
        <Card info={this.filmChoice}>Popular</Card>
      </div>
    )
  }
}

export default Popular;