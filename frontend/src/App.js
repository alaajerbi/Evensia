import React, { Component } from "react";
import "./App.css";
import {
  Dashboard,
  LandingPage,
  Guests,
  Events,
  Login,
  Event,
  Tasks,
  EditEvent,
  AddEvent
} from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        {/*<Sidebarr/>*/}
        <Router>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
