import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./ejercite.css";

class Memory3 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      numberUser: 0,
      try: [],
      result: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault(e);
    let arr = [...this.state.try];

    if (this.state.numberUser === this.state.result) {
      alert("Has acertado");
      this.genereteNumber();
      this.setState({ try: [] });
    }
    if (this.state.count === 10) {
      alert("Has perdido");
      this.genereteNumber();
      this.setState({ try: [], count: 0 });
    } else {
      this.state.numberUser > this.state.result
        ? alert("Demasiado grande")
        : alert("Demasiado pequeño");
      arr.push(this.state.numberUser);
      this.setState({ try: arr, count: this.state.count + 1 });
    }
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  genereteNumber = () => {
    const number = Math.floor(Math.random() * 100);
    this.setState({ result: number });
  };

  componentDidMount = () => {
    this.genereteNumber();
  };

  render() {
    return (
      <Container>
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
