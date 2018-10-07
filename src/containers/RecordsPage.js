import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TopNavBar from '../components/TopNavBar'
import RecordCard from '../components/RecordCard'
import {getReadings} from '../actions/api'

const styles = {
  root: {},
};

class RecordsPage extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    const tempPromise = getReadings()
    tempPromise.then((result) => {
      this.setState({
        data: result['temp']
      })
    })
  }

  render() {

    if (!this.state.data) {
      return <div></div>
    }

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TopNavBar pageTitle={'Records'} />
          <RecordCard data={this.state.data}/>
      </div>
    );
  }
}

RecordsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecordsPage);