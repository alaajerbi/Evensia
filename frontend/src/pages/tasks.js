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
  FormGroup,
  DropdownButton,
  Dropdown
} from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import "../assets/css/Guests.css";
import axios from "axios";

const api = "http://localhost:3009/tasks";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleCompletedChange = this.handleCompletedChange.bind(this);

    this.state = {
      tasks: [],
      completedTasks: [],
      show: false,
      description: "",
      time: "",
      done: false,
      eventId: ""
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
        let tasks = []
        let completedTasks = []
        response.data.forEach(element => {
          if(element.eventId === this.state.eventId){
            if(element.done === true) completedTasks.push(element)
            else tasks.push(element);
          }
        });

        this.setState({ tasks: tasks , completedTasks: completedTasks });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSave() {
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

  handleCompletedChange(taskId) {
    let newTasks=this.state.tasks;
    newTasks.forEach(element => {
      if(element._id === taskId){
        element.done = true
        const newTask2 = {
          description: element.description,
          time: element.time,
          eventId: element.eventId,
          done: element.done
        };
        axios.put(api+'/'+taskId, newTask2).then(res => {
          console.log(res.data);
          this.fetchData()
        });
      }
      

    });
    this.setState({
      tasks : newTasks
    });
  }

  handleDelete(taskId) {
    axios.delete(api+'/'+taskId).then(res => {
      console.log(res.data);
      this.fetchData();
    });
  }

  componentDidMount() {
    const { eventId } = this.props.match.params;
    this.setState({
      eventId: eventId
    })
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
                <td>{this.state.tasks.indexOf(task)}</td>
                <td>{task.description}</td>
                <td>{task.time}</td>
                <td>
                  <Button onClick={() => this.handleCompletedChange(task._id)}>Mark as Completed</Button>
                </td>
                <td>
                  <DropdownButton id="dropdown-basic-button" title={
        <span><i className="fa fa-user fa-fw"></i> </span>
      }>
  <Dropdown.Item onClick= {() => this.handleDelete(task._id)}>Delete</Dropdown.Item>
</DropdownButton>
                  </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Row className="mt-5 mb-3">
          <Col lg={8} md={8} sm={8}>
            <h3>Completed Tasks</h3>
          </Col>
        </Row>

        <Table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Description</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.completedTasks.map(task => (
              <tr>
                <td>{this.state.completedTasks.indexOf(task)}</td>
                <td>{task.description}</td>
                <td>{task.time}</td>
                <td>
                  <DropdownButton id="dropdown-basic-button" title={
        <span><i className="fa fa-user fa-fw"></i> </span>
      }>
  <Dropdown.Item onClick= {() => this.handleDelete(task._id)}>Delete</Dropdown.Item>
</DropdownButton>
                  </td>
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
