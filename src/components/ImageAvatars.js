import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Naseem from '../static/images/naseem.png';

const useStyles = makeStyles({
  avatar: {
    margin: 16,
  },
  bigAvatar: {
    margin: 16,
    width: 100,
    height: 100,
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      {/* <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className={classes.avatar}
      /> */}
      <Avatar alt="Naseem" src={Naseem} className={classes.bigAvatar} />
    </Grid>
  );
}
