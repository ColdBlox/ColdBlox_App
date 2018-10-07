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

const styles = {
  card: {
    maxWidth: 345,
    marginTop: '20px',

  },
  media: {
    height: 140,
  },
};

function ProfileCard(props) {
  const { classes } = props;
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
            <Grid item xs={6}>
              <Typography gutterBottom variant="body2" component="small">
                Ongoing Trips
              </Typography>
              <Typography component="small">
                12
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom variant="body2" component="small">
                Certification Ratio
              </Typography>
              <Typography component="small">
                0.998
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);