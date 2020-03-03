import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./signup-role-module.css";

const CardRole = props => {
  return (
    <div className="roles">
      <Container>
        <h3>Registrate:</h3>
        <Row className="botones">
          <Col xs={6} md={3}>
            <p>Yayo/a</p>
            <img
              src = "./../../../../images/standing-12.png"
              alt="Yayo"
              onClick={props.role("Yayo")}
            />
          </Col>
          <Col xs={6} md={3}>
            <p>Sanitario/a</p>
            <img
              src = "./../../../../images/standing-17.png"
              alt="Doctor"
              onClick={props.role("Doctor")}
            />
          </Col>
          <Col xs={6} md={3}>
            <p>Cuidador/ar</p>
            <img
              src = "./../../../../images/standing-19.png"
              alt="Auxiliary"
              onClick={props.role("Auxiliary")}
            />
          </Col>
          <Col xs={6} md={3}>
            <p>Familiar</p>
            <img
              src="../../../../images/standing-5.png"
              alt="Family"
              onClick={props.role("Family")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardRole;
