import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton,
  Chip
} from "@material-ui/core";
import projects from "../static/data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";

const thief = new window.ColorThief();

const useStyles = makeStyles({
  card: {
    maxWidth: 280,
    display: "flex",
    height: "100%",
    flexDirection: "column",
    boxShadow: "0 30px 40px 0 rgba(16, 36, 94, 0.2)"
  },
  media: {
    height: 160,
    objectFit: "contain",
    backgroundSize: "contain"
  },
  description: {
    flexGrow: "1"
  },
  root: {
    backgroundColor: "#4BB543"
  }
});

const normalize = path => {
  return process.env.PUBLIC_URL + "/static/" + path;
};

const getData = (index, url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = normalize(url);
    img.crossOrigin = "";
    img.addEventListener(
      "load",
      function() {
        try {
          const imgColor = thief.getColor(img, 90);
          resolve({ index, color: imgColor });
        } catch (e) {
          reject();
        }
      },
      false
    );
  });
};

export default function Projects() {
  const theme = useStyles();
  const [colors, setColors] = React.useState({});
  React.useEffect(() => {
    const imgs = projects.map((project, index) => {
      return getData(index, project.image);
    });
    Promise.all(imgs)
      .then(response => {
        response.forEach(data => {
          setColors(c => {
            return { ...c, [data.index]: data.color };
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
    return function cleanup() {};
  }, []);
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        {projects.map((project, index) => {
          return (
            <Grid item key={index}>
              <Card className={theme.card}>
                <CardMedia
                  style={
                    colors[index]
                      ? {
                          backgroundColor: `rgb(${colors[index][0]},${
                            colors[index][1]
                          },${colors[index][2]})`
                        }
                      : {}
                  }
                  className={theme.media}
                  image={normalize(project.image)}
                  title={project.title}
                />
                <CardContent className={theme.description}>
                  <Typography gutterBottom variant="h6">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  <IconButton
                    aria-label="GitHub"
                    onClick={() => {
                      window.open(project.github, "_blank");
                    }}
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} color="#161616" />
                  </IconButton>
                  <Chip size="small" label={project.type.toUpperCase()} />
                  {project.isLive ? (
                    <Chip
                      size="small"
                      label="It's Live!"
                      clickable
                      className={theme.root}
                      color="primary"
                      onClick={() => {
                        window.open(project.url, "_blank");
                      }}
                    />
                  ) : (
                    ""
                  )}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
