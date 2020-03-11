import React, { Component } from "react"

import CardRole from "../../../cards/singup/signupRole"
import SignUpInfo from "../../../cards/singup/signupInfo"
import AuthServices from "../../../../services/auth.services"
import "./signup-module.css"

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
      user: "",
      especiality: "",
      phone:"",
      family: "",
      diet: "",
      recipe: "",
      role: []
    };
    this.authServices = new AuthServices()
  }

  
  changeState = e => {
    this.setState({ role: [e.target.alt] })
  };

  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value })
  };

  postUser = () => {
    this.authServices
      .signup(this.state)
      .then(theLoggedNewUser => {
        this.setState({
          username: "",
          password: "",
          name: "",
          surname: "",
          city: "",
          user: "",
          especiality: "",
          age: "",
          phone: "",
          family: "",
          diet: "",
          recipe: ""
        });
        this.props.setTheUser(theLoggedNewUser)
        this.props.history.push('/main')

      })
      .catch(err => console.log({ err }))
  };

  handleSubmit = e => {
    e.preventDefault()
    this.postUser()
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

export default Signup
