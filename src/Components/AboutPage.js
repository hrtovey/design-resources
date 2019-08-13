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
        <h2>Submissions</h2>
        <p>
          If you have created a great resource or want to add one of your
          favorites to the list, head over to the Submissions page. I appreciate
          any help in keeping this list of resources up-to-date and spectacular!
          If your submission is approved, you can choose to be credited with a
          link back to your website.
        </p>
        <h2>Thank You For Your Help</h2>
        <p>
          Thank you to the following designers for submitting their favorite
          resources!
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
      </div>
    );
  }
}

export default AboutPage;
