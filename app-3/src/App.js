import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      filter: ""
    };
  }

  handleChange(val){
    this.setState({ filter: val })
  }

  render() {
    let foodstoDisplay = this.state.list
    .filter((element, index) => {
      return element.includes(this.state.filter)
    })
    .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
    })
    
    return (
        
    <div className="App">
    <input onChange = {(event) => this.handleChange(event.target.value)} type="text" />
        { foodstoDisplay}
    </div>
    )
  }
}

export default App;
