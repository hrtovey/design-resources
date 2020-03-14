import React from "react";
import Resource from "./Resource";

const ResourcesPage = props => {
  if (props.state !== null) {
    Object.keys(props.state.resources.resourcesList).filter(key=>props.state.resources.resourcesList[key].new).forEach(key => (
      console.log(key)
    ))
    
    return (
      <div className={"resources " + props.state.pageType}>
        <div className="resources__title-container">
          <h1 className="resources__title">{props.state.resources.title}</h1>
          <p className="resources__description">{props.state.resources.desc}</p>
        </div>
        <div className="resources__list-container">
          <ul className="resources__list">
            {Object.keys(props.state.resources.resourcesList).filter(key=>props.state.resources.resourcesList[key].new).sort().map(key => (
              <Resource
                key={key}
                index={key}
                details={props.state.resources.resourcesList[key]}
                favorited={props.state.favorited.indexOf(key) !== -1}
                addToFavorites={props.addToFavorites}
              />
            ))}
            {Object.keys(props.state.resources.resourcesList).filter(key=>!props.state.resources.resourcesList[key].new).sort().map(key => (
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
      </div>
    );
  } else {
    return <div>Nothing to see here...</div>;
  }
};

export default ResourcesPage;
