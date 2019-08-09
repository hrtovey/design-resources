import React from "react";
import PropTypes from "prop-types";
import Clipboard from "react-clipboard.js";

class Resource extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      link: PropTypes.string
    })
  };

  addFavorite = () => {
    this.props.addToFavorites(this.props.index, this.props.details);
  };

  render() {
    return (
      <li className="resource">
        <div className="resource__info">
          <img
            className="resource__image"
            src={require("../images/" + this.props.details.image)}
            alt=""
          />
          <div className="resource__buttons">
            <button
              className={
                "favorite button-icon " +
                (this.props.favorited ? "favorited" : "")
              }
              onClick={this.addFavorite}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
              </svg>
            </button>
            <Clipboard
              className="button-icon"
              data-clipboard-text={this.props.details.link}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z" />
              </svg>
            </Clipboard>
            <a
              href={this.props.details.link}
              className="resource__link button-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z" />
              </svg>
            </a>
          </div>
          <div className="resource__text">
            <p className="resource__title">{this.props.details.title}</p>
            <p className="resource__description">{this.props.details.desc}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Resource;
