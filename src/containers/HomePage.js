import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TopNavBar from '../components/TopNavBar'
import ProfileCard from '../components/ProfileCard'

const styles = {
  root: {},
};

function HomePage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <TopNavBar pageTitle={'Dashboard'} />
      <ProfileCard />
    </div>
  );
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);