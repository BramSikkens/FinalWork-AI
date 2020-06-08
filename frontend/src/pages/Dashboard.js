import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Switch, useRouteMatch, withRouter } from "react-router-dom";
//Sections
import CreateCompetitionSection from "./DashboardSections/CreateCompetitionSection";
import DashboardSideMenu from "../components/DashboardSideMenu";
import MyCompetionsSection from "./DashboardSections/MyCompetionsSection";
import MyRaceSection from "./DashboardSections/MyRaceSection";
import EditProfileSection from "./DashboardSections/EditProfileSection";
import ChangePasswordSection from "./DashboardSections/ChangePasswordSection";
import AnalyticSection from "./DashboardSections/AnalyticsSection";

const mapStateToProps = (state) => ({
  auth: state.authentication,
});

function Dashboard(props) {
  let { path } = useRouteMatch();
  const [stats, setStats] = useState({});
  const [profileImage, setProfileImage] = useState("");

  async function fetchData(name) {
    const res = await fetch("http://localhost:3003/athlete/" + name);
    res.json().then((res) => setStats(res));
  }

  async function fetchProfileImage(props) {
    let data = JSON.stringify({
      bucket: "bramfinalwork",
      key: props.auth.user.profileImage,
      edits: {
        resize: {
          width: 200,
          height: 200,
          fit: "cover",
        },
      },
    });

    data = "https://d2vyjf3191krcr.cloudfront.net/" + btoa(data);
    setProfileImage(data);
  }

  useEffect(() => {
    fetchData(props.auth.user.athlete.Name);
    fetchProfileImage(props);
  }, []);

  return (
    <React.Fragment>
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
                <span>Role : </span> <strong>Coach</strong>
              </div>
              <div class="dashboard-header_conatiner fl-wrap dashboard-header_title">
                <h1>
                  Welcome : <span>Bram Sikkens</span>
                </h1>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="dashboard-header fl-wrap">
              <div class="container">
                <div class="dashboard-header_conatiner fl-wrap">
                  <div class="dashboard-header-avatar">
                    <img src={profileImage} alt=""></img>
                    <a
                      href="dashboard-myprofile.html"
                      class="color-bg edit-prof_btn"
                    >
                      <i class="fal fa-edit"></i>
                    </a>
                  </div>
                  <div className="dashboard-header-stats-wrap">
                    <div className="dashboard-header-stats">
                      <div
                        className="swiper-container swiper-container-horizontal"
                        style={{ cursor: "grab" }}
                      >
                        <div className="swiper-wrapper">
                          {/*  dashboard-header-stats-item */}
                          <div
                            className="swiper-slide swiper-slide-active"
                            style={{ width: 180, marginRight: 10 }}
                          >
                            <div className="dashboard-header-stats-item">
                              <i className="fal fa-map-marked" />
                              Total Competitions
                              <span>
                                {stats
                                  ? stats.competitionCount || "No  stats"
                                  : "No stats"}
                              </span>
                            </div>
                          </div>
                          {/*  dashboard-header-stats-item end */}
                          {/*  dashboard-header-stats-item */}
                          <div
                            className="swiper-slide swiper-slide-next"
                            style={{ width: 180, marginRight: 10 }}
                          >
                            <div className="dashboard-header-stats-item">
                              <i className="fal fa-chart-bar" />
                              Total Races
                              <span>
                                {stats
                                  ? stats.raceCount || "No  stats"
                                  : "No stats"}
                              </span>
                            </div>
                          </div>
                          {/*  dashboard-header-stats-item end */}
                          {/*  dashboard-header-stats-item */}
                          <div
                            className="swiper-slide"
                            style={{ width: 180, marginRight: 10 }}
                          >
                            <div className="dashboard-header-stats-item">
                              <i className="fal fa-comments-alt" />
                              Total Medals
                              <span>8</span>
                            </div>
                          </div>
                          {/*  dashboard-header-stats-item end */}
                          {/*  dashboard-header-stats-item */}
                          <div
                            className="swiper-slide"
                            style={{ width: 180, marginRight: 10 }}
                          >
                            <div className="dashboard-header-stats-item">
                              <i className="fal fa-heart" />
                              Times Bookmarked
                              <span>654</span>
                            </div>
                          </div>
                          {/*  dashboard-header-stats-item end */}
                        </div>
                        <span
                          className="swiper-notification"
                          aria-live="assertive"
                          aria-atomic="true"
                        />
                      </div>
                    </div>
                    {/*  dashboard-header-stats  end */}
                    <div className="dhs-controls">
                      <div
                        className="dhs dhs-prev swiper-button-disabled"
                        tabIndex={0}
                        role="button"
                        aria-label="Previous slide"
                        aria-disabled="true"
                      >
                        <i className="fal fa-angle-left" />
                      </div>
                      <div
                        className="dhs dhs-next"
                        tabIndex={0}
                        role="button"
                        aria-label="Next slide"
                        aria-disabled="false"
                      >
                        <i className="fal fa-angle-right" />
                      </div>
                    </div>
                  </div>
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
              <DashboardSideMenu />

              {/**End  DashboardSideMenu */}
              {/**Begin Sections */}
              {/* {this.renderSection(this.state.activeMenu)} */}

              <Switch>
                <Route path={`${path}/addCompetition`}>
                  <CreateCompetitionSection User={props.auth.user} />
                </Route>
                <Route path={`${path}/analytics`}>
                  <AnalyticSection />
                </Route>
                <Route path={`${path}/myraces`}>
                  <MyRaceSection User={props.auth.user} />
                </Route>
                <Route path={`${path}/myCompetitions`}>
                  <MyCompetionsSection User={props.auth.user} />
                </Route>
                <Route path={`${path}/editProfile`}>
                  <EditProfileSection />
                </Route>
                <Route path={`${path}/changePassword`}>
                  <ChangePasswordSection />
                </Route>
                <Route>
                  <MyCompetionsSection User={props.auth.user} />
                </Route>
              </Switch>
              {/*End Sections */}
            </div>
          </section>

          <div class="limit-box fl-wrap"></div>
        </div>
      </div>
      <a class="to-top">
        <i class="fas fa-caret-up"></i>
      </a>
    </React.Fragment>
  );
}
//   }
// )
export default withRouter(connect(mapStateToProps)(Dashboard));
