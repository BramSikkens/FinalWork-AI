import React, { useEffect, useState } from "react";
import { fetchResultsFromUser } from "../../services/competitionService";
import RaceList from "../../components/RaceList";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

const MyRaceSection = (props) => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    returnResultsFromUser(props.auth.user.athlete.Name);
  }, []);

  async function returnResultsFromUser(name) {
    let fetchedRacesOfUserFromService = await fetchResultsFromUser(name);

    setRaces(fetchedRacesOfUserFromService);
  }

  return (
    <div class="col-md-9">
      <div class="dashboard-title   fl-wrap">
        <h3>My Races</h3>
      </div>

      <RaceList races={races} />
    </div>
  );
};

export default connect(mapStateToProps)(MyRaceSection);
