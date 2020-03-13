import React from "react"


const CardMap = props => {
    return (
        <a href={props.url} className="no-underline">
        <p onMouseEnter={() => props.addCenter()}>{props.name}</p>
    </a>
    )
};

export default CardMap
