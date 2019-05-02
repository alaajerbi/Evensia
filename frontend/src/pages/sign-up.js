import React, { Component } from 'react';
import '../assets/css/login.css'
import axios from "axios";
import {
  Button,
  Form,
  FormControl,
  FormGroup
} from "react-bootstrap";

const api = "http://localhost:3009/users";

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:'',
  fullName:'',
  confirmPassword:'',
  }
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSignup = this.handleSignup.bind(this);
 }

 handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]: value
  });
}

handleSignup() {
  const newUser = {
    email: this.state.email,
    password: this.state.password,
    fullName: this.state.fullName,
  };
  const reqHeaders = {
    'headers': {
        'Access-Control-Allow-Headers': 'token',
    }
}
  axios.post(api, newUser, reqHeaders).then(res => {
    console.log(res);
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
    return (
      <div>
          <span>
            <Form>
            <FormGroup>
            <Form.Label>Full Name:</Form.Label>
                <FormControl
                  size="md"
                  type="fullName"
                  value={this.state.fullName}
                  onChange={this.handleInputChange}
                  name="fullName"
                  placeholder="Full Name"
                />
              </FormGroup>
            <FormGroup></FormGroup>  
            <FormGroup>
            <Form.Label>Email:</Form.Label>
                <FormControl
                  size="md"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email"
                />
              </FormGroup>
            <FormGroup>
            <Form.Label>Password:</Form.Label>
                <FormControl
                  size="md"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="password"
                />
              </FormGroup>

              <FormGroup>
            <Form.Label>Confirm Password:</Form.Label>
                <FormControl
                  size="md"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                  name="confirmPassword"
                  placeholder="password"
                />
              </FormGroup>
            <Button variant="primary" onClick={this.handleLogin}>
              Login
            </Button>
            </Form>
        </span>
        
        </div>
            
    );
  }
}
const style = {
 margin: 15,
};
export default Login;
