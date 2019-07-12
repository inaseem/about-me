import React from "react";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import octokit from "../services/Git";
import Organizations from "../static/data/contributions.json";

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
  let [contributions, setContributions] = React.useState([]);

  React.useEffect(() => {
    const getIssues = async () => {
      const promises = Organizations.names.map(org => {
        return octokit.orgs.get({
          org: org.owner
        });
      });
      const response = await Promise.all(promises);
      setContributions(response.map(item => item.data));
      console.log(response);
    };
    getIssues();
  }, []);
  let index = 0;

  contributions = contributions.map(org => {
    return (
      <Grid item key={index++}>
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <img
              src={org.avatar_url}
              alt={org.name ? org.name : org.login}
              className={theme.imgResponse}
            />
          </Grid>
          <Grid item>
            <Typography variant="body2">
              {org.name ? org.name : org.login}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return contributions.length > 0 ? (
    <React.Fragment>
      <Grid container justify="flex-start" alignItems="center">
        <Grid item md={12}>
          <Typography variant="h6" className={theme.heading}>
            Worked with
          </Typography>
        </Grid>
        {contributions}
      </Grid>
    </React.Fragment>
  ) : (
    ""
  );
}
