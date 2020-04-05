import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Switch, Route } from "react-router";

import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Competitions from "./Competitions";
import SingleCompetition from "./SingleCompetition";
import CategoryResults from "./CategoryResults";
import Login from "./Login";
import RegisterLoginModal from "../components/RegisterLoginModal";

function App() {
  return (
    <>
      <RegisterLoginModal />
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/competitions" component={Competitions} />
        <Route path="/competition" component={SingleCompetition} />
        <Route path="/categoryResult" component={CategoryResults} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
