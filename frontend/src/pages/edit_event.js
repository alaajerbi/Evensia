import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import EventForm from "../components/EventForm";
import { Alert, AlertLink, Container } from "react-bootstrap";
import AuthPage from "../components/AuthPage";
import AwesomeNavbar from '../components/AwesomeNavbar';


const api = "http://localhost:3009/events/";

class EditEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null,
      loading: true,
      status: null
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const { eventId } = this.props.match.params;

    axios
      .get(api + eventId)
      .then(res => {
        const event = res.data;
        const date = new Date(event.date);
        event.date = date
          .toISOString()
          .split("T")[0]
          .split("-")
          .reverse()
          .join("/");
        this.setState({
          event,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  handleEdit(event) {
    this.setState({
      loading: true
    });
    let eventId = this.state.event._id;
    console.log(eventId);
    let { name, description, date, location, designColor } = event;
    console.log(name);

    axios
      .put(api + eventId, {
        name,
        description,
        date,
        location,
        designColor
      })
      .then(res => {
        this.setState({
          loading: false,
          status: "success"
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          status: "failed"
        });
      });
  }

  render() {
    const { event, loading, status } = this.state;
    let content;
    if (loading) {
      content = <p>Loading...</p>;
    } else {
      if (status === "success") {
        content = <Alert variant="success">Event successfully updated! <Link to='/events'>Go back</Link></Alert>
      } else if (status === "failed") {
        content = <Alert variant="danger">Update failed!</Alert>
      } else {
        content = (
          <EventForm
            name={event.name}
            description={event.description}
            date={event.date}
            location={event.location}
            designColor={event.designColor}
            submitBtn="Edit event"
            onSave={this.handleEdit}
          />
        );
      }
    }
    return(<AuthPage><AwesomeNavbar/><Container>{content}</Container></AuthPage>)
  }
}

export default EditEvent;
