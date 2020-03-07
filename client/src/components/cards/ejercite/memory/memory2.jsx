import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./ejerciteMemory.css";

class Memory2 extends Component {
  constructor() {
    super();
    this.state = {
      pair: "",
      inpair: "",
      array: [],
    };
  }

  handleSubmit = e => {
    e.preventDefault(e);
    let resultPair = 0
    let resultInpair = 0
    this.state.array.forEach(elm => elm % 2 === 0 ? resultPair++  : resultInpair++)
    this.state.pair === resultPair &&
    this.state.inpair === resultInpair
      ? alert("Has acertado")
      : alert("Has fallado");
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  genereteNumber = () => {
    const newArr = [];
    for (let i = 0; i < 60; i++) {
      newArr.push(Math.floor(Math.random() * (1000 - 600) + 600));
    }
    this.setState({
      array: newArr
    });
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
              <h2>Pares e impares</h2>
              <p>
                Indique la cantidad de cifras pares e impares del cuadro
                inferior.
              </p>
            </Col>
            {this.state.array.map((elm, idx) => (
              <Col className="number" md={1} key={idx}>
                <p>{elm}</p>{" "}
              </Col>
            ))}
            <Row className="justify-content-between">
              <Col md={4}>
                <p>Pares:</p>
                <input
                  type="number"
                  id="line1"
                  name="pair"
                  value={this.state.one}
                  onChange={e => this.handleChange(e)}
                />
              </Col>
              <Col md={4}>
                <p>Impares:</p>
                <input
                  type="number"
                  id="line2"
                  name="inpair"
                  value={this.state.one}
                  onChange={e => this.handleChange(e)}
                />
              </Col>
              <Col md={2}>
              </Col>
            </Row>
                <Button variant="dark" type="submit">
                  Comprobar
                </Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Memory2;
