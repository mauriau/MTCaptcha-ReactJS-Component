import React from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import axios from 'axios';
import "./styles.css";
import MTCaptcha from './components/MTCaptcha';
require('dotenv').config();


class App extends React.Component {  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const params = {
      'mtcaptcha-verifiedtoken': data.get('mtcaptcha-verifiedtoken'),
      'username': data.get('username'),
      'password': data.get('password')
    };    
    axios.post('http://localhost:3000/validate-token/', params)
    .then(function (response) {
      console.log(response.data.tokeninfo);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              placeholder="Enter user name" 
              value='username'
              type="username"
              name='username'
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              name='password'
              value='password'
            />
          </FormGroup>
          
          <MTCaptcha />
          <Button block bsSize="large" type="submit">
            Login
          </Button>
        </form>
      </div>
    );      
  }
}

export default App;
