import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyButton from "../../../../elements/buttom/mainButton";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import "./ejercite.css";


  const Ejercite = props => {
    return (
      <Container>
        <div className="button-back">
          <Button as="div" variant="light" size="sm">
            <Link to="/main">Volver</Link>
          </Button>
        </div>
        <Row className="button-ejercite">
          <Col xs={10} md={5} lg={5}>
            <MyButton
              blue
              className="button buttonEjercite"
              name="Ejercicios mentales"
              url="/braing-training"
            />
          </Col>
          <Col xs={10} md={5} lg={5}>
            <MyButton
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

export default Ejercite;
