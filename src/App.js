import React, { Component } from "react";
import BookList from "./componets/BookList";
import Counter from "./Counter";
import Books from "./static_data/Books";

class App extends Component {
  render() {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
