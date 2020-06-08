import Pagination from "./Pagination";
import React from "react";
import CompetitionCard from "../components/CompetitionCard";
import ItemActionRowCard from "../components/ItemActionRowCard";
import { removeCompetition } from "../services/competitionService";

const deleteHandler = async (id) => {
  let result = await removeCompetition(id);
  
};

const CompetitionList = (props) => {
  var { competitions } = props;
  if (competitions.length == 0) {
    return <span>No Competitions</span>;
  } else {
    var content = [];
    competitions.map((competition) => {
      if (props.style !== "DASHBOARD") {
        content.push(<CompetitionCard Competition={competition} />);
      } else {
        content.push(
          <ItemActionRowCard
            Competition={competition}
            id={competition.Id}
            img={""}
            title={competition.title}
            subTitle={competition.place}
            onDelete={deleteHandler}
          />
        );
      }
    });

    if (content.length > 6) {
      content.push(<Pagination total={5} currentPage={2} />);
    }
    return content;
  }
};

export default CompetitionList;
