import React from "react";
import Button from "../../../../elements/buttom/mainButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "./drug-module.css";

const pils = {
  monday: [
    {
      morning: [{ name: "Corazón" }, { name: "Tiroides" }],
      afternoom: [{ name: "Riñon" }, { name: "Tension" }],
      night: [{ name: "Riñon" }, { name: "Tension" }]
    }
  ],
  tuesday: [
    {
      morning: [{ name: "Riñon" }, { name: "Tension" }],
      afternoom: [{ name: "Riñon" }, { name: "Tension" }],
      night: [{ name: "Riñon" }, { name: "Tension" }]
    }
  ],
  wednesday: [
    {
      morning: [{ name: "Tension" }, { name: "Ansiedad" }],
      afternoom: [{ name: "Riñon" }, { name: "Tension" }],
      night: [{ name: "Riñon" }, { name: "Tension" }]
    }
  ],
  thursday: [
    {
      morning: [{ name: "Tiroides" }, { name: "Tiroides" }],
      afternoom: [{ name: "Riñon" }, { name: "Tension" }],
      night: [{ name: "Riñon" }, { name: "Tension" }]
    }
  ],
  friday: [
    {
      morning: [{ name: "Ansiedad" }, { name: "Tiroides" }],
      afternoom: [{ name: "Riñon" }, { name: "Tension" }],
      night: [{ name: "Riñon" }, { name: "Tension" }]
    }
  ]
};

const Drug = props => {
  return (
    <Container>
      <div className="tab-pils">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <p>Lunes</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <p>Martes</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <p>Miercoles</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <p>Jueves</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    <p>Viernes</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    <p>Sábado</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">
                    <p>Domingo</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h1>Holaa</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h1>adios</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <h1>javie</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <h1>jose</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <h1>norma</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <h1>fefe</h1>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <h1>fasfa</h1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </Container>
  );
};

export default Drug;
