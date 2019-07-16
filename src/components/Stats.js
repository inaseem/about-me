import React, { useEffect, useState } from "react";
import octokit from "../services/Git";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import ImageAvatars from "./ImageAvatars";
import Companies from "./Companies";
import Social from "./Social";

const useTheme = makeStyles(theme => ({
  gridContainer: {
    flexGrow: 1
  },
  gridItemFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textCaps: {
    fontVariant: "all-petite-caps",
    color: "rgba(0,0,0,0.5)",
    fontSize: "18px",
    fontWeight: "bold"
  },
  hello: {
    color: "rgba(0,0,0,0.5)",
    fontWeight: "bold",
    fontVariant: "all-petite-caps"
  },
  hire: {
    marginTop: "16px",
    color: "white",
    backgroundColor: "#4BB543"
    // backgroundColor: "#00ff00"
  },
  marginTop: {
    marginTop: "16px"
  },
  marginTop20: {
    marginTop: "20px"
  },
  marginTop24: {
    marginTop: "24px"
  },
  heading: {
    marginTop: "16px",
    fontSize: "18px",
    color: "#242424"
  },
  bold: {
    fontWeight: "bold"
  }
}));
export default function Stats(props) {
  const [user, setUser] = useState({});
  const [company, setCompany] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    // signal.addEventListener("abort", (e) => {
    //   console.log("Aborted Request",e);
    // });
    const getData = async () => {
      try {
        let userResponse = await octokit.users.getAuthenticated({
          request: { signal }
        });
        setUser(userResponse.data);
        let orgsResponse = await octokit.orgs.listForAuthenticatedUser({
          request: {
            signal
          }
        });
        setCompany(orgsResponse.data);
      } catch (err) {
        console.info(err.name, "Request Aborted");
      }
    };
    getData();
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Grid
          direction="row"
          container
          spacing={2}
          className={theme.gridContainer}
        >
          <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
            <Grid
              direction="column"
              container
              className={theme.gridContainer}
              // alignItems="center"
              justify="flex-start"
            >
              <Grid item md={12}>
                <Typography variant="body2" className={theme.hello}>
                  Hello
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                  I'm {user.name ? user.name.split(" ")[0] : "Naseem"}
                </Typography>
              </Grid>
              {user.hireable ? (
                <Grid item md={12}>
                  <Button
                    size="medium"
                    variant="contained"
                    color="primary"
                    className={theme.hire}
                  >
                    Hire Me
                  </Button>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <ImageAvatars url={user.avatar_url ? user.avatar_url : ""} />
            <Social />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" className={theme.marginTop24}>
        <Paper>
          <Grid direction="row" container spacing={2} justify="space-around">
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Repositories
              </Typography>
              <Typography className={theme.bold}>
                {user.public_repos ? user.public_repos : "..."}
              </Typography>
            </Grid>
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Followers
              </Typography>
              <Typography className={theme.bold}>
                {user.followers ? user.followers : "..."}
              </Typography>
            </Grid>
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Gists
              </Typography>
              <Typography className={theme.bold}>
                {user.public_gists ? user.public_gists : "..."}
              </Typography>
            </Grid>
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Collaborators
              </Typography>
              <Typography className={theme.bold}>
                {user.collaborators ? user.collaborators : "..."}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Container maxWidth="md" className={theme.marginTop}>
        <Grid container justify="flex-start" direction="column">
          <Grid item md={12}>
            <Typography variant="h6" className={theme.heading}>
              About me
            </Typography>
          </Grid>
          <Grid item md={12}>
            <Typography
              paragraph
              style={{ fontStyle: "italic", marginTop: "8px" }}
            >
              {user.bio ? user.bio : ""}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {company.length > 0 ? (
        <Container maxWidth="md">
          <Companies orgs={company} />
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
