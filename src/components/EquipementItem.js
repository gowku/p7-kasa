import React from "react";

function EquipementItem(props) {
  console.log(props.item);
  return <li>{props.item}</li>;
}

export default EquipementItem;
