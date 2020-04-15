import React from "react";

export default class RaceRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-list fl-wrap">
        <div className="dashboard-message">
          <div className="dashboard-message-text">
            <i className="fal  red-bg">1</i>
            <p>
              <a href="#"> RACICE (CZE) WorldChampionships 2018 K2 MEN 1000 HEAT </a>
            </p>
          </div>
          <div className="dashboard-message-time"></div>
        </div>
      </div>
    );
  }
}
