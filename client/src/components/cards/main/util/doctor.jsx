import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const CardDoctor = props => {
    return (
        <Row>
            <Col className="info-doctor">
                <h2>Informe médico:</h2>
                <p>Alergias reconocidas:</p>
                <p>{props.alergy}</p>
                <p>Enfermedad:</p>
                <p>{props.sick}</p>
            </Col>
        </Row>
    )
};

export default CardDoctor