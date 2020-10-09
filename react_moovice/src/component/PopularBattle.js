import React, { Component } from 'react';
import Card from './movie/Card';

class PopularBattle extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentPage: 1,
     // otherPage: 2 ?

    };

    this.movieChoice = this.movieChoice.bind(this);
  }

  movieChoice() {
    this.setState({
      currentPage: this.state.currentPage + 1

    });

  }

  componentDidMount() {

    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
      .then(res => res.json())
      .then(json => {

        console.log('quest', json)   //  = remontée de données ok

        this.setState({
          movies: json.results
        });

      })
  }

    render(){
      return (
        <div>
          <Card results={this.state.currentPage}></Card> {/* revoir méthode}
          {this.movieChoice}  
        </div>
      );

    }
  }

export default PopularBattle; 