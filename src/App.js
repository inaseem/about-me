import React from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { HashRouter } from "react-router-dom";

library.add(fab);
class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <ButtonAppBar />
      </HashRouter>
    );
  }
}

export default App;
