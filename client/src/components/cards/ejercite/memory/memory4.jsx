import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./ejercite.css";

class Memory4 extends Component {
    constructor() {
        super();
        this.state = {
          array: [],
          choose: []
        };
    }

    genereteNumber = () => {
        const newArr = []
        const newChoose = []
        for (let i = 0; i < 108; i++) {
        newArr.push(Math.floor(Math.random() * (2020 - 1200) + 1200));
        i % 19 === 0 && newChoose.push(newArr[i])
        }

        this.setState({
            array: newArr, choose: newChoose
        });
    };

    componentDidMount = () => {
        this.genereteNumber();
    };

    render() {
        return (
            <Container>
                    <Row className="jutify-content-bentween">
                        <Col md={12} className="centerGame">
                            <h2>Encuentra los numeros</h2>
                            <p>
                               Encuentre las siguientes cifras en el cuadro inferior y
  escriba debajo de cada una el número de veces que aparece.
              </p>
                        <Row className="Number">
        {this.state.choose.map((elm, idx) => <Col className="number" md={2} key={idx} onClick={() => test()}>
                                    <p>{elm}</p>
                                </Col>)}
              </Row>
                        </Col>
                            {this.state.array.map((elm, idx) => (
                                <Col className="number" md={1} key={idx} onClick={() => test()}>
                                    <p>{elm}</p>
                                </Col>
                            ))}
                            </Row>
            </Container>
        );
    }
}

export default Memory4;
