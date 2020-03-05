import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const pilsForHours = {
  morning: [],
  afternoom: [],
  night: []
};


const hoursForPils = pilsForDay => {
  console.log(pilsForHours.morning)
  pilsForDay.map(elm => {
    elm.hours.includes("Morning") && pilsForHours.morning.push(elm);
    elm.hours.includes("Afternoom") && pilsForHours.afternoom.push(elm);
    elm.hours.includes("Night") && pilsForHours.night.push(elm);
  });
};

const CardDrug = props => {
  hoursForPils(props.pilsForDay);
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
              {pilsForHours.morning.map((elm, idx) => (
                <>
                  <h1 key={idx}>{elm.name}</h1>
                  <p>{elm.description}</p>
                  <p>{elm.quantityDay}</p>
                </>
              ))}
            </Tab.Pane>
            <Tab.Pane eventKey="afternoom">
              {pilsForHours.afternoom.map((elm, idx) => (
                <>
                  <h1 key={idx}>{elm.name}}</h1>
                  <p>{elm.description}</p>
                  <p>{elm.quantityDay}</p>
                </>
              ))}
            </Tab.Pane>
            <Tab.Pane eventKey="night">
              {pilsForHours.night.map((elm, idx) => (
                <>
                  <h1 key={idx}>{elm.name}</h1>
                  <p>{elm.description}</p>
                  <p>{elm.quantityDay}</p>
                </>
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default CardDrug;
