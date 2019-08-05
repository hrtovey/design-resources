import React from "react";
import Resource from "./Resource";

const Css = () => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(this.state.resources.css).map(key => (
          <Resource
            key={key}
            index={key}
            details={this.state.resources.css[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Css;
