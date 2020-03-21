//Adding a Competition
//-Competition Title
//-Competition Type
//-Competition StarDate
//-Competition EndDate
//-Competition Location

import React from "react";
export default class CreateCompetitionSection extends React.Component {
  render() {
    return (
      <div class="col-md-9">
        <div class="dashboard-title   fl-wrap">
          <h3>Add Competition</h3>
        </div>

        <div class="profile-edit-container fl-wrap block_box">
          <div class="custom-form">
            <label>
              Competition Title <i class="fal fa-briefcase"></i>
            </label>
            <input type="text" placeholder="Name of your business" value="" />
            <div class="row"></div>
          </div>
          <div class="custom-form">
            <label>
              Place <i class="fal fa-briefcase"></i>
            </label>
            <input type="text" placeholder="Name of your business" value="" />
            <div class="row"></div>
          </div>

          <div class="custom-form">
            <label>
              Type<i class="fal fa-briefcase"></i>
            </label>
            <input type="text" placeholder="Name of your business" value="" />
            <div class="row"></div>
          </div>

          <div class="custom-form">
            <label>
              StarDate<i class="fal fa-briefcase"></i>
            </label>
            <input type="text" placeholder="Name of your business" value="" />
            <div class="row"></div>
          </div>

          <div class="custom-form">
            <label>
              EndDate <i class="fal fa-briefcase"></i>
            </label>
            <input type="text" placeholder="Name of your business" value="" />
            <div class="row"></div>
          </div>
          <div className="photoUpload">
            <span>
              <i className="fal fa-image" /> <strong>Add CSV</strong>
            </span>
            <input type="file" className="upload" />
          </div>
        </div>
      </div>
    );
  }
}
