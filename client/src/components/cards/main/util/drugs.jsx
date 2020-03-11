import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardDrugs = props => {
  return (
    <Row>
      {props.info.map((elm, idx) => (
        <Col key={idx}>
          <h3>{elm.name}</h3>
          <p>{elm.description}</p>
          <p>Cantidad por caja: {elm.quantity}</p>
          <p>Toma diario: {elm.quantityDay}</p>
          <p>Precio: {elm.price}</p>
          <p>Dias:</p>
          <p>
            {elm.day.map((elm, idx) => (
              <span key={idx}>{elm} </span>
            ))}
          </p>
          <p>Horas:</p>
          <p>
            {elm.hours.map((elm, idx) => (
              <span key={idx}>{elm} </span>
            ))}
          </p>
        </Col>
      ))}
    </Row>
  );
};

export default CardDrugs;
