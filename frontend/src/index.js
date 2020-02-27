import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Competitions from "./pages/Competitions";
import SingleCompetition from "./pages/SingleCompetition";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/competitions" component={Competitions} />
      <Route path="/competition" component={SingleCompetition} />
      <Route path="/404" component={NotFound} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
