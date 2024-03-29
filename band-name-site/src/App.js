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
            <ManageWordsPage />
          </div>
        </body>
      );
    } else {
      body = (
        <body className="App-body">
          <NameDisplayObject />
        </body>
      );
    }

    return (
      <div className="App">
          {body}
          <NavBar 
            onHomeClick={this.toggleHomePage} 
            onManageClick={this.toggleManagePage} 
            showManage={this.state.showManage} 
          />
      </div>
    );
  }
}
 
export default App;
