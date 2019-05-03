import React, { Component } from "react";
import axios from "axios";
import {Container} from "react-bootstrap";
import AuthPage from "../components/AuthPage";
import AwesomeNavbar from "../components/AwesomeNavbar";

class Event extends Component {
  state = {
    event: {}
  };
  componentDidMount() {
    const { eventId } = this.props.match.params;
    console.log("Event id: "+eventId);
    const api = "http://localhost:3009/events/" + eventId;
    axios
      .get(api)
      .then(res => {
        console.log(res.data);
        this.setState({
          event: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let { event } = this.state;
    console.log(event);
    return (
      <AuthPage>
        <AwesomeNavbar />
        <Container>
        (!event && <p>Loading..</p>) || ( 
  <div>

  <h5>Event name: { event.name}</h5>
  <h5>Event date: { event.date}</h5>
  <h5>Event location: {event.location}</h5>
</div>
)
        </Container>
        {

        }
        
      </AuthPage>
    );
  }
}

export default Event;
