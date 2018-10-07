import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BellIcon from '@material-ui/icons/Notifications';
import AccountIcon from '@material-ui/icons/AccountCircle'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TopNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton disabled className={classes.menuButton} color="inherit">
            <BellIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            { props.pageTitle }
          </Typography>
          <IconButton disabled color="inherit">
            <AccountIcon />
          </IconButton>


        </Toolbar>
      </AppBar>
    </div>
  );
}

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNavBar);