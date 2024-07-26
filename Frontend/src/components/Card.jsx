import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadMore] = useState(false);
  const description = `${info.substring(0, 200)}....`;
  const navigate = useNavigate();

  function readmoreHandler() {
    setReadMore(!readmore);
  }

  function viewDetails() {
    navigate(`/destination/${id}`);
  }

  return (
    <div className="card" onClick={viewDetails} style={{ cursor: 'pointer' }}>
      <img src={image} className="image" alt="img" />
      <div className="tourInfo">
        <div className="tourDetails">
          <h4 className="tourPrice">{price}</h4>
          <h4 className="tourName">{name}</h4>
        </div>
        <div className="description">
          {readmore ? info : description}
          <span className="readMore" onClick={(e) => { e.stopPropagation(); readmoreHandler(); }}>
            {readmore ? ` Show less` : ` Read more`}
          </span>
        </div>
      </div>
      <button className="btnRed" onClick={(e) => { e.stopPropagation(); removeTour(id); }}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
