import React from "react";
import RaceRow from "./RaceRow";

const RaceList = (props) => {
  var { races } = props;
  if (races.length == 0) {
    return <span>No Races</span>;
  } else {
    var content = [];
    races.map((race) => {
      content.push(<RaceRow race={race} />);
    });

    return content;
  }
};

export default RaceList;
