import React from "react";
import { fetchResultsFromUser } from "../services/competitionService";
import RaceList from "./RaceList";

export default class MyRaceSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    let fetchedRacesOfUserFromService = await fetchResultsFromUser("LOL");
    this.setState({ races: fetchedRacesOfUserFromService, isLoading: false });
    console.log(this.state);
  }

  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>My Races</h3>
        </div>

        <RaceList races={this.state.races} />
      </div>
    );
  }
}
