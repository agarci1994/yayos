import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import UserServices from "../../../../services/users.services";

class Doctor extends Component {
  constructor() {
    super();
    this.state = {
      alergy: undefined,
      sick: undefined,
      user: [],
      pairUser: [],
      infoUser: undefined,
      modalShow: false,
      nameDrug: "",
      quantityDrug: "",
      quantityDayDrug: "",
      priceDrug: "",
      descriptionDrug: "",
      hoursDrug: [],
      dayDrug: [],
      colorDrug: ""
    };
    this.arrDay = []
    this.arrHours = []
    this.userServices = new UserServices();
  }

  componentDidMount() {
    this.userServices
      .findAll()
      .then(response => this.setState({ user: response }))
      .then(() => this.organization())
      .catch(err => console.log(err));
    this.organization();
  }

  organization() {
    const copyUser = [];
    const grandmother = this.state.user.filter(elm =>
      elm.role.includes("Yayo")
    );
    grandmother.forEach(elmGrand =>
      this.state.user.forEach(
        elmFam =>
          elmGrand.username === elmFam.user &&
          copyUser.push({ grand: elmGrand, fam: elmFam })
      )
    );
    this.setState({ pairUser: copyUser });
  }

  open(user) {
    this.setState({ infoUser: user, modalShow: true });
  }

  close() {
    this.setState({ modalShow: false });
  }

  handleChange = e => {
  
    let { name, value } = e.target;
    if (name === "dayDrug") {
      this.arrDay.includes(value) === false && this.arrDay.push(value)
      this.setState({ [name]: this.arrDay });
    } 
    else if (name === "hoursDrug") {
      this.arrHours.includes(value) === false && this.arrHours.push(value)
      this.setState({[name]: this.arrHours})
    }
    else {
      this.setState({ [name]: value });
    }
  };

  postUser = () => {
    this.userServices
      .updateUser(
        this.state.alergy,
        this.state.sick,
        this.state.infoUser.diet,
        this.state.infoUser._id
      )
      .then(response =>
        this.setState({
          alergy: response.alergy,
          sick: response.sick,
          infoUser: response
        })
      )
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postUser();
  };

  addDrugs = e => {
    e.preventDefault();
    this.userServices
      .addDrug(
        this.state.infoUser._id,
        this.state.nameDrug,
        this.state.quantityDrug,
        this.state.quantityDayDrug,
        this.state.priceDrug,
        this.state.descriptionDrug,
        this.state.hoursDrug,
        this.state.dayDrug,
        this.state.colorDrug
      )
  }

  render() {
    return (
      <>
        {this.state.infoUser && (
          <Modal
            show={this.state.modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                <h2>
                  {this.state.infoUser.name} {this.state.infoUser.surname}
                </h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <h4> username: {this.state.infoUser.username}</h4>
              <Row>
                <Col md={6}>
                  <h5>Diagnostico: </h5>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                      <Form.Label>Dieta</Form.Label>
                      <Form.Control
                        type="text"
                        name="diet"
                        value={this.state.infoUser.diet}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Alergias</Form.Label>
                      <Form.Control
                        type="text"
                        name="alergy"
                        value={this.state.alergy}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Enfermedades</Form.Label>
                      <Form.Control
                        type="text"
                        name="sick"
                        value={this.state.sick}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                      Actualizar
                    </Button>
                    <img src="../../../../../images/doctor.png" alt="doctor"/>
                  </Form>
                </Col>
                <Col md={6}>
                  <h5> Añadir medicación: </h5>
                  <Form onSubmit={this.addDrugs}>
                    <Form.Group>
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="nameDrug"
                        value={this.state.nameDrug}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Descripción</Form.Label>
                      <Form.Control
                        type="text"
                        name="descriptionDrug"
                        value={this.state.descriptionDrug}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Cantidad por dia</Form.Label>
                      <Form.Control
                        type="number"
                        name="quantityDayDrug"
                        value={this.state.quantityDayDrug}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Cantidad por caja</Form.Label>
                      <Form.Control
                        type="number"
                        name="quantityDrug"
                        value={this.state.quantityDrug}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Precio</Form.Label>
                      <Form.Control
                        type="number"
                        name="priceDrug"
                        value={this.state.priceDrug}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Color</Form.Label>
                      <Form.Control
                        type="text"
                        name="colorDrug"
                        value={this.state.colorDrug}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Dias</Form.Label>
                      <Form.Control
                        as="select"
                        value={this.state.dayDrug}
                        name="dayDrug"
                        onChange={this.handleChange}
                        multiple={true}
                      >
                        <option value="Monday">Lunes</option>
                        <option value="Tuesday">Martes</option>
                        <option value="Wednesday">Miercoles</option>
                        <option value="Thuersday">Jueves</option>
                        <option value="Friday">Viernes</option>
                        <option value="Saturday">Sábado</option>
                        <option value="Sunday">Domingo</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Horas</Form.Label>
                      <Form.Control
                        as="select"
                        name="hoursDrug"
                        value={this.state.hoursDrug}
                        onChange={this.handleChange}
                        multiple
                      >
                        <option value="Morning">Desayuno</option>
                        <option value="Afternoom">Almuerzo</option>
                        <option value="Night">Cena</option>
                      </Form.Control>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                      Añadir Medicación
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.close()}>Close</Button>
            </Modal.Footer>
          </Modal>
        )}
        <Table responsive>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Familia</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pairUser.map((elm, idx) => (
              <tr key={idx}>
                <div onClick={() => this.open(elm.grand)}>
                  <td>
                    {elm.grand.name} {elm.grand.surname}
                  </td>
                </div>
                <td>
                  {elm.fam.name} {elm.fam.surname}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Doctor;
