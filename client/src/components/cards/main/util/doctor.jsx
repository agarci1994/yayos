import React from "react"

/* ----- UI components ----- */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const CardDoctor = ({alergy, sick}) => {
    return (
        <Row>
            <Col className="info-doctor">
                <h2>Informe médico:</h2>
                <p>Alergias reconocidas:</p>
                <p>{alergy}</p>
                <p>Enfermedad:</p>
                <p>{sick}</p>
            </Col>
        </Row>
    )
};

export default CardDoctor