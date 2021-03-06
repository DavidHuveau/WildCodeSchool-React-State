import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";

class App extends Component {
  constructor(){
    super();
    this.state={
      working: false  
    }
  }

  alterAnime(){
    this.setState({
      working: !this.state.working
    })
  }

  render() {
    const turbo = this.state.working?"App-logo-working":"App-logo";
    const actionLabel = this.state.working?"En pause!":"Au travail!";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={turbo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        {/* <p>{this.state.working.toString()}</p> */}
        <button onClick={this.alterAnime.bind(this)}>{actionLabel}</button>
        <Quotes/>
      </div>
    );
  }
}

export default App;