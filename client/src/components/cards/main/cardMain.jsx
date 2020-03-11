import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardRecipe from './util/recipe'
import CardMemory from './util/memory'
import CardDrug from "./util/drugs";
import CardDoctor from "./util/doctor";



const typeCard = (name, info) => {
    switch(name){
case "recipe": return <CardRecipe info={info} /> 
case "memory": return <CardMemory info={info}/>
case "drugs": return <CardDrug info={info} />
case "historial": return <CardDoctor info={info} /> 
}}

const CardMain = props => {
    console.log(props)
    return (
        <Row>
            <Col>
            {typeCard(props.name, props.info)}
            </Col>
        </Row>
    )
};

export default CardMain
