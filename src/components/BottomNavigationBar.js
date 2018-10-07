import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RecordIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/PersonOutline';

const styles = {
  root: {
    width: '100%',
    position:'fixed',
    bottom: 0,
  },
};

class BottomNavigationBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <NavLink to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </NavLink>
        <NavLink to="/records">
          <BottomNavigationAction label="Records" icon={<RecordIcon />} />
        </NavLink>
        <BottomNavigationAction disabled label="Account" icon={<PersonIcon />} />
      </BottomNavigation>
    );
  }
}

BottomNavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavigationBar);