import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

class Doctor extends Component {
  constructor() {
    super();
    this.state = {
    };
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
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Doctor;
