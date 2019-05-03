import React, { Component } from "react";
import AuthPage from "../components/AuthPage";
import Nav from '../components/Nav';

class Dashboard extends Component {
  render() {
    return (
      <AuthPage>
          <Nav />
        <div>This is the dashboard!!</div>
      </AuthPage>
    );
  }
}
export default Dashboard;
