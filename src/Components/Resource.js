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
    return <li className="resource">
      <p className="resource_title">{this.props.details.title}</p>
      <p className="resource_description">{this.props.details.desc}</p>
      <a href={this.props.details.link} className="resource__link">-></a>
    </li>;
  }
}

export default Resource;
