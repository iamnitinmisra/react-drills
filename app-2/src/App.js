import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }
  render() {
    let foodstoDisplay = this.state.list.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="App">{foodstoDisplay}</div>;
  }
}

export default App;
