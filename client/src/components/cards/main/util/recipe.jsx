import React from "react"
import Table from "react-bootstrap/Table";

import Recipes from '../../diet/recipes'


const CardMain = props => {
    return (
            <Table responsive="sm">
                <thead className="tr-orange">
                    <tr>
                        <th>Dia</th>
                        <th>Desayuno</th>
                        <th>Almuerzo</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                {props.info && props.info.map((elm, idx) => <Recipes key={idx} day={idx} breakfast={elm[idx].breakfast.name} ingredientsBreakfast={elm[idx].breakfast.ingredients} lunch={elm[idx].lunch.name} ingredientsLunch={elm[idx].lunch.ingredients} dinner={elm[idx].dinner.name} ingredientsDinner={elm[idx].dinner.ingredients} />)}
                </tbody>
            </Table>
    )
};

export default CardMain