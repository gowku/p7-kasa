import React from "react";
import { Link } from "react-router-dom";

function HomeLogement(props) {
  return (
    <Link to={`/logement/${props.id}`}>
      <li className="location">
        <img src={props.cover} alt="logement" />
        <div className="overlay-logement"></div>
        <p className="location-titre">{props.title}</p>
      </li>
    </Link>
  );
}

export default HomeLogement;
