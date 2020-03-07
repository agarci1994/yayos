import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Calendar from "../../../../elements/calendar/calendar";
import "./doctor.css";

const Doctor = props => {
  return (
    <Container>
      <Row className="date-doctor">
        <Form className="form-memory" onSubmit={() => this.handleSubmit}>
          <Col md={12}>
            <h1>Pide una cita con tu medico:</h1>
                      <Row className="justify-content-center">
              <Col md={6} className="text-center">
                <p>¿Para cuando?</p>
                <Calendar />
              </Col>
              <Col md={3}>
                <p>¿Qué te sucede?</p>
                <Form.Control type="Text" name="description" />
              </Col>
          <Col md={2}>
            <Button className="ml-auto" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
            <img src="../../../../../../images/doctor.svg" />
            </Row>
          </Col>
        </Form>
      </Row>
    </Container>
  );
};

export default Doctor;
