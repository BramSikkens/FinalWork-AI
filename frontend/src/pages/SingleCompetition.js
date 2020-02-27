import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class SingleCompetition extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Single Component where to check races</h1>
        <Footer />
      </React.Fragment>
    );
  }
}
