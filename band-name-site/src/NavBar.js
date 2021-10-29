import './NavBar.css';
import React, { Component } from 'react';
import PropTypes from "prop-types";

class NavBar extends Component {
    render() {
        return (
          <div class="header-row">
            <div onClick={this.props.onHomeClick} className="header-entry">
              Home
            </div>
            <div onClick={this.props.onManageClick} className="header-entry">
              Manage
            </div>
          </div>
        );
    }
}

NavBar.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onManageClick: PropTypes.func.isRequired
}

export default NavBar;