import React from "react";
import Resource from "./Resource";

const ShopifyPage = (props) => {
  return (
    <div className="resources">
      <ul className="resources__list">
        {Object.keys(props.state.resources.shopify).map(key => (
          <Resource
            key={key}
            index={key}
            details={props.state.resources.shopify[key]}
          />
        ))}
      </ul>
    </div>
  );
};

export default ShopifyPage;
