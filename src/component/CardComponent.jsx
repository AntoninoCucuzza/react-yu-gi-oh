import React from "react";

const CardComponent = ({ cardName, cardArchetype, cardImg }) => {
  return (
    <div className="col-3 g-3 text-white">
      <div className="cards">
        <img className="img-fluid" src={cardImg} alt={cardName} />
        <h4>{cardName}</h4>
        <span>{cardArchetype}</span>
      </div>
    </div>
  );
};

export default CardComponent;
