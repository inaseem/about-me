import React from "react";
import { makeStyles, Grid, Paper, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import certs from "../static/data/certs.json";

const useStyles = makeStyles({
  paper: {
    // height: `calc(100vh - 112px)`,
    boxShadow: "0 30px 40px 0 rgba(16, 36, 94, 0.2)"
  },
  img: {
    width: "100%",
    height: "auto"
  },
  anchor: {
    display: "flex",
    flexDirection: "column",
    textDecoration: "none"
  }
});

const normalize = path => {
  return process.env.PUBLIC_URL + "/static/" + path;
};

export default function Certificates() {
  const theme = useStyles();
  const matches = useMediaQuery("(max-width:600px)");
  const maxWidth = matches ? "100%" : "70%";
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="stretch" spacing={3}>
        {certs.map((cert, index) => {
          return (
            <Grid item key={index} style={{ width: maxWidth }}>
              <Paper className={theme.paper}>
                <a
                  href={cert.url}
                  className={theme.anchor}
                  onClick={e => {
                    if (!cert.url) e.preventDefault();
                  }}
                >
                  <Button variant="outlined">{cert.name}</Button>
                  <img
                    src={normalize(cert.image)}
                    alt={cert.name}
                    className={theme.img}
                    title={cert.name}
                  />
                </a>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
