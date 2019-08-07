import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage";
import HtmlPage from "./Components/HtmlPage";
import CssPage from "./Components/CssPage";
import JavaScriptPage from "./Components/JavaScriptPage";
import GeneralPage from "./Components/GeneralPage";
import DesignPage from "./Components/DesignPage";
import AccessibilityPage from "./Components/AccessibilityPage";
import SquarespacePage from "./Components/SquarespacePage";
import WordPressPage from "./Components/WordPressPage";
import ShopifyPage from "./Components/ShopifyPage";
import SubmitPage from "./Components/SubmitPage";
import resources from "./resources";
import ThankYouPage from "./Components/ThankYouPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: resources
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
            <nav>
              <Link to="/">Home</Link>
              <Link to="/html">HTML</Link>
              <Link to="/css">CSS</Link>
              <Link to="/javascript">JavaScript</Link>
              <Link to="/general">General</Link>
              <Link to="/design">Design</Link>
              <Link to="/accessibility">Accessibility</Link>
              <Link to="/squarespace">Squarespace</Link>
              <Link to="/wordpress">WordPress</Link>
              <Link to="/shopify">Shopify</Link>
              <Link to="/submissions">Submissions</Link>
            </nav>
          </header>
          <main>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/html"
              render={props => <HtmlPage {...props} state={this.state} />}
            />
            <Route
              path="/css"
              render={props => <CssPage {...props} state={this.state} />}
            />
            <Route
              path="/javascript"
              render={props => <JavaScriptPage {...props} state={this.state} />}
            />
            <Route
              path="/general"
              render={props => <GeneralPage {...props} state={this.state} />}
            />
            <Route
              path="/design"
              render={props => <DesignPage {...props} state={this.state} />}
            />
            <Route
              path="/accessibility"
              render={props => (
                <AccessibilityPage {...props} state={this.state} />
              )}
            />
            <Route
              path="/squarespace"
              render={props => (
                <SquarespacePage {...props} state={this.state} />
              )}
            />
            <Route
              path="/wordpress"
              render={props => <WordPressPage {...props} state={this.state} />}
            />
            <Route
              path="/shopify"
              render={props => <ShopifyPage {...props} state={this.state} />}
            />
            <Route path="/submissions" component={SubmitPage} />
            <Route path="/thank-you" component={ThankYouPage} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
