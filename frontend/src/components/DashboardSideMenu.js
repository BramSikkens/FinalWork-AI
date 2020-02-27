import React from "react";

class DashboardSideMenu extends React.Component {
  render() {
    return (
      <section class="gray-bg main-dashboard-sec" id="sec1">
        <div class="container">
          <div class="col-md-3">
            <div class="mob-nav-content-btn color2-bg init-dsmen fl-wrap">
              <i class="fal fa-bars"></i> Dashboard menu
            </div>
            <div class="clearfix"></div>
            <div class="fixed-bar fl-wrap" id="dash_menu">
              <div class="user-profile-menu-wrap fl-wrap block_box">
                <div class="user-profile-menu">
                  <h3>Main</h3>
                  <ul class="no-list-style">
                    <li>
                      <a href="dashboard-myprofile.html">
                        <i class="fal fa-user-edit"></i> Edit profile
                      </a>
                    </li>

                    <li>
                      <a href="dashboard-password.html">
                        <i class="fal fa-key"></i>Change Password
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="user-profile-menu">
                  <h3>Listings</h3>
                  <ul class="no-list-style">
                    <li>
                      <a href="dashboard-listing-table.html">
                        <i class="fal fa-th-list"></i> My listigs{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href="dashboard-add-listing.html"
                        class="user-profile-act"
                      >
                        <i class="fal fa-file-plus"></i> Add New
                      </a>
                    </li>
                  </ul>
                </div>

                <button class="logout_btn color2-bg">
                  Log Out <i class="fas fa-sign-out"></i>
                </button>
              </div>
            </div>
            <a
              class="back-tofilters color2-bg custom-scroll-link fl-wrap"
              href="#dash_menu"
            >
              Back to Menu<i class="fas fa-caret-up"></i>
            </a>
            <div class="clearfix"></div>
          </div>

          <div class="col-md-9">
            <div class="dashboard-title   fl-wrap">
              <h3>Add Listing</h3>
            </div>

            <div class="profile-edit-container fl-wrap block_box">
              <div class="custom-form">
                <label>
                  Competition Title <i class="fal fa-briefcase"></i>
                </label>
                <input
                  type="text"
                  placeholder="Name of your business"
                  value=""
                />
                <div class="row">
                  <div class="col-md-6">
                    <label>Type / Category</label>
                    <div class="listsearch-input-item">
                      <select
                        data-placeholder="Apartments"
                        class="chosen-select no-search-select"
                      >
                        <option>All Categories</option>
                        <option>Shops</option>
                        <option>Hotels</option>
                        <option>Restaurants</option>
                        <option>Fitness</option>
                        <option>Events</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label>
                      Keywords <i class="fal fa-key"></i>
                    </label>
                    <input
                      type="text"
                      placeholder="Maximum 15 , should be separated by commas"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardSideMenu;
