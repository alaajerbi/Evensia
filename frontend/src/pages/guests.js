import React, { Component } from "react";
import {
  Table,
  Button,
  Modal,
  Container,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup
} from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import "../assets/css/Guests.css";
import axios from "axios";

const api = "http://localhost:3009/guests";

class Guests extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      guests: [],
      show: false,
      name: "",
      tel: "",
      description: "",
      present: false,
      gender: "Male",
      eventId: "5cb8131de52ed8555cd72a87"
    };
  }

  handleClose() {
    localStorage.removeItem('token')
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  fetchData() {
    axios
      .get(api)
      .then(response => {
        this.setState({ guests: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSave() {
    const newGuest = {
      name: this.state.name,
      tel: this.state.tel,
      description: this.state.description,
      gender: this.state.gender,
      eventId: this.state.eventId,
      present: "" + this.state.present
    };
    axios.post(api, newGuest).then(res => {
      console.log(res.data);
      this.fetchData();
    });
    this.setState({ show: false });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    console.log(localStorage.getItem('token'));
    return (
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={8} md={8} sm={8}>
            <h3>Guests</h3>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <Button
              variant="danger"
              className="float-right"
              style={{ marginRight: "20px" }}
              onClick={this.handleShow}
            >
              Add Guest
            </Button>
          </Col>
        </Row>

        <Table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Description</th>
              <th>Gender</th>
              <th>Presence</th>
            </tr>
          </thead>
          <tbody>
            {this.state.guests.map(guest => (
              <tr>
                <td>{guest.id}</td>
                <td> {guest.name} </td>
                <td> {guest.tel}</td>
                <td>{guest.description}</td>
                <td>{guest.gender}</td>
                {guest.present ? (
                  <td>
                    <h3>
                      {" "}
                      <FaCheck
                        style={{
                          fontSize: 18,
                          display: "block",
                          margin: "0 auto"
                        }}
                      />
                    </h3>
                  </td>
                ) : (
                  <td>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Guest</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <Form.Label>Name of guest:</Form.Label>
                <FormControl
                  size="lg"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="E.g: John Doe"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label>Phone number (8 numbers):</Form.Label>
                <FormControl
                  size="lg"
                  type="text"
                  value={this.state.tel}
                  onChange={this.handleInputChange}
                  name="tel"
                  placeholder="E.g: 55 123 456"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label>Gender</Form.Label>
                <Form.Control name="gender" as="select" value={this.state.gender} onChange={this.handleInputChange}>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </FormGroup>

              <FormGroup>
                <Form.Label>Description:</Form.Label>
                <FormControl
                  as="textarea"
                  rows="3"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                />
              </FormGroup>
              <FormGroup>
                <Form.Check
                  name="present"
                  onChange={this.handleInputChange}
                  checked={this.state.present}
                  type="checkbox"
                  label="Is attending?"
                />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
export default Guests;
