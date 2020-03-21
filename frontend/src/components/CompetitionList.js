import Pagination from "./Pagination";
import React from "react";
import CompetitionCard from "../components/CompetitionCard";
const CompetitionList = props => {
  var { competitions } = props;
  if (competitions.length == 0) {
    return <span>No Competitions</span>;
  } else {
    var content = [];
    competitions.map(competition => {
      content.push(<CompetitionCard Competition={competition} />);
    });

    if (content.length > 6) {
      content.push(<Pagination total={5} currentPage={2} />);
    }
    return content;
  }
};

export default CompetitionList;
