import React, {Component} from 'react';
import {
    Form, 
    FormControl,
    FormGroup,
    FormLabel,
    Button
} from 'react-bootstrap';
import { CirclePicker } from "react-color";
import PropTypes from 'prop-types';



class EventForm extends Component {
    constructor(props) {
        super(props);

        const { name, description, date, designColor, location, userId } = props;
    
        this.state = {
          name,
          description,
          date,
          designColor,
          location,
          userId
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

      handleSave() {
          const { name, description, date, location, designColor, userId } = this.state;
          const event = {
              name,
              description,
              date,
              location,
              designColor,
              userId
          };

          this.props.onSave(event);
      }
    
      render() {
          return (
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
                {this.props.submitBtn}
              </Button>
            </Form>
          );
      }
    
}

EventForm.defaultProps = {
    name: "",
    description: "",
    date: "",
    designColor: "#f44336",
    location: ""
}

EventForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    submitBtn: PropTypes.string.isRequired,
}

export default EventForm;