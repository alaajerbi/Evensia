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

class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      name: "",
      description: "",
      date: "",
      designColor: "#000000"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
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
    this.setState({
      loading: true
    },() => {
        const api = 'http://localhost:3009/events';

        let { name, description, date, designColor } = this.state;
        const event = {
            name,
            description,
            date,
            designColor
        };

        axios.post(api, event)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {console.log(err)})
    });
  }

  render() {
    let { loading } = this.state;
    return (
      <Container className="mt-5">
        {(loading && <h4>Creating your event...Please wait</h4>) || (
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
                <Form.Label>Event color:</Form.Label>
                <CirclePicker onChange={this.handleColorChange} />
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
