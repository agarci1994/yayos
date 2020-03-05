import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"

const CardDrug = props => {
  return (
    <Row className="tab-hours">
      <Col sm={12}>
        <Nav variant="pills" className="flex-row justify-content-around">
          <Nav.Item>
            <Nav.Link eventKey="morning" className="nav-green">
              <p>Mañana</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="afternoom" className="nav-green">
              <p>Tarde</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="night" className="nav-green">
              <p>Noche</p>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={12}>
        <Tab.Content>
          <Tab.Pane eventKey="morning">
            {props.morning.map((elm, idx) => (
              <h1 key={idx}>{elm.name}</h1>
            ))}
          </Tab.Pane>
          <Tab.Pane eventKey="afternoom">
            {props.afternoom.map((elm, idx) => (
              <h1 key={idx}>{elm.name}</h1>
            ))}
          </Tab.Pane>
          <Tab.Pane eventKey="night">
            {props.night.map((elm, idx) => (
              <h1 key={idx}>{elm.name}</h1>
            ))}
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  );
};

export default CardDrug
