import React from "react";
import Resource from "./Resource";

const AccessibilityPage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.accessibility).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.accessibility[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default AccessibilityPage;
