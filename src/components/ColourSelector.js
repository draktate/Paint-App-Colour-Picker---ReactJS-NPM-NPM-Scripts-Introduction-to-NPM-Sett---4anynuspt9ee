import React from "react";

const ColourSelector = (props) => {
  //console.log("props:",props);
  const { config, selectNextBackground } = props;
  //console.log("selectNBG:",selectNextBackground)
  const { background } = config;
  //console.log("bg:",background)
  return (
    <button
      className={config.classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {config.label}
    </button>
  );
};
export default ColourSelector;
