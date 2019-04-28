import React, { Component } from "react";
import { Row, Col, CardDeck } from "react-bootstrap";
import EventCard from "../components/EventCard";
import { Alert, AlertLink, Container } from "react-bootstrap";
import axios from "axios";

const api = "http://localhost:3009/events";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  fetchData() {
    axios
      .get(api)
      .then(response => {
        console.log(response.data);
        this.setState({ events: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let { events } = this.state;
    return (
      <Container className="mt-5">
        {(events.length === 0 && (
          <Alert variant="warning">
            You've got no events right now. Start by{" "}
            <Alert.Link href="events/create">creating a new event.</Alert.Link>
          </Alert>
        )) || <EventList events={events} />}
      </Container>
    );
  }
}

function EventList(props) {
  let { events } = props;
  return (
    <div>
      <h2>Your events:</h2>
      <CardDeck className='mt-2'>
        {events.map((event, id) => {
          return (
            <EventCard
              key={id}
              name={event.name}
              date={event.date}
              description={event.description}
              color={event.designColor}
            />
          );
        })}
      </CardDeck>
    </div>
  );
}
export default Events;
