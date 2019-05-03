import React, { Component } from "react";
import {BrowserRouter as Router, Route}
import AuthPage from "../components/AuthPage";
import Sidebar from "../components/Sidebar";
import Nav from '../components/Nav';
import Footer from "../components/Footer";

class Dashboard extends Component {
  render() {
    return (
      <Router>
      <AuthPage>
        <div class="wrapper ">
        <Sidebar />   
        <div class="main-panel">
            {/* Navbar */}
            <Nav />
            <div class="content">
            <Route path="/guests" component={Guests} />
            <Route path="/tasks" component={Tasks} />
            <Route exact path="/event/:eventId/edit" component={EditEvent} />
            <Route exact path="/event/:eventId/guests" component={Guests} />
            <Route exact path="/event/:eventId" component={Event} />
            <Route exact path="/events" component={Events} />
            <Route path="/events/create" component={AddEvent} />
            </div>
           <Footer />
          </div>
        </div>
      </AuthPage>
      </Router>
    );
  }
}
export default Dashboard;
