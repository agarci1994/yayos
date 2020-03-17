import React, { Component } from "react";

/* ----- UI components ----- */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* ----- CSS ----- */
import "./ejerciteMemory.css";

class Memory4 extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      choose: []
    };
  }

  genereteNumber = () => {
    const newArr = [];
    const newChoose = [];
    for (let i = 0; i < 108; i++) {
      newArr.push(Math.floor(Math.random() * (2020 - 1200) + 1200));
      i % 20 === Math.floor(Math.random()) && newChoose.push(newArr[i]);
    }

    this.setState({
      array: newArr,
      choose: newChoose
    });
  };

  componentDidMount = () => {
    this.genereteNumber();
  };

  test = elm => {
    !this.state.choose.length && alert("Has ganado");
    let newChoose = [...this.state.choose];
    newChoose.includes(elm)
      ? (newChoose = newChoose.filter(i => i !== elm))
      : alert("sigue intentandolo");
    this.setState({ choose: newChoose });
  };

  render() {
    return (
      <Container>
        <Row className="jutify-content-bentween">
          <Col md={12} className="centerGame">
            <h2>Encuentra los numeros</h2>
            <p>Encuentre las siguientes cifras en el cuadro inferior</p>
            <Row className="Number">
              {this.state.choose.map((elm, idx) => (
                <Col className="number" md={2} key={idx}>
                  <p>{elm}</p>
                </Col>
              ))}
            </Row>
          </Col>
          {this.state.array.map((elm, idx) => (
            <Col
              className="number"
              md={1}
              key={idx}
              onClick={() => this.test(elm)}
            >
              <p>{elm}</p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Memory4;
