import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@material-ui/core";
import Email from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    width: "16px",
    height: "auto"
  }
}));

export default function Social() {
  const theme = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" alignContent="center" spacing={2}>
        <Grid item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/thisismenaseem/"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} color="#0077B5" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://github.com/naseemali925"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "github"]} color="#161616" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.instagram.com/naseem.ali.925/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} color="#e4405f" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.facebook.com/naseem.ali.1466"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} color="#3b5999" />
          </a>
        </Grid>

        <Grid item>
          <a
            href="https://twitter.com/thisismenaseem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} color="#55acee" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="mailto:naseem.ali.925@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email className={theme.icon} />
          </a>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
