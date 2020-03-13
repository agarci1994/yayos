import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"
import CardMap from "../../../../cards/map/cardMap";

import EventsServices from "../../../../../services/map.services";
import "./maps.css";


class Events extends Component {
  constructor() {
    super();
    this.state = {
      center: [],
      events: [],
      showInfoWindow: false,
      infoWindows: [],
      object: {lat: 12, lng:32}
    };
    this.eventsServices = new EventsServices()
    this.mapStyles = {
      width: "100%",
      height: "2.9%"
    }
  }

  displayMarkers = (type, icon) => {
    return this.state[type].map((elm, idx) => {
      if (elm.location) {
        return (
          <Marker
            key={idx}
            id={idx}
            data-type={type}
            position={{
              lat: elm.location.latitude,
              lng: elm.location.longitude
            }}
            onClick={() => alert(elm.title)}
            icon={{
              url: icon,
              scaledSize: new this.props.google.maps.Size(20, 25)
            }}
          />
        );
      }
    });
  };

  getCenter = () => {
    this.eventsServices
      .searchCenter()
      .then(center => {
        this.setState({ center });
      })
      .catch(err => console.log(err));
  };

  getEvents = () => {
    this.eventsServices
      .searchCultural()
      .then(events => {
        this.setState({ events });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.getEvents();
    this.getCenter();
  };

  render() {
    const house = "../../../../../../images/residencia.svg";
    const cultural = "../../../../../../images/drama.svg";
    return (
      <div className="container-fluid margin">
        <div className="button-back">
          <Button as="div" variant="light" size="sm">
            <Link to="/main">Volver</Link>
          </Button>
        </div>
        <Row>
          <Col xs={10} md={3} lg={3}>
            <h3 className="titleMap">Centros de mayores:</h3>
            <div className="listMap">
              <div className="center listMap">
                {this.state.center.map((elm, idx) => (
                  <CardMap key={idx} name={elm.title} url={elm.relation} addCenter={() => this.setState({ object: { lat: elm.location.latitude, lng: elm.location.longitude }})} />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={10} md={6} lg={6}>
            <Map
              google={this.props.google}
              zoom={15}
              style={this.mapStyles}
              center={this.state.object}
              initialCenter={{ lat: 40.4165001, lng: -3.7025599 }}
            >
              {this.displayMarkers("center", house)}
              {this.displayMarkers("events", cultural)}

            </Map>
          </Col>
          <Col xs={10} md={3} lg={3}>
            <h3 className="titleMap">Eventos culturales:</h3>
            <div className="listMap">
              <div className="events listMap">
                {this.state.events.map((elm, idx) => (
                  <CardMap key={idx} name={elm.title} url={elm.link} addCenter={() => this.setState({object: {lat: elm.location.latitude, lng: elm.location.longitude}})}/>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS
})(Events);
