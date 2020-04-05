//Adding a Competition
//-Competition Title
//-Competition Type
//-Competition StarDate
//-Competition EndDate
//-Competition Location

import React from "react";
import { CompetitionRaceTable } from "./CompetitionRaceTable";
export default class CreateCompetitionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedCompetitions: {
        races: [],
      },
      competitionToUpload: {
        title: "",
        place: "",
        startDate: "",
        endDate: "",
        type: "",
      },
      upLoadingCompetitions: false,
      fileToUpload: null,
    };
  }

  onHandleChange(e) {
    this.setState({ fileToUpload: e.target.files[0] });
  }

  async onSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("place", "test");
    formdata.append("startDate", "3.03.1996");
    formdata.append("type", "wC");
    formdata.append("endDate", "1.04.1996");
    formdata.append("title", "okidoki");
    formdata.append("csv", this.state.fileToUpload);

    try {
      const respone = await fetch(
        "http://localhost:3000/competition/races/csv",
        {
          method: "POST",
          body: formdata,
        }
      );

      console.log(respone);

      const data = await respone.json();
      console.log(data);
      this.setState({ uploadedCompetitions: data });
      console.log(this.state);
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
              placeholder="Name of your business"
              defaultValue
            />
            <label>
              Place <i className="fal fa-briefcase" />
            </label>
            <input
              type="text"
              placeholder="Name of your business"
              defaultValue
            />

            <label>
              Type <i className="fal fa-briefcase" />
            </label>
            <div
              className="nice-select chosen-select no-search-select open"
              tabIndex={0}
            >
              <span className="current">All Categories</span>
              <div className="nice-select-search-box">
                <input
                  type="text"
                  className="nice-select-search"
                  placeholder="Search..."
                />
              </div>
              <ul className="list">
                <li
                  data-value="All Categories"
                  className="option selected focus"
                >
                  World Championship
                </li>
                <li data-value="Shops" className="option">
                  European Championship
                </li>
                <li data-value="Hotels" className="option">
                  National Championship
                </li>
                <li data-value="Restaurants" className="option">
                  World Cup
                </li>
                <li data-value="Fitness" className="option">
                  European Cup
                </li>
                <li data-value="Events" className="option">
                  Olympic Games
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label>
                  StartDate <i className="fal fa-briefcase" />
                </label>
                <input
                  type="text"
                  placeholder="Name of your business"
                  defaultValue
                />
              </div>
              <div className="col-md-6">
                <label>
                  EndDate <i className="fal fa-briefcase" />
                </label>
                <input
                  type="text"
                  placeholder="Name of your business"
                  defaultValue
                />
              </div>
            </div>
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
          <button onClick={(e) => this.onSubmit(e)}>Send</button>
        </div>

        {this.state.uploadedCompetitions.races.length > 0
          ? this.state.uploadedCompetitions.races.map((race) => {
              return <CompetitionRaceTable race={race} />;
            })
          : undefined}
      </div>
    );
  }
}
