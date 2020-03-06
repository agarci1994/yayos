import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EventsServices from "../../../../../services/map.services";
import "./maps.css";

const mapStyles = {
  width: "100%",
  height: "10%"
};

class Events extends Component {
  constructor() {
    super();
    this.state = {
      center: [],
      events: []
    };
    this.services = new EventsServices();
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => alert(this.state.stores[0].lat)}
        />
      );
    });
  };

  getCenter = () => {
    console.log("Busco los centros");
    this.services
      .searchCenter()
      .then(center => {
        this.setState({ center });
      })
      .catch(err => console.log(err));
  };

  getEvents = () => {
    console.log("Busco los eventos");
    this.services
      .searchCultural()
      .then(events => {
        this.setState({ events });
        console.log(this.state.events);
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    console.log("Estoy en component Did Mount");
    this.getEvents();
    this.getCenter();
  };

  drawCenter = () =>
    this.state.center.length > 1 ? (
      this.state.center.map((elm, idx) => <p key={idx}>{elm.title}</p>)
    ) : (
      <h1>No hay datos</h1>
    );
  drawEvents = () =>
    this.state.events.length > 1 ? (
      this.state.events.map((elm, idx) => <p key={idx}>{elm.title}</p>)
    ) : (
      <h1>No hay datos</h1>
    );

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} md={2} lg={2}>
            <div className="listMap">
            <div className="center listMap">{this.drawCenter()}</div>
            </div>
          </Col>
          <Col xs={10} md={8} lg={8}>
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 40.4165001, lng: -3.7025599 }}
            ></Map>
          </Col>
          <Col xs={10} md={2} lg={2}> 
            <div className="listMap">
            <div className="events listMap">{this.drawEvents()}</div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS
})(Events);
