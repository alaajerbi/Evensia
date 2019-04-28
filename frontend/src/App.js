import React, { Component } from 'react';
import './App.css';
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing";
import { BrowserRouter, Route} from "react-router-dom"
import Guests from "./pages/guests";
import Events from "./pages/events";

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
