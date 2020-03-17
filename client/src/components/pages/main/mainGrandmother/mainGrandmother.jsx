import React, { Component } from "react";
import { Link } from "react-router-dom"

/* ----- UI components ----- */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";

/* ----- Services ----- */
import DrugsServices from "../../../../services/drugs.services";

/* ----- RRD components ----- */
import CardMain from "../../../cards/main/cardMain";

/* ----- CSS ----- */
import "./main-grandmother.css";


import InfoServices from "../../../../services/infoGrandmother.services";

class MainGrandmother extends Component {
  constructor(props) {
    super(props);

    this.state = { drugs: [], historial: [] };
    this.infoServices = new InfoServices();
    this.drugsServices = new DrugsServices();
    this.arrKey = ["recipe", "memory", "drugs", "historial"];
  }

  getInfo() {
    this.infoServices
      .find(this.props.loggedInUser.user)
      .then(response => this.setState({ ...response[0] }))
      .then(() => this.drugsServices.searchDrugGrandmother(this.state._id))
      .then(response => this.setState({ drugs: response }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return (
      <Container>
        <div className="button-back">
          <Button as="div" variant="light" size="sm">
            <Link to="/main" className="no-underline">Volver</Link>
          </Button>
        </div>
        <Row>
          <Col md={12}>
            <Tabs defaultActiveKey="recipe" id="uncontrolled-tab-example">
              {this.arrKey.map((elm, idx) => 
                elm === "historial" ? (
                  <Tab eventKey={elm} key={idx} title={elm}>
                    <CardMain sick={this.state.sick} alergy={this.state.alergy} name={elm} />
                  </Tab>
                ) : (
                <Tab eventKey={elm} key={idx} title={elm}>
                  <CardMain info={this.state[elm]} name={elm} />
                </Tab>
              ))}
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainGrandmother;
