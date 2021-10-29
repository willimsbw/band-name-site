import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './NavBar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showManage: false }
  }

  toggleManagePage(e) {
    this.setState({showManage: true});
  }

  toggleHomePage(e) {
    this.setState({showManage: false});
  }

  render() { 
    let body;
    if(this.state.showManage) {
      body = (
        <div>
          <h1>My State: {JSON.stringify(this.state)}</h1>
          <h2>management page</h2>
        </div>
      )
    } else {
      body = (
        <body className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1> Testing live rebuild </h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>My State: {JSON.stringify(this.state)}</h1>
        </body>
      );
    }

    return (
      <div className="App">
        <header><NavBar onHomeClick={this.toggleHomePage.bind(this)} onManageClick={this.toggleManagePage.bind(this)} /></header>
        {body}
      </div>
    );
  }
}
 
export default App;
