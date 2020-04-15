import React from "react";
import { Route, Switch } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRoute from "../components/ProtectedRoute";
import RegisterLoginModal from "../components/RegisterLoginModal";
import CategoryResults from "./CategoryResults";
import Competitions from "./Competitions";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import SingleCompetition from "./SingleCompetition";

function App() {
  return (
    <>
      <RegisterLoginModal />
      <Header />
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/competitions" component={Competitions} />
        <Route path="/competition" component={SingleCompetition} />
        <Route path="/categoryResult" component={CategoryResults} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
