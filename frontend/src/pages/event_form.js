import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button
} from "react-bootstrap";
import Event from "../components/EventCard";
import { CirclePicker } from "react-color";
import { Alert, AlertLink, Container } from "react-bootstrap";
import axios from "axios";
import {Link} from 'react-router-dom';

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      status: null,
      error: null,
      name: "",
      description: "",
      date: "",
      designColor: "#f44336",
      location: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.goBackToForm = this.goBackToForm.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleColorChange(color) {
    const hex = color.hex;
    this.setState({
      designColor: hex
    });
  }

  handleSave(e) {
    this.setState(
      {
        loading: true
      },
      () => {
        const api = "http://localhost:3009/events";

        let { name, description, date, location, designColor } = this.state;
        const event = {
          name,
          description,
          date,
          location,
          designColor
        };

        axios
          .post(api, event)
          .then(res => {
            this.setState({
              loading: false,
              status: res.data.status,
              error: res.data.error
            });
          })
          .catch(err => {
            this.setState({
              loading: false,
              status: "error"
            });
          });
      }
    );
  }

  goBackToForm() {
    this.setState({
      loading: false,
      status: null,
      error: null
    });
  }

  render() {
    let { loading, status, error } = this.state;
    return (
      <Container className="mt-5 mb-5">
        {(loading && <h4>Creating your event...Please wait</h4>) ||
          (status === "success" &&(
            <Alert variant="success">
              Event successfully created! <br />
              <Link to='/events' style={{ textDecoration: "none" }}>Go to your events</Link>
            </Alert>
          )) ||
          (status === "error" && (
            <Alert variant="danger">
              ERROR: {error} <br />
              <Alert.Link onClick={this.goBackToForm}>
                Go back and try again
              </Alert.Link>
            </Alert>
          )) || (
            <div>
              <h4>Create a new event</h4>
              <Form className="mt-5">
                <FormGroup>
                  <Form.Label>Event name:</Form.Label>
                  <FormControl
                    size="lg"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="E.g: Aeroday"
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label>Event description:</Form.Label>
                  <FormControl
                    as="textarea"
                    rows="3"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label>Event date</Form.Label>
                  <Form.Control
                    name="date"
                    type="text"
                    value={this.state.date}
                    placeholder="mm/dd/yyyy"
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Form.Label>Location:</Form.Label>
                  <FormControl
                    size="lg"
                    type="text"
                    value={this.state.location}
                    onChange={this.handleInputChange}
                    name="location"
                    placeholder="E.g: INSAT"
                  />
                </FormGroup>
                <FormGroup className="mb-5">
                  <Form.Label>Event color:</Form.Label>
                  <CirclePicker
                    color={this.state.designColor}
                    onChangeComplete={this.handleColorChange}
                  />
                </FormGroup>
                <Button variant="primary" onClick={this.handleSave}>
                  Create Event
                </Button>
              </Form>
            </div>
          )}
      </Container>
    );
  }
}

export default EventForm;
