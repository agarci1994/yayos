import React, { Component } from "react";
import CardDrug from "../../../../cards/drug/cardDrug";
import DrugsServices from "../../../../../services/drugs.services";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import "./drug-module.css";

class Drug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pils: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thuersday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
      buy: []
    };
    this.drugsServices = new DrugsServices();
    this.dateOps = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
  }

  componentDidMount = () => {
    const copyState = { ...this.state };
    const days = Object.keys(this.state);
    this.drugsServices
      .searchDrug(this.props.loggedInUser._id)
      .then(response => {
        response.forEach(elm =>
days.forEach(day => elm.day.includes(day) && copyState[day].push(elm))
        );

        const buyPils = this.needPils(response);

        this.setState({ ...copyState, Pils: response, buy: buyPils });
      })
      .catch(err => console.log(err));
  };

  needPils(response) {
    const toDay = new Date();
    const needPils = [];
    response.forEach(elm => {
      let total = elm.quantity - elm.quantityDay * 7;
      let seconds = 1000 * 60 * 60 * 24 * total;
      let sum = toDay.getTime() + seconds;
      let newDate = new Date(sum);
      needPils.push([elm.name, newDate]);
    });
    const buyPils = Object.fromEntries(needPils);
    return buyPils;
  }

  render() {
    const days = Object.keys(this.state);
    return (
      <Container>
        <div className="button-back">
          <Button as="div" variant="light" size="sm">
            <Link to="/main">Volver</Link>
          </Button>
        </div>
        <div className="title-drug">
          <h1>Tu pastillero:</h1>
        </div>
        <div className="tab-pils">
          <Tab.Container id="days" defaultActiveKey="Monday">
            <Row>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="Monday" className="nav-green">
                      <p>Lunes</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Tuesday" className="nav-green">
                      <p>Martes</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Wednesday" className="nav-green">
                      <p>Miercoles</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Thuersday" className="nav-green">
                      <p>Jueves</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Friday" className="nav-green">
                      <p>Viernes</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Saturday" className="nav-green">
                      <p>Sábado</p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Sunday" className="nav-green">
                      <p>Domingo</p>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                {days.map((elm, idx) => (
                 
                  <Tab.Content key={idx}>
                    <Tab.Pane eventKey={elm}>
                      <CardDrug pilsForDay={this.state[elm]} />
                    </Tab.Pane>
                  </Tab.Content>
                 
                ))}
              </Col>
            </Row>
          </Tab.Container>
        </div>
        <div className="title-drug">
          <h2>Tienes que comprar:</h2>
          {Object.keys(this.state.buy).map((elm, idx) => (
            <p>
              Tienes que comprar pastillas para la {elm} el {this.state.buy[elm].toLocaleDateString("es-ES", this.dateOps)}
            </p>
          ))}
        </div>
      </Container>
    );
  }
}

export default Drug;
