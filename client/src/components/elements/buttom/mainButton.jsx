import React from "react"
import { Link } from "react-router-dom"

/* ----- CSS ----- */
import "./mainButton.css"

let button = {
    red: "warming",
    orange: "diet",
    yellow: "memory",
    green: "pills",
    skyblue: "paper",
    blue: "doctor",
    purple: "ejercite",
    pink: "activity",
    redWarming: "emergency",
    yellowWarming: "family"
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

    
    return (
            <Link to={props.url} className="no-underline">
        <div className={`button ${className}`}>
            <p>{props.name}</p>
        </div>
            </Link>
    );
};

export default Button;