import React from "react";
import CompetitionList from "../../components/CompetitionList";
import { fetchAllCompetitions } from "../../services/competitionService";

export default class MyCompetitionsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    let fetchedCompetitons = await fetchAllCompetitions({
      createdBy: this.props.User.id,
    });
    this.setState((previousState) => ({
      competitions: fetchedCompetitons,
      isLoading: false,
    }));
  }

  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>My Competitions</h3>
        </div>
        <CompetitionList competitions={this.state.competitions} style={"DASHBOARD"} />
      </div>
    );
  }
}
