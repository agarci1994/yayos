import React from "react";
import { Link } from "react-router-dom";

/* ----- UI components ----- */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

/* ----- RRD components ----- */
import MyButton from "../../../../elements/buttom/mainButton";

/* ----- CSS ----- */
import "./ejercite.css";

const Ejercite = () => {
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
            className="button-little buttonEjercite"
            name="Ejercicios mentales"
            url="/braing-training"
          />
        </Col>
        <Col xs={10} md={5} lg={5}>
          <MyButton
            purple
            className="button-little buttonEjercite"
            name="Ejercicios fisicos"
            url="/sport-training"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Ejercite;
