import React, { useState } from "react";
import EquipementItem from "./EquipementItem";

function Collapse(props) {
  // console.log(props);
  const [hide, setHide] = useState(true);
  // console.log(hide);

  const hideCollapse = () => {
    setHide((current) => !current);
  };
  let title;
  if (props.logementTitle) {
    title = props.logementTitle;
  } else if (props.aProposTitle) {
    title = props.aProposTitle;
  } else if (props.equipementTitle) {
    title = props.equipementTitle;
  }

  let content;
  if (props.logementDescription) {
    content = props.logementDescription;
  } else if (props.aProposDescription) {
    content = props.aProposDescription;
  }

  return (
    <div className="bottom_description">
      <div className="bottom_description_title">
        <p>{title}</p>
        <svg
          onClick={hideCollapse}
          className={hide ? "turn" : ""}
          width="28"
          height="17"
          viewBox="0 0 28 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24.84 16.3466L27.2 13.9733L14 0.786621L0.800025 13.9866L3.16003 16.3466L14 5.50662L24.84 16.3466Z" fill="white" />
        </svg>
      </div>
      <div className={hide ? "hidden bottom_description_texte" : "bottom_description_texte"}>
        {props.logementDescription && <p>{content}</p>}
        {props.aProposDescription && <p>{content}</p>}
        {props.equipementDescription && (
          <ul>
            {props.equipementDescription.map((el) => (
              <EquipementItem item={el} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;
