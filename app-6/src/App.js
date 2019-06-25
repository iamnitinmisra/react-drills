import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      input: ""
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let listToDisplay = this.state.list.map((element, index) => {
      return <h3 key={index}>{element}</h3>;
    })
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={event => this.handleInputChange(event.target.value)}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {listToDisplay}
      </div>
    );
  }
}

export default App;
