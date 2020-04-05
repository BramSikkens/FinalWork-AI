import React from "react";
import ResultRow from "../components/ResultRow";

export const CompetitionRaceTable = (props) => {
  const { race } = props;
  console.log(race);

  return (
    <div className="list-single-main-item fl-wrap block_box">
      <div className="list-single-main-item-title">
        <h3>
          {(race.time || "No Time") +
            " " +
            (race.boatType || "No Boat type") +
            " " +
            (race.sex || "No Sex") +
            " " +
            (race.distance || "No distance")}
        </h3>
      </div>
      <div className="list-single-main-item_content fl-wrap">
        {race.raceResults.length > 0 ? (
          race.raceResults.map((result) => <ResultRow result={result} />)
        ) : (
          <span>Geen Results</span>
        )}
      </div>
    </div>
  );
};
