import React from "react"

/* ----- UI components ----- */
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* ----- RRD components ----- */
import CardRecipe from './util/recipe'
import CardMemory from './util/memory'
import CardDrug from "./util/drugs";
import CardDoctor from "./util/doctor";

/* ----- CSS ----- */
import './card-main.css'


const typeCard = (name, info, sick, alergy) => {  
    switch(name){
case "recipe": return <CardRecipe info={info} /> 
case "memory": return <CardMemory info={info}/>
case "drugs": return <CardDrug info={info} />
case "historial": return <CardDoctor sick={sick} alergy={alergy} /> 
default: return <h1>No hay información</h1>
}}

const CardMain = ({name, info, sick, alergy}) => {
    return (
        <Row>
            <Col>
            {typeCard(name, info, sick, alergy)}
            </Col>
        </Row>
    )
};

export default CardMain
