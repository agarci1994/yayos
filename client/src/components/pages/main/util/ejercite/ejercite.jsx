import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../../../elements/buttom/mainButton";
import "./ejercite.css";

class Ejercite extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row className="button-ejercite">
          <Col xs={10} md={5} lg={5}>
            <Button
              blue
              className="button buttonEjercite"
              name="Ejercicios mentales"
              url="/braing-training"
            />
          </Col>
          <Col xs={10} md={5} lg={5}>
            <Button
              purple
              className="button buttonEjercite"
              name="Ejercicios fisicos"
              url="/sport-training"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Ejercite;
