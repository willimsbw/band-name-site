import './NavBar.css';
import React from 'react';
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {selectedValue: 0}
      this.setValue = this.setValue.bind(this);
    }

    setValue(value) {
      this.setState({selectedValue: value});
    }
   
    render() {
      return (
        <Paper className="nav-row-container" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <Box className="nav-row">
            <BottomNavigation
              showLabels
              value={this.state.selectedValue}
              onChange={(event, newValue) => {
                this.setValue(newValue);
              }}
            >
              <BottomNavigationAction sx={{flex: .5}} label="Home" icon={<HomeIcon />} onClick={this.props.onHomeClick} />
              <BottomNavigationAction sx={{flex: .5}} label="Manage" icon={<MenuIcon />} onClick={this.props.onManageClick} />
            </BottomNavigation>
          </Box>
        </Paper>
    );}
}

NavBar.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onManageClick: PropTypes.func.isRequired,
  showManage: PropTypes.bool.isRequired
}

export default NavBar;