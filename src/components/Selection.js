
import React, { useState } from "react";

export default function Selection(props) {
  let [style, setStyle] = useState({ background: "" });

 // console.log('Selection props:', props);

  let applyColor = props.applyColor;
  //console.log('applyColor:', applyColor);
  return (
    <div className="fix-box" onClick={() => applyColor(setStyle)} style={style}>
      <h2 className="subheading"  key= {props.key1}>  {props.key1}</h2>
    </div>
  );
}