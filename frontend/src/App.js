import React, { Component } from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route} from "react-router-dom"
import Guests from "./components/Guests";
import Events from "./components/Events";

class App extends Component {
  render() {
    return (
        <div>
        {/*<Sidebarr/>*/}
    <BrowserRouter>
      <div style={{paddingLeft:"100px"}}>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/guests" component={Guests}/>
        <Route path="/events" component={Events}/>
      </div>
    </BrowserRouter>
        </div>
    );
  }
}

export default App;
