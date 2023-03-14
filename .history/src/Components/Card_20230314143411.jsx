import React from "react";
import { Link } from "react-router-dom";
import fallbackImg from "../Assets/poke-fallback.png";
import "./Card.css";

const Card = ({ id, image, name }) => {
  return (
    <div className="card">
      <p className="poke-id">{id}</p>
      <object data={fallbackImg}>
        <img src={image} alt={name}></img>
      </object>
      <h2 className="pokemon-name">
        {name}
        <span className="tooltip-detail">
          <Link to={`${name}`}>More Details</Link>
        </span>
      </h2>
    </div>
  );
};

export default Card;
