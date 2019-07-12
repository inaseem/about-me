import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Naseem from "../static/images/naseem.png";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 16,
    width: 124,
    height: 124
  }
});

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Naseem"
        src={props.url ? props.url : Naseem}
        className={classes.bigAvatar}
      />
    </Grid>
  );
}
