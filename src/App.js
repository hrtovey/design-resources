import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Resource from "./Resource";
import resources from "./resources";

class App extends React.Component {
  state = {
    resources: {}
  };

  loadResources = () => {
    this.setState({
      resources: resources
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">Design Resources</div>
        </header>
        <div className="resources">
          <ul className="resources__list">
            {Object.keys(this.state.resources).map(key => (
              <Resource
                key={key}
                index={key}
                details={this.state.resources[key]}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
