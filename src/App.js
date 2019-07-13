import React from "react";
import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";

library.add(fab);
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ButtonAppBar />
        </div>
      </Router>
    );
  }
}

export default App;
