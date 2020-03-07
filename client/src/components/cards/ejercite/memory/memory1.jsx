import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./ejerciteMemory.css";

class Memory1 extends Component {
  constructor() {
    super();
    this.state = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: "",
      ten: "",
      eleven: "",
      twelve: "",
      thirteen: "",
      fourteen: "",
      fiveteen: "",
      total: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault(e);

    this.state.one === 0 &&
    this.state.two === 1 &&
    this.state.three === 0 &&
    this.state.four === 1 &&
    this.state.five === 3 &&
    this.state.six === 0 &&
    this.state.seven === 0 &&
    this.state.eight === 0 &&
    this.state.nine === 1 &&
    this.state.ten === 1 &&
    this.state.eleven === 1 &&
    this.state.twelve === 2 &&  
    this.state.thirteen === 3 &&
    this.state.fourteen === 0 &&
    this.state.fiveteen === 1 &&
    this.state.total === 14
      ? alert("Has acertado")
      : alert("Has fallado");
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Row className="jutify-content-bentween">
            <Col md={12} className="centerGame">
              <h2>Compartir un hogar</h2>
              <p>
                Repase atentamente la lectura; después, escriba a la derecha
                cuántas veces aparece la letra y (y griega) en cada línea y
                súmelas.
              </p>
            </Col>
            <Col md={12} className="together">
              <p>
                Compartir un hogar en la vejez es una alternativa válida a la
                falta de
              </p>
              <input
                type="number"
                id="line1"
                name="one"
                value={this.state.one}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                compañía. Y es que envejecer en soledad amenaza el bienestar
                personal.
              </p>
              <input
                type="number"
                id="line2"
                name="two"
                value={this.state.two}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                La Organización Mundial de la Salud sostiene que la soledad es
                una de
              </p>
              <input
                type="number"
                id="line3"
                name="three"
                value={this.state.three}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                las principales causas de deterioro de la salud en las personas
                mayores.
              </p>
              <input
                type="number"
                id="line4"
                name="four"
                value={this.state.four}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                Y, si falta apoyo, la calidad de vida se resiente. Requerir
                ayuda es un
              </p>
              <input
                type="number"
                id="line5"
                name="five"
                value={this.state.five}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                rasgo inherente al ser humano; de una u otra forma, todos
                dependemos
              </p>
              <input
                type="number"
                id="line6"
                name="six"
                value={this.state.six}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>de los demás a lo largo de la vida.</p>
              <input
                type="number"
                id="line7"
                name="seven"
                value={this.state.seven}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                Se impone buscar salidas para huir de la soledad. El número de
                personas
              </p>
              <input
                type="number"
                id="line8"
                name="eight"
                value={this.state.eight}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                mayores crece, pero no las propuestas para afrontar el problema.
                ¿Qué se
              </p>
              <input
                type="number"
                id="line9"
                name="nine"
                value={this.state.nine}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                puede hacer? Pues buscar fórmulas; y, cuanto más imaginativas,
                mejor. Si
              </p>
              <input
                type="number"
                id="line10"
                name="ten"
                value={this.state.ten}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                los mayores han cambiado, las residencias no pueden ser la única
                salida.
              </p>
              <input
                type="number"
                id="line11"
                name="eleven"
                value={this.state.eleven}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                Y eso es lo que ofrece Hogar y Café. Es un programa de la
                Fundación
              </p>
              <input
                type="number"
                id="line12"
                name="twelve"
                value={this.state.twelve}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                Pilares que ayuda a los mayores para que puedan formar un hogar
                y
              </p>
              <input
                type="number"
                id="line13"
                name="thirteen"
                value={this.state.thirteen}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>
                paliar la soledad. Se trata de poner en contacto a personas que
                quieran
              </p>
              <input
                type="number"
                id="line14"
                name="fourteen"
                value={this.state.fourteen}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p>compartir casa, gustos y gastos. ¡Una gran idea, sin duda!</p>
              <input
                type="number"
                id="line15"
                name="fiveteen"
                value={this.state.fiveteen}
                onChange={e => this.handleChange(e)}
              />
            </Col>
            <Col md={12} className="together">
              <p className="end">Total</p>
              <input
                type="number"
                id="total"
                name="total"
                value={this.state.total}
                onChange={this.handleChange}
              />
            </Col>

            <Button variant="dark" type="submit">
              Comprobar
            </Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Memory1;
