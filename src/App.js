import React, { Component } from "react";
import UsernameForm from "./components/UsernameForm";
import ChatsScreen from "./components/ChatsScreen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUsername: "",
      currentScreen: "WhatIsYourUsernameScreen"
    };
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this);
  }

  onUsernameSubmitted(username) {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(response => {
        this.setState({
          currentUsername: username,
          currentScreen: "ChatsScreen"
        });
      })
      .catch(error => console.error("error", error));
  }
  render() {
    if (this.state.currentScreen === "WhatIsYourUsernameScreen") {
      return (
        <div style={{
          width: '100vw',
          height: '100vh',
          margin: '0',
          padding: '0',
          overflowY: 'auto',
          overflowX: 'hidden',
          backgroundColor: '#e3e8e2',}}>
          <UsernameForm onSubmit={this.onUsernameSubmitted} />
        </div>
      );
    }
    if (this.state.currentScreen === "ChatsScreen") {
      return (
      <div style={{
          width: '100vw',
          height: '100vh',
          margin: '0',
          padding: '0',
          overflowY: 'auto',
          overflowX: 'hidden',
          backgroundColor: '#e3e8e2',}}>        
      <ChatsScreen currentUsername={this.state.currentUsername} />
      </div>
      )
    }
  }
}
export default App;
