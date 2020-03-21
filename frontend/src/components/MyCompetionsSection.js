import React from "react";
import CompetitionCard from "../components/CompetitionCard";
import CompetitionList from "../components/CompetitionList";

export default class MyCompetitionsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: [{}, {}, {}, {}],
      isLoading: false
    };
  }

  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>My Competitions</h3>
        </div>
        <div class="profile-edit-container fl-wrap block_box">
          <CompetitionList competitions={this.state.competitions} />
        </div>
      </div>
    );
  }
}
