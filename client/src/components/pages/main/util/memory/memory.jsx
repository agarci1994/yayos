import React, { Component } from "react";
import MemoryServices from "../../../../../services/memory.services";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { Link } from "react-router-dom"
import "./memory-module.css";

const Text = styled.text`
  color: rgb(49, 49, 49);
  text-align: center;
  font-size: 1.1em;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  list-style: none;
  width: 140%;
`;

class Memory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      date: "",
      memory: props.loggedInUser.memory
    };
    this.memoryServices = new MemoryServices();
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  postMemory = () => {
    this.memoryServices
      .memory(this.state)
      .then(res => {
        this.props.setTheUser(res.user);
        this.setState({
          description: "",
          date: "",
          memory: res.user.memory.reverse(),
          ready: false
        });
      })
      .catch(err =>
        console.log({
          err
        })
      );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postMemory();
  };

  deleteList = () => {
    this.memoryServices.delete(this.props.loggedInUser);
    this.setState({memory: []});
  };


  toggle = e =>
    e.target.classList.length < 3
      ? (e.target.className += " sucess")
      : (e.target.className = "sc-AxjAm eMqaZk");

  render() {
    return (
      <Container className="memoryForm">
        <div className="button-back">
          <Button as="div" variant="light" size="sm">
            <Link to="/main">Volver</Link>
          </Button>
        </div>
        <Row>
          <Col md={12}>
            <Row className="justify-content-between">
              <Col md={5}>
                <Form className="form-memory" onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <h3> ¿Qué tienes que hacer? </h3>
                    <Form.Control
                      type="String"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                    />
                    <h3> ¿Cuándo? </h3>
                    <Form.Control
                      type="Date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <div className="d-flex">
                    <Button className="ml-auto" variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
                <img
                  src="../../../../../../images/muñeco-pensando-png-1.png"
                  alt="thinking"
                />
              </Col>
              <div className="cleanButton" onClick={this.deleteList}>
                Borrar todo
              </div>
              <Col md={5}>
                {this.state.memory.map((elm, idx) => (
                  <Text key={idx} onClick={this.toggle} update={this.update}>
                    {elm.description} | {elm.date} <br />
                  </Text>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Memory;
