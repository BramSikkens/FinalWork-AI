import React from "react";
import { connect } from "react-redux";
import {
  OpenLoginModal,
  CloseLoginModal,
} from "../redux/actions/componentStateAction";
import { logout } from "../redux/actions/authentication";
import { Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuOverLay: false,
    };
  }

  renderAccount(user) {
    if (user) {
      return (
        <div class="header-user-menu">
          <div
            class="header-user-name"
            onClick={() => {
              this.setState({ showMenuOverLay: true });
            }}
          >
            <span>
              <img src="images/avatar/1.jpg" alt=""></img>
            </span>
            Hello , {user.username || "No Username"}
          </div>
          <ul
            className={this.state.showMenuOverLay ? "hu-menu-vis" : undefined}
          >
            <li>
              <a href="dashboard-myprofile.html"> Edit profile</a>
            </li>
            <li>
              <Link to="dashboard/addCompetition">
                <a href="#"> Add Competition</a>
              </Link>
            </li>
            <li>
              <Link to="dashboard/myCompetitions">
                <a> My Competitions </a>
              </Link>
            </li>
            <li
              onClick={() => {
                this.props.Logout();
              }}
            >
              <a href="#">Log Out</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            this.props.OpenLoginModal();
          }}
          class="show-reg-form modal-open avatar-img"
          data-srcav="images/avatar/3.jpg"
        >
          <i class="fal fa-user"></i>Sign In
        </div>
      );
    }
  }

  render() {
    return (
      <header class="main-header dsh-header">
        <Link to="/">
          <a class="logo-holder">
            <span>
              <b style={{ color: "white", fontSize: "2vw" }}>Canolytica.com</b>
            </span>
          </a>
        </Link>

        <div class="header-search_btn show-search-button">
          <i class="fal fa-search"></i>
          <span>Search</span>
        </div>

        <Link to="/dashboard">
          <a class="add-list color-bg">
            Go To Dashboard
            <span>
              <i class="fal fa-layer-plus"></i>
            </span>
          </a>
        </Link>

        <div
          class="cart-btn   show-header-modal"
          data-microtip-position="bottom"
          role="tooltip"
          aria-label="Your Wishlist"
        >
          <i class="fal fa-heart"></i>
          <span class="cart-counter green-bg"></span>{" "}
        </div>

        {this.renderAccount(this.props.auth.user)}

        <div class="nav-button-wrap color-bg">
          <div class="nav-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="nav-holder main-menu">
          <nav>
            <ul class="no-list-style">
              <li>
                <a href="#">
                  Home <i class="fa fa-caret-down"></i>
                </a>

                <ul>
                  <li>
                    <a href="index.html">Parallax Image</a>
                  </li>
                  <li>
                    <a href="index2.html">Slider</a>
                  </li>
                  <li>
                    <a href="index3.html">Slideshow</a>
                  </li>
                  <li>
                    <a href="index4.html">Video</a>
                  </li>
                  <li>
                    <a href="index5.html">Map</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Competitions <i class="fa fa-caret-down"></i>
                </a>

                <ul>
                  <li>
                    <a href="listing.html">2020</a>
                  </li>
                  <li>
                    <a href="listing2.html">2019</a>
                  </li>
                  <li>
                    <a href="listing3.html">2018</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header-search_container header-search vis-search">
          <div class="container small-container">
            <div class="header-search-input-wrap fl-wrap">
              <div class="header-search-input">
                <label>
                  <i class="fal fa-keyboard"></i>
                </label>
                <input
                  type="text"
                  placeholder="What are you looking for ?"
                  value=""
                />
              </div>

              <div class="header-search-input location autocomplete-container">
                <label>
                  <i class="fal fa-map-marker"></i>
                </label>
                <input
                  type="text"
                  placeholder="Location..."
                  class="autocomplete-input"
                  id="autocompleteid2"
                  value=""
                />
                <a href="#">
                  <i class="fal fa-dot-circle"></i>
                </a>
              </div>

              <div class="header-search-input header-search_selectinpt ">
                <select
                  data-placeholder="Category"
                  class="chosen-select no-radius"
                >
                  <option>All Categories</option>
                  <option>All Categories</option>
                  <option>Shops</option>
                  <option>Hotels</option>
                  <option>Restaurants</option>
                  <option>Fitness</option>
                  <option>Events</option>
                </select>
              </div>

              <button
                class="header-search-button green-bg"
                onclick="window.location.href='listing.html'"
              >
                <i class="far fa-search"></i> Search{" "}
              </button>
            </div>
            <div class="header-search_close color-bg">
              <i class="fal fa-long-arrow-up"></i>
            </div>
          </div>
        </div>

        <div class="header-modal novis_wishlist">
          <div
            class="header-modal-container scrollbar-inner fl-wrap"
            data-simplebar
          >
            <div class="widget-posts  fl-wrap">
              <ul class="no-list-style">
                <li>
                  <div class="widget-posts-img">
                    <a href="listing-single.html">
                      <img src="images/gallery/thumbnail/1.png" alt=""></img>
                    </a>
                  </div>
                  <div class="widget-posts-descr">
                    <h4>
                      <a href="listing-single.html">Iconic Cafe</a>
                    </h4>
                    <div class="geodir-category-location fl-wrap">
                      <a href="#">
                        <i class="fas fa-map-marker-alt"></i> 40 Journal Square
                        Plaza, NJ, USA
                      </a>
                    </div>
                    <div class="widget-posts-descr-link">
                      <a href="listing.html">Restaurants </a>{" "}
                      <a href="listing.html">Cafe</a>
                    </div>
                    <div class="widget-posts-descr-score">4.1</div>
                    <div class="clear-wishlist">
                      <i class="fal fa-times-circle"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="widget-posts-img">
                    <a href="listing-single.html">
                      <img src="images/gallery/thumbnail/1.png" alt=""></img>
                    </a>
                  </div>
                  <div class="widget-posts-descr">
                    <h4>
                      <a href="listing-single.html">MontePlaza Hotel</a>
                    </h4>
                    <div class="geodir-category-location fl-wrap">
                      <a href="#">
                        <i class="fas fa-map-marker-alt"></i> 70 Bright St New
                        York, USA{" "}
                      </a>
                    </div>
                    <div class="widget-posts-descr-link">
                      <a href="listing.html">Hotels </a>{" "}
                    </div>
                    <div class="widget-posts-descr-score">5.0</div>
                    <div class="clear-wishlist">
                      <i class="fal fa-times-circle"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="widget-posts-img">
                    <a href="listing-single.html">
                      <img src="images/gallery/thumbnail/1.png" alt=""></img>
                    </a>
                  </div>
                  <div class="widget-posts-descr">
                    <h4>
                      <a href="listing-single.html">
                        Rocko Band in Marquee Club
                      </a>
                    </h4>
                    <div class="geodir-category-location fl-wrap">
                      <a href="#">
                        <i class="fas fa-map-marker-alt"></i>75 Prince St, NY,
                        USA
                      </a>
                    </div>
                    <div class="widget-posts-descr-link">
                      <a href="listing.html">Events</a>{" "}
                    </div>
                    <div class="widget-posts-descr-score">4.2</div>
                    <div class="clear-wishlist">
                      <i class="fal fa-times-circle"></i>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="widget-posts-img">
                    <a href="listing-single.html">
                      <img src="images/gallery/thumbnail/1.png" alt=""></img>
                    </a>
                  </div>
                  <div class="widget-posts-descr">
                    <h4>
                      <a href="listing-single.html">Premium Fitness Gym</a>
                    </h4>
                    <div class="geodir-category-location fl-wrap">
                      <a href="#">
                        <i class="fas fa-map-marker-alt"></i> W 85th St, New
                        York, USA
                      </a>
                    </div>
                    <div class="widget-posts-descr-link">
                      <a href="listing.html">Fitness</a>{" "}
                      <a href="listing.html">Gym</a>{" "}
                    </div>
                    <div class="widget-posts-descr-score">5.0</div>
                    <div class="clear-wishlist">
                      <i class="fal fa-times-circle"></i>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="header-modal-top fl-wrap">
            <h4>
              Your Wishlist :{" "}
              <span>
                <strong></strong> Locations
              </span>
            </h4>
            <div class="close-header-modal">
              <i class="far fa-times"></i>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authentication,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    OpenLoginModal: () => {
      dispatch(OpenLoginModal());
    },
    Logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
