import React from "react";

const Designer = props => {
  if (props.state !== null) {
    return (
      <li className="helpful-designer">
        {props.details.url ? (
          <a href={props.details.url} target="_blank" rel="noopener noreferrer">
            {props.details.name}
          </a>
        ) : (
          props.details.name
        )}
      </li>
    );
  }
};

export default Designer;
