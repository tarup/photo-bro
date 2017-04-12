import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import { Link } from 'react-router'

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <Link href="/">
            <img src={logo} className="App-logo" alt="logo"/>
          </Link>
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
