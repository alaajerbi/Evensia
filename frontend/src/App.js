import React, { Component } from 'react';
import './App.css';
import {Dashboard} from "./components/Dashboard";
import {LandingPage} from "./components/LandingPage";
import { BrowserRouter, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/dashboard" component={Dashboard}/>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
