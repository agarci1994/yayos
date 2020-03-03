import React from "react";
import Button from "../../../../elements/buttom/mainButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Warming = props => {
  return (
    <Container>
      <Row>
        <Col xs={10} md={10} lg={10}>
          <a href={`tel:${props.family}`}>
            <div className={`button emergency`}>
              <p>112</p>
            </div>
          </a>
        </Col>
         <Col xs={10} md={10} lg={10}>
           <a href="tel:112">
           <div className={`button family`}>
            <p>familia</p>
            </div>
            </a>
         </Col>
      </Row>
    </Container>
  );
};

export default Warming;
