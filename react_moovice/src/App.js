import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Discover from './component/Discover';
import DiscoverBattle from './component/DiscoverBattle';
import Popular from './component/Popular';
import PopularBattle from './component/PopularBattle';
import MyList from './component/MyList';




class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">This week</Link></li>
                <li><Link to="/battle">This week battle</Link></li>
                <li><Link to="/popular">Popular</Link></li>
                <li><Link to="/popular-battle">Popular battle</Link></li>
                <li><Link to="/my-list">My list</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/" component={Discover}></Route>
              <Route exact path="/battle" component={DiscoverBattle}></Route>
              <Route exact path="/popular" component={Popular}></Route>
              <Route exact path="/popular-battle" component={PopularBattle}></Route>
              <Route exact path="/my-list" component={MyList}></Route>
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
