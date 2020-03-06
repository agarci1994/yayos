import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./ejercite.css";

class Memory1 extends Component {
  constructor() {
    super();
    this.state = {
      pair: "",
      inpair: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault(e);
    this.state.pair == 1 && this.state.inpair == 0
      ? alert("Has acertado")
      : alert("Has fallado");
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Row className="jutify-content-bentween">
            <Col md={12} className="center">
              <h2>Pares e impares</h2>
              <p>
                Indique la cantidad de cifras pares e impares del cuadro
                inferior.
              </p>
            </Col>
            <Col className="together" md={12}>
              <p>
                614 || 633 || 638 || 617 || 651 || 630 || 659 || 625 || 645 ||
                624 || 640 || 655 || 643 || 652 || 626 || 641 || 616 || 619 ||
                642 || 636 || 637 || 661 || 628 || 623 || 620 || 663 || 646 ||
                657 || 650 || 647 || 632 || 631 || 627 || 618 || 621 || 649 ||
                629 || 634 || 639 || 654 || 622 || 653 || 615 || 648 || 656 ||
                635
              </p>
            </Col>
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
                <Button variant="dark" type="submit">
                  Comprobar
                </Button>
              </Col>
            </Row>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Memory1;
