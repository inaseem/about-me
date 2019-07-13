import React from "react";
import { Route, Switch } from "react-router-dom";
import Stats from "./Stats";
import Projects from "./Projects";

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Stats} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </React.Fragment>
  );
}
