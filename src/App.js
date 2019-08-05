import React from "react";
import Router from "./Router.js";
import "./App.css";
import resources from "./resources";

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
        <h1>Awesome</h1>

        <Router />
      </div>
    );
  }
}

export default App;
