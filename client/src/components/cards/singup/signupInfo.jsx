import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./signup-role-module.css"

const CardRole = props => {

  function identifyRol(props){
  switch (props.role[0]) {
    case 'Yayo':
     return <><Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={props.age}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Familiar</Form.Label>
        <Form.Control
          type="String"
          name="family"
          value={props.family}
          onChange={props.handleChange}
        />
      </Form.Group>
      </>
    case "Family":
      return <><Form.Group>
        <Form.Label>Yayo/a</Form.Label>
        <Form.Control
          type="text"
          name="user"
          value={props.yayo}
          onChange={props.handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Telefono</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          value={props.phone}
          onChange={props.handleChange}
        />
      </Form.Group></>
    case "Doctor":
      return <Form.Group>
        <Form.Label>Especialidad</Form.Label>
        <Form.Control
          type="text"
          name="especiality"
          value={props.especiality}
          onChange={props.handleChange}
        />
      </Form.Group>
    case "Auxiliary":
      return
    default: return <h1>Antes elige tu rol</h1>
  }}

  function identifyImg(props) {
    switch (props.role[0]) {
      case 'Yayo':
        return <Col xs={12} md={1}>
          <img className="img-signup" src="./../../../../images/standing-12.png" alt="Yayo"></img>
        </Col>
      case "Family":
        return <Col xs={12} md={1}>
          <img className="img-signup" src="./../../../../images/standing-5.png" alt="Family"></img>
        </Col>
      case "Doctor":
        return <Col xs={12} md={1}>
          <img className="img-signup" src="./../../../../images/standing-17.png" alt="Doctor"></img>
        </Col>
      case "Auxiliary":
        return
      default: return <h1>Antes elige tu rol</h1>
    }
  }



  return (
    <div className="roles">
      <Container>
        <h3>Registrate:</h3>
        <Form onSubmit={props.handleSubmit}>
          <Row>
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={props.username}
                  onChange={props.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={props.password}
                  onChange={props.handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={props.name}
                  onChange={props.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  name="surname"
                  value={props.surname}
                  onChange={props.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={props.city}
                  onChange={props.handleChange}
                />
              </Form.Group>

              {identifyRol(props)}
      
              <Button variant="dark" type="submit">
                Registrarse
              </Button>
            </Col>
          {identifyImg(props)}
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default CardRole
