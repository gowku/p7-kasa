import React from "react";
import { Link, useParams } from "react-router-dom";

function HomeLogement(props) {
  console.log(props.data);
  // const id = props.data.id;
  const cover = props.data.cover;
  const title = props.data.title;
  // const {id} = useParams()

  return (
    <Link to=`/logement/${id}`>
      <li className="location">
        <img src={cover} alt="logement" />
        <p className="location-titre">{title}</p>
      </li>
    </Link>
  );
}

export default HomeLogement;
