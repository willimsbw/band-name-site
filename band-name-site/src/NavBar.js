import './NavBar.css';
import React from 'react';
import PropTypes from "prop-types";

class NavBar extends React.Component {
    render() {
      return (
        <div class="header-row">
          <div onClick={this.props.onHomeClick} className={this.props.showManage ? "header-entry" : "header-entry active"}>
            Home
          </div>
          <div onClick={this.props.onManageClick} className={this.props.showManage ? "header-entry active" : "header-entry"}>
            Manage
          </div>
        </div>
      );
    }
}

NavBar.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onManageClick: PropTypes.func.isRequired,
  showManage: PropTypes.bool.isRequired
}

export default NavBar;