import React from "react";
import { makeStyles, Grid, Paper, Button } from "@material-ui/core";
import Android from "../static/cert/nano_android.png";
import AWS from "../static/cert/aws.png";
import Internshala from "../static/cert/internshala.png";

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
const certs = [AWS, Android, Internshala];

const data = [
  {
    name: "AWS Fundamentals: Going Cloud-Native",
    issuer: "Coursera",
    expires: false,
    type: "Certification",
    issueDates: {
      start: "Jan, 2019",
      end: ""
    },
    credentialId: "HDHU7HWUPA9L",
    url: "https://www.coursera.org/account/accomplishments/verify/HDHU7HWUPA9L"
  },
  {
    name: "Android Basics Nanodegree by Google",
    issuer: "Udacity",
    expires: false,
    type: "Certification",
    issueDates: {
      start: "Nov, 2018",
      end: ""
    },
    credentialId: "TMSE4GVX",
    url: "https://confirm.udacity.com/TMSE4GVX"
  },
  {
    name: "Obiquos Technologies Private Limited",
    issuer: "Obiquos",
    expires: false,
    type: "Internship",
    issueDates: {
      start: "Jun, 2018",
      end: ""
    },
    credentialId: "",
    url: ""
  }
];
export default function Certificates() {
  const theme = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="stretch" spacing={3}>
        {data.map((cert, index) => {
          return (
            <Grid item key={index}>
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
                    src={certs[index]}
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
