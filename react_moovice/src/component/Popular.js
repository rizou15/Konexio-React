import React, { Component } from 'react';
import placeholder from '../img/placeholder.png';
import Card from './movie/Card';

class Popular extends Component {

  state = {
    movies: [],

  }


  componentDidMount() {

    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
      .then(res => res.json())
      .then(json => {

        console.log('quest', json)   //  = remontée de données ok

        const movies = json.results.map((e) => {
          // console.log('movie quest',e)
          //console.log('result quest',e) = mêmes infos

          return {
            title: e.title,
            resume: e.overview,
            poster: `https://image.tmdb.org/t/p/w300/${e.poster_path}`

          }

        })
        this.setState({
          movies
          // console.log(movies); = les 20 films s'affichent correctement
        })

  

  render() {
    const movies{ 

    } = this.state
  
    //console.log(this.state); // = affichage toujours ok
    return (

      <div>
        {movies.map((e, i) => {
          return 
          <Card key={i} title={e.title} resume={e.resume} poster={e.poster}></Card>

        })}

      </div>


    );

  }
}

export default Popular;