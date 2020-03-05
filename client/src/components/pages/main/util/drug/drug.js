import React from "react";
import CardDrug from "../../../../cards/drug/cardDrug";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./drug-module.css";

const pils = {
  monday: {
    morning: [{ name: "Corazón" }, { name: "Tiroides" }],
    afternoom: [{ name: "Riñon" }, { name: "Tension" }],
    night: [{ name: "Riñon" }, { name: "Tension" }]
  },
  tuesday: {
    morning: [{ name: "Riñon" }, { name: "Tension" }],
    afternoom: [{ name: "Riñon" }, { name: "Tension" }],
    night: [{ name: "Riñon" }, { name: "Tension" }]
  },
  wednesday: {
    morning: [{ name: "Tension" }, { name: "Ansiedad" }],
    afternoom: [{ name: "Riñon" }, { name: "Tension" }],
    night: [{ name: "Riñon" }, { name: "Tension" }]
  },
  thuersday: {
    morning: [{ name: "Tiroides" }, { name: "Tiroides" }],
    afternoom: [{ name: "Riñon" }, { name: "Tension" }],
    night: [{ name: "Riñon" }, { name: "Tension" }]
  },
  friday: {
    morning: [{ name: "Ansiedad" }, { name: "Tiroides" }],
    afternoom: [{ name: "Riñon" }, { name: "Tension" }],
    night: [{ name: "Riñon" }, { name: "Tension" }]
  },
  saturday: {
    morning: [{ name: "Ansiedad" }, { name: "Tiroides" }],
    afternoom: [{ name: "Riñon" }, { name: "Tension" }],
    night: [{ name: "Riñon" }, { name: "Tension" }]
  },
  sunday: {
    morning: [{ name: "Ansiedad" }, { name: "Tiroides" }],
    afternoom: [{ name: "Riñon" }, { name: "Tension" }],
    night: [{ name: "Riñon" }, { name: "Tension" }]
  }
}

let days = Object.keys(pils);

const Drug = props => {
  return (
    <Container>
      <div className="tab-pils">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="monday" className="nav-green">
                    <p>Lunes</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tuesday" className="nav-green">
                    <p>Martes</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="wednesday" className="nav-green">
                    <p>Miercoles</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="thuersday" className="nav-green">
                    <p>Jueves</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="friday" className="nav-green">
                    <p>Viernes</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="saturday" className="nav-green">
                    <p>Sábado</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sunday" className="nav-green">
                    <p>Domingo</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              {days.map((elm, idx) => (
                <Tab.Content key={idx}>
                  <Tab.Pane eventKey={elm}>
                    <CardDrug
                      morning={pils[elm].morning}
                      afternoom={pils[elm].afternoom}
                      night={pils[elm].night}
                    />
                  </Tab.Pane>
                </Tab.Content>
              ))}
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};

export default Drug;
