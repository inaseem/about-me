import React from "react";
import { Route, Switch } from "react-router-dom";
import Stats from "./Stats";
import Projects from "./Projects";
import Certificates from "./Certificates";

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Stats} />
        <Route path="/projects" component={Projects} />
        <Route path="/cert" component={Certificates} />
      </Switch>
    </React.Fragment>
  );
}
