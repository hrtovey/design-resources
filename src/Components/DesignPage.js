import React from "react";
import Resource from "./Resource";

const DesignPage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.design).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.design[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default DesignPage;
