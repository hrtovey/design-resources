import React from "react";
import Resource from "./Resource";

const HomePage = props => {
  if (props.state !== null) {
    return (
      <div className="resources home">
        <div className="resources__title-container">
          <div className="resources__title-section">
            <h1 className="resources__title">Resources for Designers</h1>
            <p className="resources__description">
              A curated collection of 100+ useful resources for web designers
              like you.
            </p>
          </div>
        </div>
        <div className="resources__list-container">
          <ul className="resources__list">
            {Object.keys(props.state.resources).map(topic =>
              Object.keys(props.state.resources[topic].resourcesList).map(
                resource => (
                  <Resource
                    key={resource}
                    index={resource}
                    details={
                      props.state.resources[topic].resourcesList[resource]
                    }
                    favorited={props.state.favorited.indexOf(resource) !== -1}
                    addToFavorites={props.addToFavorites}
                  />
                )
              )
            )}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>Nothing to see here...</div>;
  }
};

export default HomePage;
