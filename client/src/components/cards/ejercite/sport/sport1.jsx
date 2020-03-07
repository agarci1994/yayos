import React, { Component } from "react";
import './ejerciteSport.css'
const Sport1 = props => {
  return (
    <div className="sport">
      <h2>{props.title}</h2>
      <img src={props.url} />
    </div>
  );
};

export default Sport1;
