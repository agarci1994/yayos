import React, { Component } from "react";

import CardRole from "../../../cards/singup/signupRole";
import SignUpInfo from "../../../cards/singup/signupInfo";
import AuthServices from "../../../../services/auth.services";
import "./signup-module.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      name: "",
      surname: "",
      city: "",
      age: "",
      yayo: "",
      especiality: "",
      role: []
    };
    this.services = new AuthServices();
  }
  changeState = e => {
    this.setState({ role: [e.target.alt] });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  postUser = () => {
    this.services
      .signup(this.state)
      .then(theLoggedNewUser => {
        this.setState({
          username: "",
          password: "",
          name: "",
          surname: "",
          city: "",
          yayo: "",
          especiality: "",
          age: ""
        });
        this.props.setTheUser(theLoggedNewUser);
        this.props.history.push('/main')

      })
      .catch(err => console.log({ err }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postUser();
  };

  render() {
    return this.state.role.length ? (
      <SignUpInfo
        handleChange={e => this.handleChange(e)}
        handleSubmit={e => this.handleSubmit(e)}
        {...this.state}
      />
    ) : (
      <CardRole role={() => this.changeState} />
    );
  }
}

export default Signup;
