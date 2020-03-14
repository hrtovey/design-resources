import React from "react";
import Designer from "./Designer";
import designers from "../designers";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designers: designers
    };
  }

  render() {
    return (
      <div className="page">
        <h1 className="page__title">About Page</h1>
        <p>
          Resources for Designers is a curated list of excellent resources to
          help you out as a designer. Here, you'll find a variety of resources
          for:
        </p>
        <ul>
          <li>the designer learning to code</li>
          <li>the designer looking for inspiration</li>
          <li>
            the designer looking for 3rd-party plugins and addons for the
            platform of their choice
          </li>
          <li>all designers!</li>
        </ul>
        <h2>Thank You For Your Help</h2>
        <p>
          Thank you to the following designers for submitting their favorite
          resources to get this list up and running!
        </p>

        <ul className="helpful-designers__list">
          {Object.keys(this.state.designers).map(designer => (
            <Designer
              key={designer}
              index={designer}
              details={this.state.designers[designer]}
            />
          ))}
        </ul>
        <div className="bmc-button-container">
        <a className="bmc-button" target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/htovey"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee" /><span style={{marginLeft:5}}>Buy me a coffee</span></a>
        </div>
      </div>
    );
  }
}

export default AboutPage;
