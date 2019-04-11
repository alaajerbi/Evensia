import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Sidebarr extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    console.log(this.props);
                    //this.props.history.push("/guests")
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="guests">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Guests
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="tasks">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Tasks
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="ressources">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Ressources
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contacts">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Contacts
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export default Sidebarr;
