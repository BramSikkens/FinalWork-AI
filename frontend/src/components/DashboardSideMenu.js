import React from "react";
import { Link, useRouteMatch, withRouter } from "react-router-dom";
function DashboardSideMenu() {
  let { path, url } = useRouteMatch();

  return (
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
                <Link to="/dashboard/editProfile">
                  <i class="fal fa-user-edit"></i> Edit profile
                </Link>
              </li>

              <li>
                <Link to="/dashboard/changePassword">
                  <i class="fal fa-key"></i>Change Password
                </Link>
              </li>
            </ul>
          </div>

          <div class="user-profile-menu">
            <h3>Racing</h3>
            <ul class="no-list-style">
              <li>
                <Link to="/dashboard/myraces">
                  <i class="fal fa-th-list"></i> My Results (Athlete){" "}
                </Link>
              </li>
              <li>
                <a>
                  <i class="fal fa-th-list"></i> My Team (Coach){" "}
                </a>
              </li>

              <li>
                <Link to={url + "/myCompetitions"}>
                  <i class="fal fa-th-list"></i> My Competition (Organizer){" "}
                </Link>
              </li>
              <li>
                <Link to={url + "/addCompetition"}>
                  <i class="fal fa-file-plus"></i> Add Competition (Organizer)
                </Link>
              </li>
            </ul>
          </div>

          <div class="user-profile-menu">
            <h3>Analytics</h3>
            <ul class="no-list-style">
              <li>
                <Link to={url + "/analytics"}>
                  <i class="fal fa-file-plus"></i> Check Analytics
                </Link>
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
  );
}

export default withRouter(DashboardSideMenu);
