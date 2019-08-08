import React from "react";
import Resource from "./Resource";

const ResourcesPage = props => {
  if (props.state !== null) {
    return (
      <div className="resources">
        <ul className="resources__list">
          {Object.keys(props.state.resources).map(key => (
            <Resource
              key={key}
              index={key}
              details={props.state.resources[key]}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Nothing to see here...</div>;
  }
};

export default ResourcesPage;
