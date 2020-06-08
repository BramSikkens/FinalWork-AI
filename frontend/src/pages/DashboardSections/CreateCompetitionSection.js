//Adding a Competition
//-Competition Title
//-Competition Type
//-Competition StarDate
//-Competition EndDate
//-Competition Location

import React from "react";
import { CompetitionRaceTable } from "../../components/CompetitionRaceTable";
import DateTimePicker from "../../components/DateTimePicker";
import OptionList from "../../components/OptionList";

export default class CreateCompetitionSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      competition: {
        title: "",
        place: "",
        startDate: "",
        endDate: "",
        type: "",
        races: [],
      },
      upLoadingCompetitions: false,
      fileToUpload: null,
    };
  }

  async onHandleChange(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("place", this.state.competition.place);
    formdata.append("startDate", this.state.competition.startDate);
    formdata.append("type", this.state.competition.type);
    formdata.append("endDate", this.state.competition.endDate);
    formdata.append("title", this.state.competition.title);
    formdata.append("user", "1");
    formdata.append("csv", e.target.files[0]);

    try {
      const respone = await fetch(
        "http://localhost:3000/competition/races/csv",
        {
          method: "POST",
          body: formdata,
        }
      );
      const data = await respone.json();
      this.setState({ competition: data });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }

  async onSubmit(e) {
    e.preventDefault();

    let competition = JSON.stringify(this.state.competition);

    try {
      const respone = await fetch(
        "http://localhost:3000/competition/json/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: competition,
        }
      );
      const data = await respone.json();
      this.setState({
        competition: {
          title: "",
          place: "",
          startDate: "",
          endDate: "",
          type: "",
          races: [],
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>Add Competition</h3>
        </div>
        <div class="profile-edit-container fl-wrap block_box">
          <div className="custom-form">
            <label>
              Competition Name <i className="fal fa-briefcase" />
            </label>
            <input
              type="text"
              placeholder="Name of your competition"
              onChange={(e) => {
                let competition = { ...this.state.competition };
                competition.title = e.target.value;

                this.setState({
                  competition: competition,
                });
              }}
            />
            <label>
              Place <i className="fal fa-briefcase" />
            </label>
            <input
              type="text"
              placeholder="Place of your competition"
              onChange={(e) => {
                let newState = { ...this.state.competition };
                newState.place = e.target.value;

                this.setState({
                  competition: newState,
                });
              }}
            />

            <label>
              StartDate <i className="fal fa-briefcase" />
            </label>
            <DateTimePicker
              onChange={(date) => {
                let competition = { ...this.state.competition };
                competition.startDate = date;
                this.setState({
                  competition: competition,
                });
              }}
            />

            <label>
              EndDate <i className="fal fa-briefcase" />
            </label>
            <DateTimePicker
              onChange={(date) => {
                let competition = { ...this.state.competition };
                competition.endDate = date;
                this.setState({
                  competition: competition,
                });
              }}
            />

            <label>
              Type <i className="fal fa-briefcase" />
            </label>
            <OptionList
              options={["WORLDCUP", "WORLD CHAMPIONSHIPS", "EUROPEAN CHAMPIONSHIPS", "OLYMPIC GAMES", "EUROPEAN CUP","NATIONAL CHAMPIONSHIPS"]}
              onChange={(option) => {
                let competition = { ...this.state.competition };
                competition.type = option;
                this.setState({
                  competition: competition,
                });
                console.log(this.state);
              }}
            />
          </div>
        </div>

        <div class="profile-edit-container fl-wrap block_box">
          <div className="photoUpload">
            <span>
              <i className="fal fa-image" /> <strong>Add CSV</strong>
            </span>
            <input
              type="file"
              onChange={(e) => this.onHandleChange(e)}
              className="upload"
            />
          </div>
        </div>

        {this.state.competition && this.state.competition.races.length > 0
          ? this.state.competition.races.map((race) => {
              return <CompetitionRaceTable race={race} />;
            })
          : undefined}

        <div
          class="soc-log fl-wrap"
          style={
            this.state.competition && this.state.competition.races.length > 0
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <a
            href="#"
            class="facebook-log"
            onClick={(e) => {
              this.onSubmit(e);
            }}
          >
            Save Competitions
          </a>
        </div>
      </div>
    );
  }
}
