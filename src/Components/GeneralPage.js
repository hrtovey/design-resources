import React from "react";
import Resource from "./Resource";

const GeneralPage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.general).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.general[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default GeneralPage;
