import React, { Component } from "react";
import EventForm from "../components/EventForm";
import { Alert, AlertLink, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthPage from "../components/AuthPage";
import AwesomeNavbar from '../components/AwesomeNavbar';


class AddEvent extends Component {
  constructor(props) {
    super(props);

    let userId = localStorage.getItem('userId');

    this.state = {
      userId,
      loading: false,
      status: null,
      error: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBackToForm = this.goBackToForm.bind(this);
  }


  handleSubmit(event) {
    this.setState(
      {
        loading: true
      },
      () => {
        const api = "http://localhost:3009/events";

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
              status: "error",
              error: err
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
      <AuthPage>
        
        <AwesomeNavbar/>
        <Container className="mt-5 mb-5">
          {(loading && <h4>Creating your event...Please wait</h4>) ||
            (status === "success" && (
              <Alert variant="success">
                Event successfully created! <br />
                <Link to="/events" style={{ textDecoration: "none" }}>
                  Go to your events
                </Link>
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
                <EventForm
                  userId={this.state.userId}
                  submitBtn="Create event"
                  onSave={this.handleSubmit}
                />
              </div>
            )}
            
        </Container>

      </AuthPage>
    );
  }
}

export default AddEvent;
