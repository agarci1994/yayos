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
      user: "",
      especiality: "",
      phone: "",
      family: "",
      diet: "",
      recipe: "",
      role: [],
      showUsername: false,
      showUser: false,
      showName: false,
      showPassword: false,
      messageUsername: "",
      messageUser: "",
      messagePassword: "",
      messageName: ""
    };
    this.authServices = new AuthServices();
  }

  changeState = e => {
    this.setState({ role: [e.target.alt] });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  postUser = () => {
    this.setState({
      showUsername: false
    });
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
        this.props.setTheUser(theLoggedNewUser);
        this.props.history.push("/main");
      })
      .catch(err => console.log({ err }));
  };

  open(message, input) {
    input === "username" &&
      this.setState({ showUsername: true, messageUsername: message });
    input === "user" && this.setState({ showUser: true, messageUser: message });
    input === "name" && this.setState({ showName: true, messageName: message });
    input === "password" &&
      this.setState({ showPassword: true, messagePassword: message });
  }

  handleSubmit = e => {
    e.preventDefault();
    !this.state.username &&
      this.open("Tienes que añadir un nombre de usuario", "username");
    !this.state.name && this.open("Queremos saber como te llamas", "name");
    this.state.role[0] === "Family"
      ? !this.state.user &&
        this.open("Añade a tu yayo para poder registrate", "user")
      : console.log("bien");
    this.state.password
      ? this.state.password.length > 7
        ? this.postUser()
        : this.open("Tu contraseña necesita más de 8 caracteres", "password")
      : this.open("Tienes que añadir una contraseña", "password");
  };

  render() {
    return this.state.role.length ? (
      <>
        <SignUpInfo
          handleChange={e => this.handleChange(e)}
          handleSubmit={e => this.handleSubmit(e)}
          {...this.state}
        />
      </>
    ) : (
      <CardRole role={() => this.changeState} />
    );
  }
}

export default Signup;
