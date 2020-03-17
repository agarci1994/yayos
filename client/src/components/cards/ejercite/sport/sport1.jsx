import React from "react";
import './ejerciteSport.css'

const Sport1 = ({title, url}) => {
  return (
    <div className="sport">
      <h2>{title}</h2>
      <img src={url} alt={title}/>
    </div>
  );
};

export default Sport1;
