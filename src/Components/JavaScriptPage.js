import React from "react";
import Resource from "./Resource";

const JavaScriptPage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.javascript).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.javascript[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default JavaScriptPage;
