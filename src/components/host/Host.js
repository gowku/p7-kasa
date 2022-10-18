import React from "react";

function Host(props) {
  const hostName = props.host.name.split(" ");
  return (
    <div className="top_host">
      <div className="top_host_name">
        <p>{hostName[0]}</p>
        <p>{hostName[1]}</p>
      </div>
      <img className="top_host_img" src={props.host.picture} alt="hôte"></img>
    </div>
  );
}

export default Host;
