import React, { setState } from "react";
import Header from "../components/Header";
import DashboardSideMenu from "../components/DashboardSideMenu";
import Footer from "../components/Footer";

//Sections
import CreateCompetitionSection from "../components/CreateCompetitionSection";
import MyCompetionsSection from "../components/MyCompetionsSection";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "SHOW_COMPETITIONS"
    };
  }

  componentDidMount() {
    const menu = require("qs").parse(this.props.location.search, {
      ignoreQueryPrefix: true
    }).menu;

    if (menu) {
      this.setState({ activeMenu: menu });
    }
  }

  renderSection = menu => {
    switch (menu) {
      case "SHOW_COMPETITIONS":
        return <MyCompetionsSection />;
      case "CREATE_COMPETITION":
        return <CreateCompetitionSection />;
      case "EDIT_PROFILE":
        return <p>Edit Profile</p>;
      case "CHANGE_PASSWORD":
        return <p>Change Password</p>;
    }
  };

  changeMenuHandler = menu => {
    this.setState({ activeMenu: menu });
  };

  render() {
    return (
      <React.Fragment>
        <div class="loader-wrap">
          <div class="loader-inner">
            <div class="loader-inner-cirle"></div>
          </div>
        </div>
        <div id="main">
          {/* Begin Header */}
          <Header />

          {/* END Header */}

          <div id="wrapper">
            <div class="content">
              <section
                class="parallax-section dashboard-header-sec gradient-bg"
                data-scrollax-parent="true"
              >
                <div class="container">
                  <div class="dashboard-breadcrumbs breadcrumbs">
                    <a href="#">Home</a>
                    <a href="#">Dashboard</a>
                    <span>Main page</span>
                  </div>

                  <div class="tfp-btn">
                    <span>Tariff Plan : </span> <strong>Extended</strong>
                  </div>
                  <div class="tfp-det">
                    <p>
                      You Are on <a href="#">Extended</a> . Use link bellow to
                      view details or upgrade.{" "}
                    </p>
                    <a href="#" class="tfp-det-btn color2-bg">
                      Details
                    </a>
                  </div>

                  <div class="dashboard-header_conatiner fl-wrap dashboard-header_title">
                    <h1>
                      Welcome : <span>Alisa Noory</span>
                    </h1>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="dashboard-header fl-wrap">
                  <div class="container">
                    <div class="dashboard-header_conatiner fl-wrap">
                      <div class="dashboard-header-avatar">
                        <img src="images/avatar/1.jpg" alt=""></img>
                        <a
                          href="dashboard-myprofile.html"
                          class="color-bg edit-prof_btn"
                        >
                          <i class="fal fa-edit"></i>
                        </a>
                      </div>
                      <div class="dashboard-header-stats-wrap">
                        <div class="dashboard-header-stats">
                          <div class="swiper-container">
                            <div class="swiper-wrapper"></div>
                          </div>
                        </div>
                      </div>

                      <a class="add_new-dashboard">
                        Add Listing <i class="fal fa-layer-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="gradient-bg-figure"
                  style={{ right: "-30px", top: "10px" }}
                ></div>
                <div
                  class="gradient-bg-figure"
                  style={{ left: "-20px", bottom: "30px" }}
                ></div>
                <div
                  class="circle-wrap"
                  style={{ left: "120px", bottom: "120px" }}
                  data-scrollax="properties: { translateY: '-200px' }"
                >
                  <div class="circle_bg-bal circle_bg-bal_small"></div>
                </div>
                <div
                  class="circle-wrap"
                  style={{ right: "420px", bottom: "-70px" }}
                  data-scrollax="properties: { translateY: '150px' }"
                >
                  <div class="circle_bg-bal circle_bg-bal_big"></div>
                </div>
              </section>

              <section class="gray-bg main-dashboard-sec" id="sec1">
                <div class="container">
                  {/**Begin  DashboardSideMenu */}
                  <DashboardSideMenu
                    onMenuClick={this.changeMenuHandler}
                    activeMenu={this.state.activeMenu}
                  />

                  {/**End  DashboardSideMenu */}
                  {/**Begin Sections */}
                  {this.renderSection(this.state.activeMenu)}
                  {/*End Sections */}
                </div>
              </section>

              <div class="limit-box fl-wrap"></div>
            </div>
          </div>

          {/** Begin Footer */}
          <Footer />
          {/**End Footer */}

          <div class="main-register-wrap modal">
            <div class="reg-overlay"></div>
            <div class="main-register-holder tabs-act">
              <div class="main-register fl-wrap  modal_main">
                <div class="main-register_title">
                  Welcome to{" "}
                  <span>
                    <strong>Town</strong>Hub<strong>.</strong>
                  </span>
                </div>
                <div class="close-reg">
                  <i class="fal fa-times"></i>
                </div>
                <ul class="tabs-menu fl-wrap no-list-style">
                  <li class="current">
                    <a href="#tab-1">
                      <i class="fal fa-sign-in-alt"></i> Login
                    </a>
                  </li>
                  <li>
                    <a href="#tab-2">
                      <i class="fal fa-user-plus"></i> Register
                    </a>
                  </li>
                </ul>

                <div class="tabs-container">
                  <div class="tab">
                    <div id="tab-1" class="tab-content first-tab">
                      <div class="custom-form">
                        <form method="post" name="registerform">
                          <label>
                            Username or Email Address <span>*</span>{" "}
                          </label>
                          <input
                            name="email"
                            type="text"
                            onClick="this.select()"
                            value=""
                          />
                          <label>
                            Password <span>*</span>{" "}
                          </label>
                          <input
                            name="password"
                            type="password"
                            onClick="this.select()"
                            value=""
                          />
                          <button type="submit" class="btn float-btn color2-bg">
                            {" "}
                            Log In <i class="fas fa-caret-right"></i>
                          </button>
                          <div class="clearfix"></div>
                          <div class="filter-tags">
                            <input
                              id="check-a3"
                              type="checkbox"
                              name="check"
                            ></input>
                            <label for="check-a3">Remember me</label>
                          </div>
                        </form>
                        <div class="lost_password">
                          <a href="#">Lost Your Password?</a>
                        </div>
                      </div>
                    </div>

                    <div class="tab">
                      <div id="tab-2" class="tab-content">
                        <div class="custom-form">
                          <form
                            method="post"
                            name="registerform"
                            class="main-register-form"
                            id="main-register-form2"
                          >
                            <label>
                              Full Name <span>*</span>{" "}
                            </label>
                            <input
                              name="name"
                              type="text"
                              onClick="this.select()"
                              value=""
                            />
                            <label>
                              Email Address <span>*</span>
                            </label>
                            <input
                              name="email"
                              type="text"
                              onClick="this.select()"
                              value=""
                            />
                            <label>
                              Password <span>*</span>
                            </label>
                            <input
                              name="password"
                              type="password"
                              onClick="this.select()"
                              value=""
                            />
                            <div class="filter-tags ft-list">
                              <input
                                id="check-a2"
                                type="checkbox"
                                name="check"
                              />
                              <label for="check-a2">
                                I agree to the <a href="#">Privacy Policy</a>
                              </label>
                            </div>
                            <div class="clearfix"></div>
                            <div class="filter-tags ft-list">
                              <input
                                id="check-a"
                                type="checkbox"
                                name="check"
                              />
                              <label for="check-a">
                                I agree to the{" "}
                                <a href="#">Terms and Conditions</a>
                              </label>
                            </div>
                            <div class="clearfix"></div>
                            <button
                              type="submit"
                              class="btn float-btn color2-bg"
                            >
                              {" "}
                              Register <i class="fas fa-caret-right"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="log-separator fl-wrap">
                    <span>or</span>
                  </div>
                  <div class="soc-log fl-wrap">
                    <p>For faster login or register use your social account.</p>
                    <a href="#" class="facebook-log">
                      {" "}
                      Facebook
                    </a>
                  </div>
                  <div class="wave-bg">
                    <div class="wave -one"></div>
                    <div class="wave -two"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a class="to-top">
            <i class="fas fa-caret-up"></i>
          </a>
        </div>
      </React.Fragment>
    );
  }
}
export default Dashboard;
