import React from "react"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import Memory1 from '../../../../../cards/ejercite/memory/memory1'
import Memory2 from '../../../../../cards/ejercite/memory/memory2'
import Memory3 from '../../../../../cards/ejercite/memory/memory3'
import Memory4 from '../../../../../cards/ejercite/memory/memory4'
import Memory5 from '../../../../../cards/ejercite/memory/memory5'


const train = [Memory1, Memory2, Memory3, Memory4, Memory5]
let DynamicComponent

const Memory = () => {
    return (
        <Accordion>
            {train.map((elm, idx) =>{
            DynamicComponent = elm
            return <Card key={idx}>
                <Accordion.Toggle as={Card.Header} eventKey={idx}>
                    Ejercicio {idx + 1} 
                 </Accordion.Toggle>
                <Accordion.Collapse eventKey={idx}>
                    <Card.Body><DynamicComponent /></Card.Body>
                </Accordion.Collapse>
            </Card>})}
        </Accordion>
    );
};

export default Memory;