import React, { useEffect } from "react";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const TOKEN = process.env.REACT_APP_TOKEN;
console.log(`TOKEN =${TOKEN}`);

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 16
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
export default function PersonalInfo() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.github.com/user/repos",
        {
          headers: { Authorization: `token ${TOKEN}` }
        }
      );
      console.log(`Response = ${response.data}`);
      setData(response.data);
    };
    fetchData();
  });

  return (
    <Card className={classes.card}>
      <CardContent />
    </Card>
  );
}
