import React from "react";

/* ----- UI components ----- */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardDrugs = ({info}) => {
  return (
    <Row>
      {info.map((elm, idx) => (
        <Col md={3} key={idx} className="info-drug">
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
