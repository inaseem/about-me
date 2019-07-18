import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

let user = { image: "user/naseem.png", name: "Naseem" };
const useStyles = makeStyles({
  bigAvatar: {
    margin: 16,
    width: 124,
    height: 124
  }
});

const normalize = url => {
  return process.env.PUBLIC_URL + "/static/" + url;
};

export default function ImageAvatars(props) {
  const classes = useStyles();
  user = Object.keys(props.user).length > 0 ? props.user : user;
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt={user.name}
        src={
          Object.keys(props.user).length > 0
            ? user.image
            : normalize(user.image)
        }
        className={classes.bigAvatar}
      />
    </Grid>
  );
}
