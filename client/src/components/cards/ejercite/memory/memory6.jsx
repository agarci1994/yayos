import React, { Component } from "react";
import Container from "react-bootstrap/Container";


class Memory6 extends Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        return (
            <Container>
                <div>
                    <h1>Juego</h1>
                    <canvas ref="canvas" width={640} height={425} />
                </div> 
            </Container>
        );
    }
}

export default Memory6
