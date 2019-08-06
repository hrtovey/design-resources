import React from "react";
import Resource from "./Resource";

const HtmlPage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.html).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.html[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default HtmlPage;
