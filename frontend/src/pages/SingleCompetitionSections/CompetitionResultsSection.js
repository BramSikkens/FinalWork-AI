import React from "react";
import { CompetitionRaceTable } from "../../components/CompetitionRaceTable";

export default class CompetitionResultSection extends React.Component {
  
  render() {
    return (
      <section className="gray-bg no-top-padding">
        <div className="container">
          <div className="clearfix" />
          <div className="row">
            {/* list-single-main-wrapper-col */}
            <div className="col-md-12">
              {/* list-single-main-wrapper */}
              <div className="list-single-main-wrapper fl-wrap" id="sec2">
                {/* list-single-main-item */}

                {this.props.races.map((race) => {
                  return <CompetitionRaceTable race={race} />;
                })}

                {/* list-single-main-item end */}
              </div>
            </div>
            {/* list-single-main-wrapper-col end */}
            {/* list-single-sidebar */}
          </div>
        </div>
      </section>
    );
  }
}
