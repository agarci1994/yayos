import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

import AuthServices from "../../../../services/auth.services";
import "./login-module.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showUsername: false,
      showPassword: false,
      modalShow: false,
      messageUsername: "",
      messagePassword: "",
      number: ""
    };
    this.authServices = new AuthServices();
  }

  open(message, input) {
    input === "username" &&
      this.setState({ showUsername: true, messageUsername: message });
    input === "password" &&
      this.setState({ showPassword: true, messagePassword: message });
  }

  openModal() {
    this.setState({ modalShow: true });
  }

  close() {
    this.setState({ modalShow: false });
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  postUser = () => {
    this.authServices
      .login(this.state)
      .then(theLoggedUser => {
        if (!theLoggedUser)
          this.open("¿Has olvidado tu contraseña?", "password");
        else {
          !theLoggedUser &&
            this.open("¿Has olvidado tu contraseña?", "password");
          this.setState({ username: "", password: "" });
          this.props.setTheUser(theLoggedUser);
          this.props.history.push("/main");
        }
      })
      .catch(err => console.log({ err }));
  };

  handleSubmit = e => {
    e.preventDefault();
    !this.state.username &&
      this.open("Tienes que añadir un nombre de usuario", "username");
    this.state.password
      ? this.postUser()
      : this.open("Tienes que añadir una contraseña", "password");
  };

  render() {
    return (
      <Container>
        <section className="login">
          <h1>Inicio de sesión</h1>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              {this.state.showUsername && (
                <p className="text-err">{this.state.messageUsername}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              {this.state.showPassword && (
                <p className="text-err">
                  {this.state.messagePassword} click{" "}
                  <spam onClick={() => this.openModal()}>aquí</spam>
                </p>
              )}
            </Form.Group>

            <Button variant="dark" type="submit">
              Iniciar sesión
            </Button>
          </Form>
        </section>
        <Modal
          show={this.state.modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>Introduce tu número de telefono</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>
                  Contactaremos contigo para que puedas recuperarla cuanto
                  antes.
                </Form.Label>
                <Form.Control
                  type="number"
                  name="number"
                  value={this.state.number}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Enviar
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.close()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Login;
