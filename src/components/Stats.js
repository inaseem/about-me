import React, { useContext, useEffect, useState } from "react";
import git from "../services/Git";
import { Container, Card, CardContent, Grid } from "@material-ui/core";
import { get } from "http";

export default function Stats(props) {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await git.repos.list({
          per_page: 100
        });
        console.log(response.data);
        setData(response.data);
        let userResponse = await git.users.getAuthenticated()
        console.log(userResponse)
      } catch (e) {
        console.warn(e);
      }
    };
    getData();
  });
  let index = 0;
  const items = data
    .filter(d => d.stargazers_count > 0)
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })
    .map(d => {
      return (
        <Grid item md={4} key={index++}>
          {d.name}
        </Grid>
      );
    });
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Grid direction="row" container spacing={2} justify="center">
              {items}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}
