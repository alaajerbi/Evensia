import React, { Component } from 'react';
import './App.css';
import { Dashboard, LandingPage, Guests, Events, Login, Event, Tasks, EditEvent, AddEvent } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends Component {

  constructor(props) {
    super(props);
  }

  // requireAuth(nextState, replace, next) {
  //   if (localStorage.getItem('token') === null) {
  //     alert("wsoooolna")
  //     replace({
  //       pathname: "/login",
  //       state: { nextPathname: nextState.location.pathname }
  //     });
  //   }
  //   next();
  // }


  render() {
    return (
      <div>
        {/*<Sidebarr/>*/}
        <BrowserRouter>
          <div>
            {/* <div style={{paddingLeft:"100px"}}> */}

            <Route path="/login" component={Login} />
            <Route path="/" component={(localStorage.getItem('token') === null) ? Login : LandingPage} />
            <Route path="/dashboard" component={(localStorage.getItem('token') === null) ? Login : Dashboard} />
            <Route path="/guests" component={(localStorage.getItem('token') === null) ? Login : Guests} />
            <Route path="/tasks" component={(localStorage.getItem('token') === null) ? Login : Tasks } />
            <Route exact path="/event/:eventId/edit" component={(localStorage.getItem('token') == null) ? Login : EditEvent } />
            <Route exact path="/event/:eventId/guests" component={(localStorage.getItem('token') == null) ? Login : Guests } />
            <Route exact path="/event/:eventId" component={(localStorage.getItem('token') === null) ? Login: Event} />
            <Route exact path="/events" component={(localStorage.getItem('token') === null) ? Login : Events} />
            <Route path="/events/create" component={(localStorage.getItem('token') === null) ?  Login : AddEvent} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
