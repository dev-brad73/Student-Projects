import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import "@fontsource/roboto";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import High_Scores from "./pages/High_Scores";
import Info from "./pages/Info";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <div>
          <header className="App-header-1">
            <ul className="app-ul">
              <li className="app-li">
                <Link to="/" style={{ textDecoration: "none", color: "#FFF" }}>
                  Home
                </Link>
              </li>
              <li className="app-li">
                <Link
                  to="/info"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  Info
                </Link>
              </li>
              <li className="app-li">
                <Link
                  to="/game"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  Game
                </Link>
              </li>
              <li className="app-li">
                <Link
                  to="/high_scores"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  High Scores
                </Link>
              </li>
            </ul>
          </header>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/game" component={Game} />
          <Route path="/high_scores" component={High_Scores} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
