// To Do
// - remove category from resource ids in case they're moved around in the future
// - scroll to top on page change
// - reduce size on background image
// - make a favicon
// - add more resources
// - create Mailchimp workflow
// - launch and test!
// - share!

import React from "react";
import { NavLink, Link, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import resources from "./resources";
import SubmitPage from "./Components/SubmitPage";
import ThankYouPage from "./Components/ThankYouPage";
import AboutPage from "./Components/AboutPage";
import ResourcesPage from "./Components/ResourcesPage";
import HomePage from "./Components/HomePage";
import NewsletterPage from "./Components/NewsletterPage";

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
      favorited: [],
      isActive: false
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

  closeMenu = () => {
    this.setState({ isActive: false });
  };

  openMenu = () => {
    this.setState({ isActive: true });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header className={this.state.isActive ? "active" : ""}>
            <button className="close menu-button" onClick={this.closeMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
              </svg>
            </button>
            <div className="categories">
              <p className="categories__title">Categories</p>
              <nav className="primary-nav">
                <NavLink exact to="/" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                  </svg>{" "}
                  Home
                </NavLink>
                <NavLink to="/favorites" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                  </svg>{" "}
                  Favorites
                </NavLink>
                <NavLink to="/learn-to-code" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
                  </svg>{" "}
                  Learn to Code
                </NavLink>
                <NavLink to="/design" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                  </svg>{" "}
                  Design
                </NavLink>
                <NavLink to="/accessibility" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z" />
                  </svg>{" "}
                  Accessibility
                </NavLink>
                <NavLink to="/squarespace" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M186.12 343.34c-9.65 9.65-9.65 25.29 0 34.94 9.65 9.65 25.29 9.65 34.94 0L378.24 221.1c19.29-19.29 50.57-19.29 69.86 0s19.29 50.57 0 69.86L293.95 445.1c19.27 19.29 50.53 19.31 69.82.04l.04-.04 119.25-119.24c38.59-38.59 38.59-101.14 0-139.72-38.59-38.59-101.15-38.59-139.72 0l-157.22 157.2zm244.53-104.8c-9.65-9.65-25.29-9.65-34.93 0l-157.2 157.18c-19.27 19.29-50.53 19.31-69.82.05l-.05-.05c-9.64-9.64-25.27-9.65-34.92-.01l-.01.01c-9.65 9.64-9.66 25.28-.02 34.93l.02.02c38.58 38.57 101.14 38.57 139.72 0l157.2-157.2c9.65-9.65 9.65-25.29.01-34.93zm-261.99 87.33l157.18-157.18c9.64-9.65 9.64-25.29 0-34.94-9.64-9.64-25.27-9.64-34.91 0L133.72 290.93c-19.28 19.29-50.56 19.3-69.85.01l-.01-.01c-19.29-19.28-19.31-50.54-.03-69.84l.03-.03L218.03 66.89c-19.28-19.29-50.55-19.3-69.85-.02l-.02.02L28.93 186.14c-38.58 38.59-38.58 101.14 0 139.72 38.6 38.59 101.13 38.59 139.73.01zm-87.33-52.4c9.64 9.64 25.27 9.64 34.91 0l157.21-157.19c19.28-19.29 50.55-19.3 69.84-.02l.02.02c9.65 9.65 25.29 9.65 34.93 0 9.65-9.65 9.65-25.29 0-34.93-38.59-38.59-101.13-38.59-139.72 0L81.33 238.54c-9.65 9.64-9.65 25.28-.01 34.93h.01z" />
                  </svg>{" "}
                  Squarespace
                </NavLink>
                <NavLink to="/wordpress" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119.3 8 8 119.2 8 256c0 136.7 111.3 248 248 248s248-111.3 248-248C504 119.2 392.7 8 256 8zM33 256c0-32.3 6.9-63 19.3-90.7l106.4 291.4C84.3 420.5 33 344.2 33 256zm223 223c-21.9 0-43-3.2-63-9.1l66.9-194.4 68.5 187.8c.5 1.1 1 2.1 1.6 3.1-23.1 8.1-48 12.6-74 12.6zm30.7-327.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-21.9 0-58.7-2.8-58.7-2.8-12-.7-13.4 17.7-1.4 18.4 0 0 11.4 1.4 23.4 2.1l34.7 95.2L200.6 393l-81.2-241.5c13.4-.7 25.5-2.1 25.5-2.1 12-1.4 10.6-19.1-1.4-18.4 0 0-36.1 2.8-59.4 2.8-4.2 0-9.1-.1-14.4-.3C109.6 73 178.1 33 256 33c58 0 110.9 22.2 150.6 58.5-1-.1-1.9-.2-2.9-.2-21.9 0-37.4 19.1-37.4 39.6 0 18.4 10.6 33.9 21.9 52.3 8.5 14.8 18.4 33.9 18.4 61.5 0 19.1-7.3 41.2-17 72.1l-22.2 74.3-80.7-239.6zm81.4 297.2l68.1-196.9c12.7-31.8 17-57.2 17-79.9 0-8.2-.5-15.8-1.5-22.9 17.4 31.8 27.3 68.2 27.3 107 0 82.3-44.6 154.1-110.9 192.7z" />
                  </svg>{" "}
                  WordPress
                </NavLink>
                <NavLink to="/shopify" onClick={this.closeMenu}>
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
                <NavLink to="/productivity" onClick={this.closeMenu}>
                  <svg
                    className="nav-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z" />
                  </svg>{" "}
                  Productivity
                </NavLink>
              </nav>
            </div>
            <div className="footer">
              <Link
                className="sign-up"
                to="/weekly-digest"
                onClick={this.closeMenu}
              >
                Weekly Digest
              </Link>
              <nav className="secondary-nav">
                <Link to="/about" onClick={this.closeMenu}>
                  About
                </Link>
                <Link to="/submissions" onClick={this.closeMenu}>
                  Submit
                </Link>
              </nav>
              <p className="copyright">
                Made by <a href="https://heathertovey.com">Heather Tovey</a>
              </p>
            </div>
          </header>
          <main>
            <button className="open menu-button" onClick={this.openMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
              </svg>
            </button>
            <Route
              exact
              path="/"
              render={props => (
                <HomePage
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
              path="/learn-to-code"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.learntocode,
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
            <Route
              path="/productivity"
              render={props => (
                <ResourcesPage
                  {...props}
                  state={{
                    resources: this.state.resources.productivity,
                    favorited: this.state.favorited
                  }}
                  addToFavorites={this.addToFavorites}
                />
              )}
            />
            <Route path="/submissions" component={SubmitPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/weekly-digest" component={NewsletterPage} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
