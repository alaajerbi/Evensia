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
import axios from "axios";

const api = "http://localhost:3009/tasks";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      tasks: [],
      show: false,
      description: "",
      time: "",
      done: false,
      eventId: "5cc6d76bd22e0834096bfa1b"
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  fetchData() {
    axios
      .get(api)
      .then(response => {
        this.setState({ tasks: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSave() {
    alert(this.state.done);
    const newTask = {
      description: this.state.description,
      time: this.state.time,
      eventId: this.state.eventId
    };
    axios.post(api, newTask).then(res => {
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
    console.log(this.state.guests);
    return (
      <Container>
        <Row className="mt-5 mb-3">
          <Col lg={8} md={8} sm={8}>
            <h3>Tasks</h3>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <Button
              variant="danger"
              className="float-right"
              style={{ marginRight: "20px" }}
              onClick={this.handleShow}
            >
              Add Task
            </Button>
          </Col>
        </Row>

        <Table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Description</th>
              <th>Time</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task => (
              <tr>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td>{task.time}</td>
                {task.done ? (
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
            <Modal.Title>Add a Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <Form.Label>Description of task:</Form.Label>
                <FormControl
                  size="lg"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  placeholder="E.g: buy food"
                />
              </FormGroup>
              <FormGroup>
                <Form.Label>Time :</Form.Label>
                <FormControl
                  size="lg"
                  type="text"
                  value={this.state.time}
                  onChange={this.handleInputChange}
                  name="time"
                  placeholder="E.g: 28/04/2019"
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
export default Tasks;
