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
            <Route path="/guests" component={Guests} />
            <Route path="/tasks" component={Tasks} />
            <Route exact path="/event/:eventId/edit" component={EditEvent} />
            <Route exact path="/event/:eventId" component={Event} />
            <Route exact path="/events" component={Events} />
            <Route path="/events/create" component={AddEvent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
