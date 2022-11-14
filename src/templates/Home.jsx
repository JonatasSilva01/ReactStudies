import "./Home.css";
import { useCallback, useEffect, useState, Component } from "react";

export class Home extends Component {
  state = {
    counter: 0,
  }

  hendleClick = () => {
    this.setState(
      ({ counter }, { incrementNumber }) => {
        return { counter: counter + incrementNumber }
      },
      () => {
        console.log('POST', this.state.counter)
      }
    )
    console.log(this.state.counter);
  }

  render() {
    return(
      <div className="container">
        <h1>
          {this.state.counter}
        </h1>
        <button onClick={this.hendleClick}>Click</button>
      </div>
    )
  }
};

export default Home;
