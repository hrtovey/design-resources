// To Do
// Add heart, copy link, go to page
// Add Favorites page (localStorage)
// Newsletter subscription (let you know about new resources)

import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import resources from "./resources";
import HomePage from "./Components/HomePage";
import SubmitPage from "./Components/SubmitPage";
import ThankYouPage from "./Components/ThankYouPage";
import AboutPage from "./Components/AboutPage";
import ResourcesPage from "./Components/ResourcesPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: resources,
      favorites: null
    };
  }

  state = {
    resources: {}
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <h1>Awesome</h1>
            <nav className="primary-nav">
              <Link to="/">Home</Link>
              <Link to="/favorites">Favorites</Link>
              <Link to="/html">HTML</Link>
              <Link to="/css">CSS</Link>
              <Link to="/javascript">JavaScript</Link>
              <Link to="/general">General</Link>
              <Link to="/design">Design</Link>
              <Link to="/accessibility">Accessibility</Link>
              <Link to="/squarespace">Squarespace</Link>
              <Link to="/wordpress">WordPress</Link>
              <Link to="/shopify">Shopify</Link>
            </nav>
            <nav className="secondary-nav">
              <Link to="/about">About</Link>
              <Link to="/submissions">Submissions</Link>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/favorites"
              render={props => (
                <ResourcesPage {...props} state={this.state.favorites} />
              )}
            />
            <Route
              path="/html"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.html }}
                />
              )}
            />
            <Route
              path="/css"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.css }}
                />
              )}
            />
            <Route
              path="/javascript"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.javascript }}
                />
              )}
            />
            <Route
              path="/general"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.general }}
                />
              )}
            />
            <Route
              path="/design"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.design }}
                />
              )}
            />
            <Route
              path="/accessibility"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.accessibility }}
                />
              )}
            />
            <Route
              path="/squarespace"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.squarespace }}
                />
              )}
            />
            <Route
              path="/wordpress"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.wordpress }}
                />
              )}
            />
            <Route
              path="/shopify"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{ resources: this.state.resources.shopify }}
                />
              )}
            />
            <Route path="/submissions" component={SubmitPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/about" component={AboutPage} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
