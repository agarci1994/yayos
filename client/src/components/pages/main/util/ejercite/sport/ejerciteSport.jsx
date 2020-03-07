import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import Sport from '../../../../../cards/ejercite/sport/sport1'

const ejercite = [{ title: "Levantar los brazos", url: "../../../../../images/1.png" }, { title: "Flexión de hombros", url: "../../../../../images/2.png" }, { title: "Ejercicio de bíceps", url: "../../../../../images/3.png" }, { title: "Levantar los brazos", url: "../../../../../images/3.png" }, { title: "Levantarse de la silla", url: "../../../../../images/4.png" }, { title: "Extensión de caderas", url: "../../../../../images/5.png" }, { title: "Estiramiento de los tendones", url: "../../../../../images/6.png" }, { title: "Rotación doble de cadera", url: "../../../../../images/7.png" }]

const EjerciteSport = () => {
    return (
        <Accordion>
            {ejercite.map((elm, idx) => {
                return <Card key={idx}>
                    <Accordion.Toggle as={Card.Header} eventKey={idx}>
                        Ejercicio {idx + 1}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={idx}>
                        <Card.Body><Sport {...elm}/></Card.Body>
                    </Accordion.Collapse>
                </Card>
            })}
        </Accordion>
    );
};

export default EjerciteSport;