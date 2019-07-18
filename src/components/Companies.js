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
  },
  textFlow: {
    width: "100px",
    textAlign: "center",
    // whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  flexItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  }
}));

export default function Companies(props) {
  const theme = useStyles();
  let [contributions, setContributions] = React.useState([]);

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const getIssues = async () => {
      const promises = Organizations.names.map(org => {
        return octokit.orgs.get({
          org: org.owner,
          request: { signal }
        });
      });
      const response = await Promise.all(promises);
      setContributions(response.map(item => item.data));
    };
    getIssues();

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  contributions = contributions.map((org, index) => {
    return (
      <Grid item key={index} xs={6} md={2} className={theme.flexItem}>
        <Grid item>
          <img
            src={org.avatar_url}
            alt={org.name ? org.name : org.login}
            className={theme.imgResponse}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            component="div"
            className={theme.textFlow}
          >
            {org.name ? org.name : org.login}
          </Typography>
        </Grid>
      </Grid>
    );
  });
  return contributions.length > 0 ? (
    <React.Fragment>
      <Typography variant="h6" className={theme.heading}>
        Contributed To
      </Typography>
      <Grid container justify="flex-start" direction="row">
        {contributions}
      </Grid>
    </React.Fragment>
  ) : (
    ""
  );
}
