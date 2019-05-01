import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import LandingPage from "./pages/landing";
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Guests from "./pages/guests";
import Events from "./pages/events";
import Event from "./pages/event";
import EditEvent from './pages/edit_event';
import AddEvent from './pages/add_event';

class App extends Component {
  render() {
    return (
        <div>
        {/*<Sidebarr/>*/}
    <BrowserRouter>
    <div>
      {/* <div style={{paddingLeft:"100px"}}> */}
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/guests" component={Guests}/>
        <Route exact path="/events" component={Events}/>
        <Route path="/events/create" component={AddEvent}/>
        <Route exact path='/event/:eventId' component={Event} />
        <Route path='/event/:eventId/edit' component={EditEvent} />
      </div>
    </BrowserRouter>
        </div>
    );
  }
}

export default App;
