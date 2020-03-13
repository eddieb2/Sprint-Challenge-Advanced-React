import React, { Component } from "react";
import axios from "axios";
import CardList from "./Components/CardList";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(res => {
      console.log(res);
      this.setState({
        players: res.data
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <CardList data={this.state} />
      </div>
    );
  }
}

export default App;
