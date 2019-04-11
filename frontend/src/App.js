import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route} from "react-router-dom"
import Guests from "./components/Guests";
import Sidebarr from './components/Sidebarr'
import Events from "./components/Events";

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Sidebarr/>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/guests" component={Guests}/>
        <Route path="/events" component={Events}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
