import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-awesome-modal';
import TodoManagerContainer from "./components/TodoManagerContainer";

class App extends Component {

  render() {
    return (
      <div className="App">
          <TodoManagerContainer />
      </div>
    );
  }
}

export default App;
