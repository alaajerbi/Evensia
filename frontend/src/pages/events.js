import React, { Component } from "react";
import { Row, Col, CardColumns, Button } from "react-bootstrap";
import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { Alert, AlertLink, Container } from "react-bootstrap";
import axios from "axios";
import AuthPage from "../components/AuthPage";

const api = "http://localhost:3009/events";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };

    this.fetchData = this.fetchData.bind(this);
    this.handleEventDelete = this.handleEventDelete.bind(this);
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

  handleEventDelete(eventId) {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const api = "http://localhost:3009/events/" + eventId;
      axios
        .delete(api)
        .then(res => {
          this.fetchData();
        })
        .catch(err => {
          console.log(err);
          alert("Error occured while deleting!");
        });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let { events } = this.state;
    return (
      <AuthPage>
        <Container className="mt-5">
          {(events.length === 0 && (
            <Alert variant="warning">
              You've got no events right now. Start by{" "}
              <Link to="/events/create">
                <Alert.Link href="/events/create">
                  creating a new event.
                </Alert.Link>
              </Link>
            </Alert>
          )) || <EventList events={events} onDelete={this.handleEventDelete} />}
        </Container>
      </AuthPage>
    );
  }
}

function EventList(props) {
  let { events } = props;
  return (
    <div>
      <Row className="mt-5 mb-3">
        <Col lg={8} md={8} sm={8}>
          <h3>Your events</h3>
        </Col>
        <Col lg={4} md={4} sm={4}>
          <Link to="/events/create" style={{ textDecoration: "none" }}>
            <Button
              variant="danger"
              className="float-right"
              style={{ marginRight: "20px" }}
            >
              Add Event
            </Button>
          </Link>
        </Col>
      </Row>
      <CardColumns className="mt-2">
        {events.map((event, id) => {
          return (
            <EventCard key={id} event={event} onEventDelete={props.onDelete} />
          );
        })}
      </CardColumns>
    </div>
  );
}
export default Events;
