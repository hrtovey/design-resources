import React from "react";
import Resource from "./Resource";

const SquarespacePage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.squarespace).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.squarespace[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default SquarespacePage;
