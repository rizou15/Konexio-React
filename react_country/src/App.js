import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './component/Button';
import Card from './component/Card';

class App extends Component {
  constructor() {
    super();
    this.buttonClick = this.buttonClick.bind(this);
    this.buttonSearch = this.buttonSearch.bind(this);
    this.inputChange = this.inputChange.bind(this);

    this.state = {
      name: '',
      capital: '',
      flag: '',
      population: 0,
      region: '',
      search: ''
    }

  }
  componentDidMount() {

    fetch('https://restcountries.eu/rest/v2/name/france')
      .then(res => res.json())
      .then(json => {

        console.log('quest', json)


        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region


        })
      })
  }

  buttonClick(countries) {
    console.log(countries)        //bouton buttonClick ok

    fetch(`https://restcountries.eu/rest/v2/name/${countries}`)
      .then(res => res.json())
      .then(json => {

        console.log('quest', json)   // console.log('click here') = remontée de données ok

        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region

        })
      })
  }

  buttonSearch() {
    fetch(`https://restcountries.eu/rest/v2/name/${this.state.search}`)
      .then(res => res.json())
      .then(json => {

        this.setState({
          name: json[0].name,
          capital: json[0].capital,
          flag: json[0].flag,
          population: json[0].population,
          region: json[0].region


        })

      })

  }

  inputChange(e) {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
      
    })
    
  }

  render() {
    return (
      <div className="App" >
        <input className="text" onChange={this.inputChange}></input>
        <Button onClick={this.buttonSearch}>Search</Button>
       
        <Card info={this.state}></Card>
      </div>

    )

  }

}

  export default App;
