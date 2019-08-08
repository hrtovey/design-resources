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

  copyLink = () => {
    console.log("link copied", this.props.details.link);
  };

  favoriteLink = () => {
    console.log("link favorited", this.props.details.title);
  };

  render() {
    return (
      <li className="resource">
        <div className="resource__info">
          <p className="resource__title">{this.props.details.title}</p>
          <p className="resource__description">{this.props.details.desc}</p>
        </div>
        <div className="resource__footer">
          <button className="favorite" onClick={this.favoriteLink} />
          <button className="copy-link" onClick={this.copyLink} />
          <a href={this.props.details.link} className="resource__link">
            ->
          </a>
        </div>
      </li>
    );
  }
}

export default Resource;
