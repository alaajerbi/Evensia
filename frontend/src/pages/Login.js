import React, { Component } from "react";
import "../assets/css/login.css";
import axios from "axios";
import {
  Container,
  Alert,
  Button,
  Form,
  FormControl,
  FormGroup,
  Row,
  Col
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
const api = "http://localhost:3009/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      error: null,
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleLogin() {
    const newUser = {
      email: this.state.email,
      password: this.state.password
    };
    const reqHeaders = {
      headers: {
        "Access-Control-Allow-Headers": "token"
      }
    };
    axios.post(api, newUser, reqHeaders).then(res => {
      if (res.data.status === "success") {
        localStorage.setItem("token", res.headers.token);
        this.setState({
          redirect: true
        });
      } else {
        this.setState({
          error: res.data.error
        });
      }
    });

    // axios({
    //   data : newUser,
    //   method: 'post',
    //   url: api,
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Expose-Headers': 'Access-Token, Uid'
    //       }
    // }).then(res => {
    //   console.log(res.headers);
    // });
  }
  render() {
    let { redirect, error } = this.state;
    if (redirect) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <Container style={styles.container}>
          <h4 className="mb-3">Login</h4>
          {error && <Alert style={{width: 350}} variant="danger">{error}</Alert>}
          <Form style={styles.formContainer}>
            <FormGroup as={Row}>
              <Form.Label column sm="4">
                Email:
              </Form.Label>
              <Col sm="8">
                <FormControl
                  size="md"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email"
                />
              </Col>
            </FormGroup>
            <FormGroup as={Row}>
              <Form.Label column sm="4">
                Password:
              </Form.Label>
              <Col sm="8">
                <FormControl
                  size="md"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="password"
                />
              </Col>
            </FormGroup>
            <div style={styles.btnContainer}>
              <Button
                style={{ padding: "10px 20px" }}
                variant="primary"
                onClick={this.handleLogin}
              >
                Login
              </Button>
            </div>
          </Form>
        </Container>
      );
    }
  }
}
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  formContainer: {
    maxWidth: 400,
    padding: 15
  },
  btnContainer: {
    textAlign: "center"
  }
};
export default Login;
