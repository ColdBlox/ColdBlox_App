import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Line} from 'react-chartjs-2';

const styles = {
  card: {
    width: '90%',
    marginTop: '20px',

  },
  media: {
    height: 140,
  },
};

function RecordCard(props) {

  const { classes, data } = props;

  console.log(data)

  const lineData = {
    labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
    datasets: [
      {
        label: 'Temperature Graph',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data
      }
    ]
  };

  if (!data) {
    return <div></div>
  }

  return (
    <Grid container justify = "center">
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Grid item xs={12}>
              <Typography gutterBottom variant="body2" component="h2">
                Company Represented
              </Typography>
              <Typography variant="headline">
                MB Transportation
              </Typography>
            </Grid>
            <hr />
            <Grid item xs={12}>
              <Typography gutterBottom variant="body2" component="h2">
                Name
              </Typography>
              <Typography variant="headline">
                Julian Hans Khanovic
              </Typography>
            </Grid>
            <hr />
            <Grid item xs={12}>
              <Line data={lineData} />
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    </Grid>
  );
}

RecordCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecordCard);