import React, { Component } from 'react';
import './App.css';
import {Dashboard,LandingPage,Guests,Events,Login,Event,Tasks,EditEvent,AddEvent} from "./pages";
import { BrowserRouter, Route} from "react-router-dom"

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
        <Route path="/tasks" component={Tasks}/>
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
