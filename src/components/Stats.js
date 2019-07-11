import React, { useEffect, useState } from "react";
import git from "../services/Git";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import ImageAvatars from "./ImageAvatars";

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
  }
}));
export default function Stats(props) {
  const [user, setUser] = useState({});
  const theme = useTheme();
  const getData = async () => {
    try {
      // let response = await git.repos.list({
      //   per_page: 100
      // });
      let userResponse = await git.users.getAuthenticated();
      setUser(userResponse.data);
      console.log(userResponse.data);
    } catch (e) {
      console.warn(e);
    }
  };
  useEffect(() => {
    getData();
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
                <Typography variant="h2" style={{ fontWeight: "bold" }}>
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
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" className={theme.marginTop}>
        <Typography paragraph style={{ fontStyle: "italic" }}>
          {user.bio ? user.bio : ""}
        </Typography>
      </Container>
      <Container maxWidth="md" className={theme.marginTop24}>
        <Paper>
          {/* <CardContent> */}
          <Grid direction="row" container spacing={2} justify="space-around">
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Repositories
              </Typography>
              <Typography variant="button">
                {user.public_repos ? user.public_repos : "..."}
              </Typography>
            </Grid>
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Followers
              </Typography>
              <Typography variant="button">
                {user.followers ? user.followers : "..."}
              </Typography>
            </Grid>
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Gists
              </Typography>
              <Typography variant="button">
                {user.public_gists ? user.public_gists : "..."}
              </Typography>
            </Grid>
            <Grid item md={3} className={theme.gridItemFlex}>
              <Typography variant="body2" className={theme.textCaps}>
                Collaborators
              </Typography>
              <Typography variant="button">
                {user.collaborators ? user.collaborators : "..."}
              </Typography>
            </Grid>
          </Grid>
          {/* </CardContent> */}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
