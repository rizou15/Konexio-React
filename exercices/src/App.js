import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Icon from './components/core/Icon';
import Temperature from './components/Temperature';
import Water from './components/Water';
import './App.css';
import './css/styles.css';
import './css/bootstrap.min.css';



const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEP = 0;
const MAX_STEP = 50000;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,

    }
    this.onHeartChange = this.onHeartChange.bind(this)
    this.onStepsChange = this.onStepsChange.bind(this)
    this.onTemperatureChange = this.onTemperatureChange.bind(this)
  }

  onHeartChange(val) {
    let newWater = this.calculateWater(this.state)

    this.setState({
      heart: val,
      water: newWater

    })
  }

  onStepsChange(val) {
    let newWater = this.calculateWater(this.state)

    this.setState({
      steps: val,
      water: newWater

    })
  }
  onTemperatureChange(val) {
    let newWater = this.calculateWater(this.state)

    this.setState({
      temperature: val,
      water: newWater

    })

  }

  calculateWater(items){
    //steps:
    //heartRate:
    //temperature:
    let liters = 1.5
  

    if(items.temperature > 20){
    let degree = items.temperature -20
    liters += degree * 0.02
   
    }

    if(items.heart > 120){
      let level = items.heart -120
      liters += level * 0.0008

    }

    if(items.steps > 10000){
      let walk = items.steps -10000
      liters += walk * 0.00002
    }
    return Math.round(liters * 100) / 100
  }

  render() {

    return (
      <div className='container-fluid'>
        <Water water={this.state.water}></Water>  
        <Person 
                   min={MIN_STEP}
                   max={MAX_STEP}
                   onChange={this.onStepsChange}
                   steps={this.state.steps}>
        </Person>
        <HeartRate min={MIN_HEART}
                   max={MAX_HEART}
                   onChange={this.onHeartChange}
                   heart={this.state.heart}>
        </HeartRate>
        <Temperature
                   min={MIN_TEMPERATURE}
                   max={MAX_TEMPERATURE}
                   onChange={this.onTemperatureChange}
                   temperature={this.state.temperature}>
        </Temperature>  
      </div>
    );
  }
}
export default App;


