import React, { Component } from 'react';
import '../assets/css/material-dashboard.css'

var FontAwesome = require('react-fontawesome');
export class Dashboard extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="white"
                 data-image="../assets/img/sidebar-1.jpg">
                <div className="logo">
                    <a href="/" className="simple-text logo-normal">
                        Event Name
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item  ">
                            <a className="nav-link" href="/">
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item active ">
                            <a className="nav-link" href="/">
                                <p>Guests</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">
                                <p>Tasks</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">
                                <p>Ressources</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">
                                <p>Contacts</p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}
