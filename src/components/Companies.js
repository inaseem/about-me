import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import octokit from "../services/Git";

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: "16px",
    fontSize: "18px",
    color: "#242424"
  },
  imgResponse: {
    margin: "16px",
    width: "72px",
    height: "72px"
  }
}));

export default function Companies(props) {
  const theme = useStyles();

  const getIssues = async () => {
    // const response = await octokit.issues.listForAuthenticatedUser({
    //   filter: "all",
    //   per_page: "100"
    // });
    /*
     *await octokit.issues.listForRepo({owner:"elastic",repo:"elasticsearch-js", creator:"naseemali925", state:"all"}) 
     */
    const response = await octokit.activity.listEventsForUser({
        username:"naseemali925"
      })
    console.log(response.data);
  };
  React.useEffect(() => {
    getIssues();
  }, []);
  const { orgs } = props;
  let index = 0;
  const items = orgs.map(org => {
    return (
      <Grid item key={index++}>
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <img
              src={org.avatar_url}
              alt={org.login}
              className={theme.imgResponse}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2">{org.login}</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return (
    <React.Fragment>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item md={12}>
          <Typography variant="h6" className={theme.heading}>
            Worked with
          </Typography>
        </Grid>
        {items}
      </Grid>
    </React.Fragment>
  );
}
