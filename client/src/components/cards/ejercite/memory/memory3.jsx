import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'


import "./ejerciteMemory.css";

class Memory3 extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      err: false,
      resultEnd: "",
      count: 0,
      numberUser: 0,
      try: [],
      result: "",
      message: ""
    };
  }

  open(result) {
    this.setState({ resultEnd: result, modalShow: true, err: false });
  }

  close() {
    this.setState({ modalShow: false });
  }

  err(response){
    this.setState({err: true, message: response})
  }

  handleSubmit = e => {
    e.preventDefault(e);
    let arr = [...this.state.try];

    if (this.state.numberUser == this.state.result) {
      this.open("Has ganado");
      this.genereteNumber();
      this.setState({ try: [] });
    }
    if (this.state.count === 10) {
      this.open("Has perdido");
      this.genereteNumber();
      this.setState({ try: [], count: 0 });
    } else {
      this.state.numberUser > this.state.result
        ? this.err("Demasiado grande")
        : this.err("Demasiado pequeño");
      arr.push(this.state.numberUser);
      this.setState({ try: arr, count: this.state.count + 1 });
    }
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  genereteNumber = () => {
    const number = Math.floor(Math.random() * 200);
    this.setState({ result: number });
  };

  componentDidMount = () => {
    this.genereteNumber();
  };

  render() {
    return (
      <Container>
        <Overlay show={this.state.err} placement="top">
          {props => (
            <Tooltip id="overlay-example" {...props}>
              {this.state.message}
            </Tooltip>
          )}
        </Overlay>
        <Modal
          show={this.state.modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>{this.state.resultEnd}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={() => this.close()}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Row className="jutify-content-bentween">
            <Col md={12} className="centerGame">
              <h2>Encuentra el numero</h2>
              <p>
                Tienes 10 intentos para encontrar el número correcto. ¡Buena
                suerte!
              </p>
            </Col>
            <Col md={12} className="text-center">
              {this.state.try.map((elm, idx) => (
                <p> {elm} </p>
              ))}
              <input
                type="number"
                id="line2"
                name="numberUser"
                value={this.state.one}
                onChange={e => this.handleChange(e)}
              />
              <Button variant="dark" type="submit">
                Comprobar
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Memory3;
