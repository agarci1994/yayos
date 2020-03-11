import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardMap from "../../../../cards/map/cardMap";

import EventsServices from "../../../../../services/map.services";
import "./maps.css";

const mapStyles = {
  width: "100%",
  height: "1%"
};

class Events extends Component {
  constructor() {
    super();
    this.state = {
      center: [],
      events: [],
      showInfoWindow: false,
      infoWindows: []
    };
    this.services = new EventsServices();
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
            // NECESITO LLAMAR A ESTE ONCLICK DESDE EL HOVER DE LA LISTA (¿COMO SE PUDE HACER?)
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

  displayInfoWindows = (type, icon, cb) => {
    const infoWindows = this.state[type].map((elm, idx) => {
      if (elm.location) {
        return (
          <InfoWindow
            icon={{
              url: icon,
              scaledSize: new this.props.google.maps.Size(20, 25)
            }}
            position={{
              lat: elm.location.latitude,
              lng: elm.location.longitude
            }}
            visible={true}
          >
            <p>holi</p>
          </InfoWindow>
        );
      }
    });

    // this.setState({ infoWindows: infoWindows }, () => console.log(this.state));
    return infoWindows;
  };

  getCenter = () => {
    this.services
      .searchCenter()
      .then(center => {
        this.setState({ center });
      })
      .catch(err => console.log(err));
  };

  getEvents = () => {
    this.services
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
      <Container>
        <Row>
          <Col xs={10} md={3} lg={3}>
            <h3 className="titleMap">Centros de mayores:</h3>
            <div className="listMap">
              <div className="center listMap">
                {this.state.center.map((elm, idx) => (
                  <CardMap key={idx} name={elm.title} url={elm.relation} />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={10} md={6} lg={6}>
            <Map
              google={this.props.google}
              zoom={15}
              style={mapStyles}
              initialCenter={{ lat: 40.4165001, lng: -3.7025599 }}
            >
              {this.displayMarkers("center", house)}
              {this.displayInfoWindows("center", house)}

              {this.displayMarkers("events", cultural)}
              {this.displayInfoWindows("events", cultural)}
            </Map>
          </Col>
          <Col xs={10} md={3} lg={3}>
            <h3 className="titleMap">Eventos culturales:</h3>
            <div className="listMap">
              <div className="events listMap">
                {this.state.events.map((elm, idx) => (
                  <CardMap key={idx} name={elm.title} url={elm.link} />
                ))}
              </div>
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
