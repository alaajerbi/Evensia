import React, { Component } from 'react';
import '../assets/css/login.css'
import axios from "axios";
import {
  Button,
  Form,
  FormControl,
  FormGroup
} from "react-bootstrap";

const api = "http://localhost:3009/auth";

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  }
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
    password: this.state.password,
  };
  const reqHeaders = {
    'headers': {
        'Access-Control-Allow-Headers': 'token',
    }
}
  axios.post(api, newUser, reqHeaders).then(res => {
    localStorage.setItem("token",res.headers.token)
    console.log(res.headers.token);
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
