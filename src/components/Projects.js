import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
  Typography,
  IconButton
} from "@material-ui/core";
import projects from "../static/data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function Projects() {
  const theme = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" alignItems="center">
        {projects.map((project, index) => {
          return (
            <Grid item key={index}>
              <Card className={theme.card}>
                <CardActionArea>
                  <CardMedia
                    className={theme.media}
                    image={project.thumbnail}
                    title={project.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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
                </CardActionArea>
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
