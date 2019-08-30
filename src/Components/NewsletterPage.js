import React from "react";

class SubmitPage extends React.Component {
  render() {
    return (
      <div className="page newsletter-page">
        <div className="page-container">
          <h1 className="page__title">Designer Resources Digest</h1>

          <div className="submission-form">
            <p>
              Stay up to date with this weekly newsletter of useful resources
              for designers like you. Find out about new resources added to this
              website, as well as links to new products, tools, tutorials, and
              more.
            </p>

            <div id="mc_embed_signup">
              <form
                action="https://getdesignresources.us3.list-manage.com/subscribe/post?u=64b586aa12086c861079667e8&amp;id=2daca6395e"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">Email Address </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_64b586aa12086c861079667e8_2daca6395e"
                      tabIndex="-1"
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="newsletter-form__button"
                    />
                  </div>
                </div>
              </form>
              <p>
                No spam, ever. I'll never share your email address and you can
                opt out at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitPage;
