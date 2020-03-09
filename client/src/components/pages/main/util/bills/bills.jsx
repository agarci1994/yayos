import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";

import "./bills.css";

import BillsServices from "../../../../../services/bills.services";

class Bills extends Component {
  constructor(props) {
    super(props);

    this.state = { dayPay: "", type: "", bills: [] };
    this.billsServices = new BillsServices();
  }

  componentDidMount = () => {
    const arrBills = [];
    this.billsServices
      .searchBills(this.props.loggedInUser._id)
      .then(response => response.forEach(elm => arrBills.push(elm)))
      .then(() => this.setState({ bills: arrBills }))
      .catch(err => console.log(err));
  };

  onChange = date => this.setState({ date });

  handleSubmit = e => {
    e.preventDefault();
    this.billsServices.saveBills(this.state.dayPay, this.state.type);
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getDays = dayPay => {
    let date1 = new Date();
    let date2 = new Date(dayPay)
    let differentDay = date2.getTime() - date1.getTime();
    let totalDays = Math.round(differentDay / (1000 * 60 * 60 * 24));
    return totalDays > 0 ? "Tienes " + totalDays : "Han pasado " + Math.abs(totalDays)
  };

  getImg = type => {
    switch (type){
      case "Luz": return '../../../../../../images/idea.svg'
      case "Gas": return '../../../../../../images/gas.svg'
      case "Agua": return '../../../../../../images/agua.svg'
      case "Internet": return '../../../../../../images/wifi.svg'
      default: return '../../../../../../images/recibo.svg'
    }
  }

  delete = id => this.billsServices.deleteBills(id)

  render() {
    return (
      <Container>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Row>
            <Col md={12}>
              <Form.Group as={Col}>
                <Form.Label>Tipo:</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option>Elige...</option>
                  <option>Luz</option>
                  <option>Gas</option>
                  <option>Agua</option>
                  <option>Internet</option>
                  <option>Otra</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="input-date" controlId="formGroupPassword">
                <Form.Label>Dia de pago:</Form.Label>
                <Form.Control
                  type="date"
                  name="dayPay"
                  value={this.state.dayPay}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={12} className="buttonForm">
              <Button
                className="ml-auto button"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
          <Row>
            {this.state.bills.map((elm, idx) => (
              <Col md={4} key={idx} className="symbol" onClick={() => this.delete(elm._id)}>
                <img src={this.getImg(elm.type)} />
                <h4>{elm.type}</h4>
                <p> {this.getDays(elm.dayPay)} días para pagar.</p>
              </Col>
            ))}
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Bills;
