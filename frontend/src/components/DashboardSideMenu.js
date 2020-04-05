import React from "react";

class DashboardSideMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
              <h3>Racing</h3>
              <ul class="no-list-style">
                <li>
                  <a>
                    <i class="fal fa-th-list"></i> My Results (Athlete){" "}
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fal fa-th-list"></i> My Team (Coach){" "}
                  </a>
                </li>

                <li>
                  <a
                    className={
                      this.props.activeMenu == "SHOW_COMPETITIONS"
                        ? "user-profile-act"
                        : ""
                    }
                    onClick={() => this.props.onMenuClick("SHOW_COMPETITIONS")}
                  >
                    <i class="fal fa-th-list"></i> My Competition (Organizer){" "}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => this.props.onMenuClick("CREATE_COMPETITION")}
                    className={
                      this.props.activeMenu == "CREATE_COMPETITION"
                        ? "user-profile-act"
                        : ""
                    }
                  >
                    <i class="fal fa-file-plus"></i> Add Competition (Organizer)
                  </a>
                </li>
              </ul>
            </div>

            <div class="user-profile-menu">
              <h3>Analytics</h3>
              <ul class="no-list-style"></ul>
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
}

export default DashboardSideMenu;
