import React from "react";
import PropTypes from "prop-types";

class Resource extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      link: PropTypes.string
    })
  };

  render() {
    return <li className="menu-fish">Testing</li>;
  }
}

export default Resource;
