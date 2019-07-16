import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  IconButton
} from "@material-ui/core";
import projects from "../static/data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import Oyebooks from "../static/images/oyebooks.webp";
import Abhitak from "../static/images/abhitak.jpg";
import Graphing from "../static/images/graphing.png";

const thumbnails = [Abhitak, Oyebooks, Graphing];
const thief = new window.ColorThief();

const useStyles = makeStyles({
  card: {
    maxWidth: 280,
    display: "flex",
    height: "100%",
    flexDirection: "column"
  },
  media: {
    height: 160,
    objectFit: "contain",
    backgroundSize: "contain"
  },
  description: {
    flexGrow: "1"
  }
});

const getData = (index, setColors) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = thumbnails[index];
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
    const imgs = thumbnails.map((imgUrl, index) => {
      return getData(index, setColors);
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
                  image={thumbnails[index]}
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
                  <IconButton aria-label="GitHub">
                    {/* <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    > */}
                    <FontAwesomeIcon icon={["fab", "github"]} color="#161616" />
                    {/* </a> */}
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}
