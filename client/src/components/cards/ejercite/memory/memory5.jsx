import React, { Component } from "react";

/* ----- UI components ----- */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

/* ----- CSS ----- */
import "./ejerciteMemory.css";

class Memory5 extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      result: "",
      number1: "",
      number2: "",
      numberUser: 0,
      operation: ""
    };
  }

  open(result) {
    this.setState({ result, modalShow: true});
  }

  close() {
    this.setState({ modalShow: false });
  }

  handleSubmit = e => {
    e.preventDefault(e);
    this.state.number1 * this.state.number2 == this.state.numberUser ? this.genereteNumber() : this.open("Has fallado")
  };

  handleChange = e => {
      let { name, value } = e.target;
      this.setState({ [name]: value });
    };
    
 genereteNumber = () => {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 10);
    this.setState({ number1, number2, operation: `${number1} X ${number2} =` });
    return `${number1} X ${number2} =`;
  };

  componentDidMount = () => {
    this.genereteNumber();
  };

  render() {
    return (
      <Container>
        <Modal
          show={this.state.modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <h2>{this.state.result}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={() => this.close()}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Row className="jutify-content-bentween">
            <Col md={12} className="centerGame">
              <h2>Multiplica</h2>
              <p>Multiplica los numeros</p>
            </Col>
            <Col md={6} className="text-center">
              <h1>{this.state.operation}</h1>
            </Col>
            <Col md={3} className="text-center">
              <input
                type="number"
                id="line2"
                name="numberUser"
                value={this.state.one}
                onChange={e => this.handleChange(e)}
              />
                    </Col>
                        <Col md={3} className="text-center">
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

export default Memory5;
