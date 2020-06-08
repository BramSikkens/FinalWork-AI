//Adding a Competition
//-Competition Title
//-Competition Type
//-Competition StarDate
//-Competition EndDate
//-Competition Location

import React from "react";
import { CompetitionRaceTable } from "../../components/CompetitionRaceTable";
import { DateTimePicker } from "../../components/DateTimePicker";

export default class ChangePasswordSection extends React.Component {
  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>Change Password Profile</h3>
        </div>
        <div className="profile-edit-container fl-wrap block_box">
          <div className="custom-form">
            <div className="pass-input-wrap fl-wrap">
              <label>Current Password</label>
              <input
                type="password"
                className="pass-input"
                placeholder
                defaultValue
              />
              <span className="eye">
                <i className="far fa-eye" aria-hidden="true" />{" "}
              </span>
            </div>
            <div className="pass-input-wrap fl-wrap">
              <label>New Password</label>
              <input
                type="password"
                className="pass-input"
                placeholder
                defaultValue
              />
              <span className="eye">
                <i className="far fa-eye" aria-hidden="true" />{" "}
              </span>
            </div>
            <div className="pass-input-wrap fl-wrap">
              <label>Confirm New Password</label>
              <input
                type="password"
                className="pass-input"
                placeholder
                defaultValue
              />
              <span className="eye">
                <i className="far fa-eye" aria-hidden="true" />{" "}
              </span>
            </div>
            <button className="btn    color2-bg  float-btn">
              Save Changes
              <i className="fal fa-save" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
