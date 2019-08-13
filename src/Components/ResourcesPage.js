import React from "react";
import Resource from "./Resource";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const ResourcesPage = props => {
  if (props.state !== null) {
    return (
      <div className="resources">
        <div className="resources__title-container">
          <h1 className="resources__title">{props.state.resources.title}</h1>
          <p className="resources__description">{props.state.resources.desc}</p>
        </div>
        <div className="resources__list-container">
          <ul className="resources__list">
            {Object.keys(props.state.resources.resourcesList).map(key => (
              <LazyLoadComponent>
                <Resource
                  key={key}
                  index={key}
                  details={props.state.resources.resourcesList[key]}
                  favorited={props.state.favorited.indexOf(key) !== -1}
                  addToFavorites={props.addToFavorites}
                />
              </LazyLoadComponent>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return <div>Nothing to see here...</div>;
  }
};

export default ResourcesPage;
