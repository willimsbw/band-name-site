import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './NavBar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showManage: false };
    this.toggleHomePage = this.toggleHomePage.bind(this);
    this.toggleManagePage = this.toggleManagePage.bind(this);
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
        <body className="App-body">
          <div>
            <h1>My State: {JSON.stringify(this.state)}</h1>
            <h2>management page</h2>
          </div>
        </body>
      );
    } else {
      body = (
        <body className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My State: {JSON.stringify(this.state)}</h1>
        </body>
      );
    }

    return (
      <div className="App">
        <header><NavBar onHomeClick={this.toggleHomePage} onManageClick={this.toggleManagePage} /></header>
        {body}
      </div>
    );
  }
}
 
export default App;
