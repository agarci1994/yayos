import React from "react";
import './ejerciteSport.css'

const Sport1 = props => {
  return (
    <div className="sport">
      <h2>{props.title}</h2>
      <img src={props.url} alt={props.title}/>
    </div>
  );
};

export default Sport1;
