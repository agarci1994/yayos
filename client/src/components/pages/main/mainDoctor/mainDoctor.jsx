import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

import UserServices from "../../../../services/users.services";

class Doctor extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      modalShow: false
    };
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
    const family = grandmother.forEach(elmGrand =>
      this.state.user.forEach(
        elmFam =>
          elmGrand.username === elmFam.user &&
          copyUser.push({ grand: elmGrand.username, fam: elmFam.username })
      )
    );
    this.setState({ user: copyUser });
  }

  MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  open() {
    this.setState({ modalShow: true });
    // return (
    // <MyVerticallyCenteredModal
    //   show={this.modalShow}
    //   onHide={() => this.setState({modalShow: false})}
    // />
    // );
  }

  render() {
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Familia</th>
          </tr>
        </thead>
        <tbody>
          {this.state.user.map((elm, idx) => (
            <tr key={idx}>
              <div onClick={() => this.open()}>
                <td>{elm.grand}</td>
              </div>
              <td>{elm.fam}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Doctor;
