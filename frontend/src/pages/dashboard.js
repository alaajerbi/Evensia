import React, { Component } from "react";

import AuthPage from "../components/AuthPage";
import Sidebar from "../components/Sidebar";
import Nav from '../components/Nav';
import Footer from "../components/Footer";

class Dashboard extends Component {
  render() {
    return (
      <AuthPage>
        <div class="wrapper ">
        <Sidebar />   
        <div class="main-panel">
            {/* Navbar */}
            <Nav />
            <div class="content">
              
            </div>
           <Footer />
          </div>
        </div>
      </AuthPage>
    );
  }
}
export default Dashboard;
