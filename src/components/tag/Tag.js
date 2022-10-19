import React from "react";

function Tag(props) {
  return (
    <div className={props.tooMany ? "top_tags_tag margin" : "top_tags_tag"}>
      <p>{props.tag}</p>
    </div>
  );
}

export default Tag;
