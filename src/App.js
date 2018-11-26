import React, { Component } from 'react';
import './App.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Blackjack from './components/Blackjack'; 
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/game" component={Blackjack}/>
            </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
