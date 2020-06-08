import React from "react";

export default class RaceRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      BoatType,
      Category,
      Title,
      distance,
      rank,
      competitionRound,
    } = this.props.race;

    return (
      <div className="dashboard-list fl-wrap">
        <div className="dashboard-message">
          <div className="dashboard-message-text">
            <i className="fal  red-bg">{rank}</i>
            <p>
              <a href="#">
                {Title +
                  "-" +
                  BoatType +
                  " " +
                  Category +
                  " " +
                  distance +
                  " " +
                  competitionRound}
              </a>
            </p>
          </div>
          <div className="dashboard-message-time"></div>
        </div>
      </div>
    );
  }
}
