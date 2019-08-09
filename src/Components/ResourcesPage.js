import React from "react";
import Resource from "./Resource";

const ResourcesPage = props => {
  if (props.state !== null) {
    if (props.location.pathname === "/") {
      return (
        <div className="resources">
          <h1 className="resources__title">Resources for Designers</h1>
          <p className="resources__description">
            A curated collection of useful resources for web designers like you.
          </p>
          <iframe
            width="480"
            height="320"
            src="https://designresources.substack.com/embed"
            frameBorder="0"
            scrolling="no"
            title="substack-sub"
          />
          <ul className="resources__list">
            {Object.keys(props.state.resources).map(topic =>
              Object.keys(props.state.resources[topic].resourcesList).map(
                resource => (
                  <Resource
                    key={`${topic}-${resource}`}
                    index={`${topic}-${resource}`}
                    details={
                      props.state.resources[topic].resourcesList[resource]
                    }
                    favorited={
                      props.state.favorited.indexOf(`${topic}-${resource}`) !==
                      -1
                    }
                    addToFavorites={props.addToFavorites}
                  />
                )
              )
            )}
          </ul>
        </div>
      );
    } else if (props.location.pathname === "/favorites") {
      return (
        <div className="resources">
          <h1 className="resources__title">{props.state.resources.title}</h1>
          <p className="resources__description">{props.state.resources.desc}</p>
          <ul className="resources__list">
            {Object.keys(props.state.resources.resourcesList).map(key => (
              <Resource
                key={key}
                index={key}
                details={props.state.resources.resourcesList[key]}
                favorited={props.state.favorited.indexOf(key) !== -1}
                addToFavorites={props.addToFavorites}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="resources">
          <h1 className="resources__title">{props.state.resources.title}</h1>
          <p className="resources__description">{props.state.resources.desc}</p>
          <ul className="resources__list">
            {Object.keys(props.state.resources.resourcesList).map(key => (
              <Resource
                key={`${props.state.resources.title.toLowerCase()}-${key}`}
                index={`${props.state.resources.title.toLowerCase()}-${key}`}
                details={props.state.resources.resourcesList[key]}
                favorited={
                  props.state.favorited.indexOf(
                    `${props.state.resources.title.toLowerCase()}-${key}`
                  ) !== -1
                }
                addToFavorites={props.addToFavorites}
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
