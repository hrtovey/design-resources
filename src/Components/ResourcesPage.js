import React from "react";
import Resource from "./Resource";

const ResourcesPage = props => {
  
  if (props.state !== null) {
    if (props.location.pathname === "/") {
      return (
        <div className="resources">
          <h1>Resources</h1>
          <p>for designers.</p>
          <ul className="resources__list">
            {Object.keys(props.state.resources).map(topic => (
              Object.keys(props.state.resources[topic].resourcesList).map(resource => (
                <Resource
                  key={resource}
                  index={resource}
                  details={props.state.resources[topic].resourcesList[resource]}
                />
              )
              )
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="resources">
          <h1>{props.state.resources.title}</h1>
          <p>{props.state.resources.desc}</p>
          <ul className="resources__list">
            {Object.keys(props.state.resources.resourcesList).map(key => (
              <Resource
                key={key}
                index={key}
                details={props.state.resources.resourcesList[key]}
              />
            ))}
          </ul>
        </div>
      );
    }
  } else {
    return <div>Nothing to see here...</div>;
  }
};

export default ResourcesPage;
