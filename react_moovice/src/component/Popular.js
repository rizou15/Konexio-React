import React, { Component } from 'react';

class Popular extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    }
  }

  componentDidMount() {

    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e')
      .then(res => res.json())
      .then(json => {

        console.log('quest',json)

      })
    }

  render() {
    return (
      <div>Popular</div>
    );
  }
}
export default Popular;