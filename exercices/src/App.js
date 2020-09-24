import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Icon from './components/core/Icon';
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
    
      
    
  }

  render() {
    
    return (
      <div className='App'>
        <Person steps={MIN_STEP}></Person>
        <HeartRate heart={MIN_HEART}></HeartRate>
        <Icon />
      </div>
    );
  }
}
export default App;


