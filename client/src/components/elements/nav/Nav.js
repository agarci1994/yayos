import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Link } from 'react-router-dom'
import "./Nav.css"

class Navigation extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {

        return (

                    <Navbar expand="lg" className="general-nav">
                        <Navbar.Brand href="/">YAYOS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link as="div"> <Link to="/login">Iniciar Sesion</Link></Nav.Link>
                                <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            
        )
    }
}

export default Navigation