import React, { Component } from "react";
import CardDrug from "../../../../cards/drug/cardDrug";
import DrugsServices from "../../../../../services/drugs.services";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./drug-module.css";

class Drug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thuersday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    };
    this.services = new DrugsServices();
  }

  componentDidMount = () => {
    const copyState = { ...this.state };
    const days = Object.keys(this.state);
    this.services
      .searchDrug(this.props.loggedInUser._id)
      .then(response => {
        response.forEach(elm =>
          days.forEach(day => elm.day.includes(day) && copyState[day].push(elm))
        );
        this.setState({ ...copyState });
      })
      .catch(err => console.log(err));
  };

  render() {
    const days = Object.keys(this.state);
    return (
      <Container>
        <div className="tab-pils">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
      </Container>
    );
  }
}

export default Drug;
