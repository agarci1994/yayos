import React from "react"
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col"
import './food.css'

const Diet = props => {
return (
  <Col className="card-type-food" md={3} onClick={() => props.dietChange(props.typeAPI)}>
     <Card className="card-type-food" border="light" style={{ width: '18rem' }}>
    <Card.Header>{props.type}</Card.Header>
    <Card.Body>
      <Card.Text>
     {props.description}
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
)
};

export default Diet
