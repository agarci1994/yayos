import React from "react";
import "./mainButton-module.css"
import { Link } from "react-router-dom";

let button = {
    red: "warming",
    orange: "diet",
    yellow: "memory",
    green: "pills",
    skyblue: "paper",
    blue: "doctor",
    purple: "ejercite",
    pink: "activity"
}


const Button = props => {

    let classProps, className
    let propButton = Object.getOwnPropertyNames(button)

    propButton.forEach(elm => {
        if (props.hasOwnProperty(elm)) {
            let prop = elm
            classProps = button[prop]
        }
    })

    classProps ? (className = classProps) : (className = props.className)

console.log(className)
    return (
            <Link to={props.url}>
        <div className={`button ${className}`}>
            <p>{props.name}</p>
        </div>
            </Link>
    );
};

export default Button;