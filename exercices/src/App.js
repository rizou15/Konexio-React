import React from 'react';
const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEP = 0;
const MAX_STEP = 50000;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1><p>Bonjour!</p></h1>
        <div className="container-fluid">
          <div><p>Battements de coeur : 80</p>
            <p>Température : -20</p>
            <p>Nombre de pas : 0</p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
