// To Do
// Add heart, copy NavLink, go to page
// Add Favorites page (localStorage)
// Newsletter subscription (let you know about new resources)

import React from "react";
import { NavLink, Link, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import resources from "./resources";
import SubmitPage from "./Components/SubmitPage";
import ThankYouPage from "./Components/ThankYouPage";
import AboutPage from "./Components/AboutPage";
import ResourcesPage from "./Components/ResourcesPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: resources,
      favorites: {
        title: "Favorites",
        desc: "See your favorites here.",
        resourcesList: {}
      },
      favorited: []
    };
  }

  componentDidMount() {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites !== null) {
      this.setState({ favorites: favorites });
    }
    const favorited = JSON.parse(localStorage.getItem("favorited"));
    if (favorited !== null) {
      this.setState({ favorited: favorited });
    }
  }

  addToFavorites = (index, details) => {
    var favorites = { ...this.state.favorites };
    var favorited = [...this.state.favorited];

    if (this.state.favorites.resourcesList[index]) {
      delete favorites.resourcesList[index];

      var i = favorited.indexOf(index);
      if (i !== -1) {
        favorited.splice(i, 1);
      }
    } else {
      favorites.resourcesList[index] = details;
      favorited.push(index);
    }

    this.setState({ favorites });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    this.setState({ favorited });
    localStorage.setItem("favorited", JSON.stringify(favorited));
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <div className="categories">
              <p className="categories__title">Categories</p>
              <nav className="primary-nav">
                <NavLink exact to="/">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                  </svg>{" "}
                  Home
                </NavLink>
                <NavLink to="/favorites">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                  </svg>{" "}
                  Favorites
                </NavLink>
                <NavLink to="/html">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                  </svg>{" "}
                  HTML
                </NavLink>
                <NavLink to="/css">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z" />
                  </svg>{" "}
                  CSS
                </NavLink>
                <NavLink to="/javascript">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                  </svg>{" "}
                  JavaScript
                </NavLink>
                <NavLink to="/design">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                  </svg>{" "}
                  Design
                </NavLink>
                <NavLink to="/accessibility">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z" />
                  </svg>{" "}
                  Accessibility
                </NavLink>
                <NavLink to="/squarespace">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M186.12 343.34c-9.65 9.65-9.65 25.29 0 34.94 9.65 9.65 25.29 9.65 34.94 0L378.24 221.1c19.29-19.29 50.57-19.29 69.86 0s19.29 50.57 0 69.86L293.95 445.1c19.27 19.29 50.53 19.31 69.82.04l.04-.04 119.25-119.24c38.59-38.59 38.59-101.14 0-139.72-38.59-38.59-101.15-38.59-139.72 0l-157.22 157.2zm244.53-104.8c-9.65-9.65-25.29-9.65-34.93 0l-157.2 157.18c-19.27 19.29-50.53 19.31-69.82.05l-.05-.05c-9.64-9.64-25.27-9.65-34.92-.01l-.01.01c-9.65 9.64-9.66 25.28-.02 34.93l.02.02c38.58 38.57 101.14 38.57 139.72 0l157.2-157.2c9.65-9.65 9.65-25.29.01-34.93zm-261.99 87.33l157.18-157.18c9.64-9.65 9.64-25.29 0-34.94-9.64-9.64-25.27-9.64-34.91 0L133.72 290.93c-19.28 19.29-50.56 19.3-69.85.01l-.01-.01c-19.29-19.28-19.31-50.54-.03-69.84l.03-.03L218.03 66.89c-19.28-19.29-50.55-19.3-69.85-.02l-.02.02L28.93 186.14c-38.58 38.59-38.58 101.14 0 139.72 38.6 38.59 101.13 38.59 139.73.01zm-87.33-52.4c9.64 9.64 25.27 9.64 34.91 0l157.21-157.19c19.28-19.29 50.55-19.3 69.84-.02l.02.02c9.65 9.65 25.29 9.65 34.93 0 9.65-9.65 9.65-25.29 0-34.93-38.59-38.59-101.13-38.59-139.72 0L81.33 238.54c-9.65 9.64-9.65 25.28-.01 34.93h.01z" />
                  </svg>{" "}
                  Squarespace
                </NavLink>
                <NavLink to="/wordpress">
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z" />
                  </svg>{" "}
                  WordPress
                </NavLink>
                <NavLink to="/shopify">
                  <svg
                    className="nav-icon"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 109.5 124.5"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M95.9,23.9c-0.1-0.6-0.6-1-1.1-1c-0.5,0-9.3-0.2-9.3-0.2s-7.4-7.2-8.1-7.9c-0.7-0.7-2.2-0.5-2.7-0.3
		c0,0-1.4,0.4-3.7,1.1c-0.4-1.3-1-2.8-1.8-4.4c-2.6-5-6.5-7.7-11.1-7.7c0,0,0,0,0,0c-0.3,0-0.6,0-1,0.1c-0.1-0.2-0.3-0.3-0.4-0.5
		c-2-2.2-4.6-3.2-7.7-3.1c-6,0.2-12,4.5-16.8,12.2c-3.4,5.4-6,12.2-6.8,17.5c-6.9,2.1-11.7,3.6-11.8,3.7c-3.5,1.1-3.6,1.2-4,4.5
		c-0.3,2.5-9.5,73-9.5,73l76.4,13.2l33.1-8.2C109.5,115.8,96,24.5,95.9,23.9z M67.2,16.8c-1.8,0.5-3.8,1.2-5.9,1.8
		c0-3-0.4-7.3-1.8-10.9C64,8.6,66.2,13.7,67.2,16.8z M57.2,19.9c-4,1.2-8.4,2.6-12.8,3.9c1.2-4.7,3.6-9.4,6.4-12.5
		c1.1-1.1,2.6-2.4,4.3-3.2C56.9,11.6,57.3,16.5,57.2,19.9z M49.1,4c1.4,0,2.6,0.3,3.6,0.9C51.1,5.8,49.5,7,48,8.6
		c-3.8,4.1-6.7,10.5-7.9,16.6c-3.6,1.1-7.2,2.2-10.5,3.2C31.7,18.8,39.8,4.3,49.1,4z"
                      />
                      <g>
                        <path
                          className="st1"
                          d="M94.8,22.9c-0.5,0-9.3-0.2-9.3-0.2s-7.4-7.2-8.1-7.9c-0.3-0.3-0.6-0.4-1-0.5l0,109.7l33.1-8.2
			c0,0-13.5-91.3-13.6-92C95.8,23.3,95.3,22.9,94.8,22.9z"
                        />
                        <path
                          className="st2"
                          d="M58,39.9l-3.8,14.4c0,0-4.3-2-9.4-1.6c-7.5,0.5-7.5,5.2-7.5,6.4c0.4,6.4,17.3,7.8,18.3,22.9
			c0.7,11.9-6.3,20-16.4,20.6c-12.2,0.8-18.9-6.4-18.9-6.4l2.6-11c0,0,6.7,5.1,12.1,4.7c3.5-0.2,4.8-3.1,4.7-5.1
			c-0.5-8.4-14.3-7.9-15.2-21.7c-0.7-11.6,6.9-23.4,23.7-24.4C54.7,38.2,58,39.9,58,39.9z"
                        />
                      </g>
                    </g>
                  </svg>{" "}
                  Shopify
                </NavLink>
              </nav>
            </div>
            <div className="footer">
              <nav className="secondary-nav">
                <Link to="/about">About</Link>
                <Link to="/submissions">Submit</Link>
              </nav>
              <p className="copyright">
                Made by <a href="https://heathertovey.com">Heather Tovey</a>
              </p>
            </div>
          </header>
          <main>
            <Route
              exact
              path="/"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/favorites"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.favorites,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/html"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.html,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/css"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.css,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/javascript"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.javascript,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/design"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.design,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/accessibility"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.accessibility,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/squarespace"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.squarespace,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/wordpress"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.wordpress,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route
              path="/shopify"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.shopify,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
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
