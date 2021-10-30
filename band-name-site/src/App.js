import React from 'react';
import './App.css';
import NavBar from './NavBar'
import NameDisplayObject from './NameDisplayObject';
import ManageWordsPage from './ManageWordsPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showManage: false 
    };
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
            <h2>management page</h2>
            
          </div>
        </body>
      );
    } else {
      body = (
        <body className="App-body">
          <NameDisplayObject />
          <ManageWordsPage />
        </body>
      );
    }

    return (
      <div className="App">
        <header><NavBar onHomeClick={this.toggleHomePage} onManageClick={this.toggleManagePage} showManage={this.state.showManage} /></header>
        {body}
      </div>
    );
  }
}
 
export default App;
