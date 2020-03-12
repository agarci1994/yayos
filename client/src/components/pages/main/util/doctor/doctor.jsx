import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DoctorServices from "../../../../../services/appointment.services";
import { Link } from "react-router-dom"

import Calendar from "react-calendar";
import "./doctor.css";

class Doctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      text: "",
      day: "",
      description: "",
      hour: ""
    };
    this.medicalServices = new DoctorServices();
  }

  componentDidMount = () => {
    this.medicalServices
      .searchAppointment(this.props.loggedInUser._id)
      .then(response => response.forEach(elm => this.setState({ ...elm })))
      .catch(err => console.log(err));
  };

  onChange = date => this.setState({ date });

  handleSubmit = e => {
    e.preventDefault();
    const hour = Math.floor(Math.random() * (15 - 9) + 8);
    const minute = Math.floor(Math.random() * (60 - 10) + 10);
    const time = hour + ":" + minute;
    const month = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    const date =
      this.state.date.getDate() +
      " de " +
      month[this.state.date.getMonth()] +
      " del " +
     this.state.date.getFullYear();
    this.setState({ hour: time });
    this.medicalServices.saveMedical(this.state.text, date, time)
    .then(response => this.setState({...response}))
    .catch(err => console.log(err))
    this.setState({text: ""})
    
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <div className="button-back">
          <Button as="div" variant="dark" size="sm">
            <Link to="/main">Volver</Link>
          </Button>
        </div>
        <Row className="date-doctor">
          <Form className="form-doctor" onSubmit={e => this.handleSubmit(e)}>
            <Col md={12}>
              <h1>Pide una cita con tu medico:</h1>
              <Row className="justify-content-center">
                <Col md={6} className="text-center">
                  <p>¿Para cuando?</p>
                  <Calendar onChange={this.onChange} value={this.state.date} />
                </Col>
                <Col md={3}>
                  <p>¿Qué te sucede?</p>
                  <Form.Control
                    className="input-doctor"
                    type="Text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col md={2} className="align-self-end">
                  <Button className="ml-auto" variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
                <Col md={12} className="space">
                  <h4>
                    tu próxima cita es el {this.state.day} a las {this.state.time}
                  </h4>
                  <p>Motivo: {this.state.description}</p>
                </Col>
                <Col md={12}>
                  <img src="../../../../../../images/doctor.svg" alt="doctor" />
                </Col>
              </Row>
            </Col>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default Doctor;
