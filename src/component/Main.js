import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import Slide from "react-reveal/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(25),
      height: theme.spacing(25),
      marginTop: "-30px",
    },
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <Slide bottom>
      <div className={classes.root}>
        <Paper
          elevation={3}
          style={{ backgroundColor: "#8a307f", color: "white" }}
        >
          <IconButton edge="start" aria-label="home">
            <img
              src="/images/vidicon.png"
              alt="videoicon"
              height="50px"
              width="50px"
            />
          </IconButton>
          <Typography variant="h5" component="h2">
            Watch Videos
          </Typography>
          <Typography variant="body2" component="p">
            Watch All Bootcamp videos and Learn how to code.
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          style={{ backgroundColor: "#79a7d3", color: "white" }}
        >
          <IconButton edge="start" aria-label="home">
            <img
              src="/images/practicedaily.png"
              alt="practicedaily"
              height="50px"
              width="50px"
              style={{ backgroundColor: "transparent" }}
            />
          </IconButton>
          <Typography variant="h5" component="h2">
            Practice Daily
          </Typography>
          <Typography variant="body2" component="p">
            You must need to Practice Daily to Achive Goals.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          style={{ backgroundColor: "#6883bc", color: "white" }}
        >
          <IconButton edge="start" aria-label="home">
            <img
              src="/images/fullstack.png"
              alt="developer"
              height="50px"
              width="50px"
              style={{ backgroundColor: "transparent" }}
            />
          </IconButton>
          <Typography variant="h5" component="h2">
            Full Stack Developer
          </Typography>
          <Typography variant="body2" component="p">
            You become Full Stack Developer after Bootcamp
          </Typography>
        </Paper>
      </div>
    </Slide>
  );
}
