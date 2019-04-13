import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FaMailBulk, FaHome, FaUsers, FaTasks, FaBoxes} from "react-icons/fa";

class Sidebarr extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "home"
        }
    }
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                    this.props.history.push('/dashboard')
                }}

            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <FaHome style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="guests">
                        <NavIcon>
                            <FaUsers style={{ fontSize: '1.75em' }} />                        </NavIcon>
                        <NavText>
                            Guests
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="tasks">
                        <NavIcon>
                            <FaTasks style={{ fontSize: '1.75em' }} />                        </NavIcon>
                        <NavText>
                            Tasks
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="ressources">
                        <NavIcon>
                            <FaBoxes style={{ fontSize: '1.75em' }} />                        </NavIcon>
                        <NavText>
                            Ressources
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contacts">
                        <NavIcon>
                            <FaMailBulk style={{ fontSize: '1.75em' }} />                        </NavIcon>
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
