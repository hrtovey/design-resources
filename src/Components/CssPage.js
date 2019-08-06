import React from "react";
import Resource from "./Resource";

const CssPage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.css).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.css[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default CssPage;
