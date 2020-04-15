//Adding a Competition
//-Competition Title
//-Competition Type
//-Competition StarDate
//-Competition EndDate
//-Competition Location

import React from "react";
import { CompetitionRaceTable } from "./CompetitionRaceTable";
import { DateTimePicker } from "../components/DateTimePicker";

export default class EditProfileSection extends React.Component {
  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>Edit Profile</h3>
        </div>
        <div className="profile-edit-container fl-wrap block_box">
          <div className="custom-form">
            <div className="row">
              <div className="col-sm-6">
                <label>
                  First Name <i className="fal fa-user" />
                </label>
                <input type="text" placeholder="Jessie" defaultValue />
              </div>
              <div className="col-sm-6">
                <label>
                  Second Name <i className="fal fa-user" />
                </label>
                <input type="text" placeholder="Manrty" defaultValue />
              </div>
              <div className="col-sm-6">
                <label>
                  Email Address
                  <i className="far fa-envelope" />
                </label>
                <input
                  type="text"
                  placeholder="JessieManrty@domain.com"
                  defaultValue
                />
              </div>
              <div className="col-sm-6">
                <label>
                  Phone
                  <i className="far fa-phone" />
                </label>
                <input type="text" placeholder="+7(123)987654" defaultValue />
              </div>
              <div className="col-sm-6">
                <label>
                  {" "}
                  Adress <i className="fas fa-map-marker" />
                </label>
                <input
                  type="text"
                  placeholder="USA 27TH Brooklyn NY"
                  defaultValue
                />
              </div>
              <div className="col-sm-6">
                <label>
                  {" "}
                  Website <i className="far fa-globe" />
                </label>
                <input type="text" placeholder="themeforest.net" defaultValue />
              </div>
            </div>
            <label> Notes</label>
            <textarea
              cols={40}
              rows={3}
              placeholder="About Me"
              style={{ marginBottom: 20 }}
              defaultValue={""}
            />
            <label>Change Avatar</label>
            <div className="photoUpload">
              <span>
                <i className="fal fa-image" /> <strong>Add Photos</strong>
              </span>
              <input type="file" className="upload" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
