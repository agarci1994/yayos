import React from "react"
import './food.css'

const Recipes = props => {
let day
switch (props.day){
    case 0:
    day = "Lunes"
    break;
    case 1:
    day = "Martes"
    break;
    case 2:
    day = "Miercoles"
    break;
    case 3:
    day = "Jueves"
    break;
    case 4:
    day = "Viernes"
    break;
    case 5:
    day = "Sábado"
    break;
    case 6:
    day = "Domingo"
    break;
    default:
    day = "Extra"
    break;
}
return (
        <tr>
              <td>{day}</td>
              <td>{props.breakfast}</td>
              <td>{props.lunch}</td>
              <td>{props.dinner}</td>
            </tr>
)
};

export default Recipes
