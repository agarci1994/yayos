import React from "react";
import Button from "../../elements/buttom/mainButton";
import Doctor from "./mainDoctor/mainDoctor";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main-module.css";

function chooseMain(props) {
  switch (props.loggedInUser.role[0]) {
    case "Yayo":
      return (
        <>
          <Col xs={10} md={5} lg={3}>
            <Button red className="button" name="Emergencias" url="/warming" />
          </Col>
          <Col xs={10} md={5} lg={3}>
            <Button orange className="button" name="Dietas" url="/diet" />
          </Col>
          <Col xs={10} md={5} lg={3}>
            <Button yellow className="button" name="Memoria" url="/memory" />
          </Col>
          <Col xs={10} md={5} lg={3}>
            <Button green className="button" name="Pastillas" url="/pils" />
          </Col>
          <Col xs={10} md={5} lg={3}>
            <Button skyblue className="button" name="Papeles" url="/bills" />
          </Col>
          <Col xs={10} md={5} lg={3}>
            <Button blue className="button" name="Medico" url="/medical" />
          </Col>
          <Col xs={10} md={5} lg={3}>
            <Button
              purple
              className="button"
              name="Ejercicios"
              url="/ejercite"
            />
          </Col>
          <Col xs={10} md={5} lg={3}>
            <Button pink className="button" name="Actividades" url="/event" />
          </Col>
        </>
      );
    case "Family":
      return (
        <>
          <Col xs={10} md={5} lg={10}>
            <Button orange className="button" name={props.loggedInUser.user[0]} url="/yayos" />
          </Col>
        </>
      );
    case "Doctor":
      return (
        <>
          <Doctor />
        </>
      );
    case "Auxiliary":
      return (
        <>
          <Col xs={10} md={6}>
            <Button
              yellow
              className="button auxiliary"
              name="Buscar Yayos"
              url="/"
            />
          </Col>
          <Col xs={10} md={5} lg={5}>
            <Button
              purple
              className="button auxiliary"
              name="Tus Yayos"
              url="/"
            />
          </Col>
        </>
      );
    default:
      return <h1>registrate</h1>;
  }
}

const myIndex = props => {
  return (
    <Container>
      <main className="mainButton">
        <Row>{chooseMain(props)}</Row>
      </main>
    </Container>
  );
};

export default myIndex;
