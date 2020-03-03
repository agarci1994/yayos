import React from "react";
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
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

export default Diet;
