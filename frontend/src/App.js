import React, { Component } from 'react';
import './App.css';
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landing";
import { BrowserRouter, Route} from "react-router-dom"
import Guests from "./pages/guests";
import Events from "./pages/events";
import Event from "./pages/event";
import EventForm from './pages/event_form';

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
        <Route exact path="/events" component={Events}/>
        <Route path="/events/create" component={EventForm}/>
        <Route path='/event/:eventId' component={Event} />
      </div>
    </BrowserRouter>
        </div>
    );
  }
}

export default App;
