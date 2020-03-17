import React, { Component } from "react";

/* ----- UI components ----- */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

class DrugForDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      morning: [],
      afternoom: [],
      night: [],
    };
  }

  componentWillReceiveProps() {
    const copyState = { ...this.state };
    this.props.pilsForDay.forEach(elm => {
      elm.hours.includes("Morning") && copyState.morning.push(elm);
      elm.hours.includes("Afternoom") && copyState.afternoom.push(elm);
      elm.hours.includes("Night") && copyState.night.push(elm);
    });

    this.setState({ ...copyState });
  }

  getColor(color) {
    switch (color) {
      case "blue":
        return "../../../../images/pilsblue.png";
      case "White":
        return "../../../../images/pilswhite.png";
      case "yellow":
        return "../../../../images/pilsyellow.png";
      default:
        return "../../../../images/pilswhite.png";
    }
  }

  render() {
    return (
      <>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="morning"
        >
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
              <Tab.Content className="big-box">
                <Tab.Pane eventKey="morning" className="row box1">
                  {this.state.morning.map((elm, idx) => (
                    <Col md={4} className="pils">
                      <div className="title-pils">
                        <h3 key={idx}>{elm.name}</h3>
                        <img src={this.getColor(elm.color)} alt={elm.name} />
                      </div>
                      <p>{elm.description}</p>
                      <p>Toma: {elm.quantityDay} pastilla</p>
                    </Col>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="afternoom" className="row box2">
                  {this.state.afternoom.map((elm, idx) => (
                    <Col md={4} className="pils">
                      <div className="title-pils">
                        <h3 key={idx}>{elm.name}}</h3>
                        <img src={this.getColor(elm.color)} alt={elm.name} />
                      </div>
                      <p>{elm.description}</p>
                      <p>Toma: {elm.quantityDay} pastilla</p>
                    </Col>
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="night" className="row box3">
                  {this.state.night.map((elm, idx) => (
                    <Col md={4} className="pils">
                      <div className="title-pils">
                        <h3 key={idx}>{elm.name}</h3>
                        <img src={this.getColor(elm.color)} alt={elm.name} />
                      </div>
                      <p>{elm.description}</p>
                      <p>Toma: {elm.quantityDay} pastilla</p>
                    </Col>
                  ))}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </>
    );
  }
}

export default DrugForDay;
