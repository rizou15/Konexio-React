import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Discover from './component/Discover';
import DiscoverBattle from './component/DiscoverBattle';
import Popular from './component/Popular';
import PopularBattle from './component/PopularBattle';
import MyList from './component/MyList';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">This week</Link>
              </li>
              <li>
                <Link to="/battle/">This week battle</Link>
              </li>
              <li>
                <Link to="/popular/">Popular</Link>
              </li>
              <li>
                <Link to="/popular-battle/">Popular battle</Link>
              </li>
              <li>
                <Link to="/my-list/">My list</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/battle/" component={DiscoverBattle}/>
            <Route exact path="/popular/" component={Popular}/>
            <Route exact path="/popular-battle/" component={PopularBattle}/>
            <Route exact path="/my-list/" component={MyList}/>
            <Route exact path="/" component={Discover}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
