import React from "react"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardRecipe from './util/recipe'
import CardMemory from './util/memory'
import CardDrug from "./util/drugs";
import CardDoctor from "./util/doctor";
import './card-main.css'


const typeCard = (name, info, sick, alergy) => {  
    switch(name){
case "recipe": return <CardRecipe info={info} /> 
case "memory": return <CardMemory info={info}/>
case "drugs": return <CardDrug info={info} />
case "historial": return <CardDoctor sick={sick} alergy={alergy} /> 
}}

const CardMain = props => {
    return (
        <Row>
            <Col>
            {typeCard(props.name, props.info, props.sick, props.alergy)}
            </Col>
        </Row>
    )
};

export default CardMain
