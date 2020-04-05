import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResultRow from "../components/ResultRow";
import LoaderWrap from "../components/LoaderWrap";
import { fetchSingleCompetition } from "../services/competitionService";
import { CompetitionRaceTable } from "../components/CompetitionRaceTable";

import qs from "qs";
export default class SingleCompetition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      competition: {
        races: []
      }
    };
  }

  async componentDidMount() {
    const id = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
      .id;
    let fetchedCompetition = await fetchSingleCompetition(id);
    this.setState(previousState => ({
      competition: fetchedCompetition,
      loading: false
    }));

    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
          <LoaderWrap />

        <div id="wrapper">
          <div class="content">
            <section
              class="listing-hero-section hidden-section"
              data-scrollax-parent="true"
              id="sec1"
            >
              <div class="bg-parallax-wrap">
                <div
                  class="bg par-elem "
                  data-bg="images/bg/1.jpg"
                  data-scrollax="properties: { translateY: '30%' }"
                  //style='background-image: url("images/bg/1.jpg"); transform: translateZ(0px) translateY(-1.73661%);'
                ></div>
                <div class="overlay"></div>
              </div>
              <div class="container">
                <div class="list-single-header-item  fl-wrap">
                  <div class="row">
                    <div class="col-md-9">
                      <h1>
                        {this.state.competition.title || "No Title"}
                        <span class="verified-badge">
                          <i class="fal fa-check"></i>
                        </span>
                      </h1>
                      <div class="geodir-category-location fl-wrap">
                        <a href="#">
                          <i class="fas fa-map-marker-alt"></i>{" "}
                          {this.state.competition.place}
                        </a>{" "}
                        <a href="#">
                          {" "}
                          <i class="fal fa-phone"></i>+38099231212
                        </a>{" "}
                        <a href="#">
                          <i class="fal fa-envelope"></i> yourmail@domain.com
                        </a>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <a
                        class="fl-wrap list-single-header-column custom-scroll-link "
                        href="#sec5"
                      >
                        <div class="listing-rating-count-wrap single-list-count">
                          <div class="review-score">4.1</div>
                          <div
                            class="listing-rating card-popup-rainingvis"
                            data-starrating2="4"
                          >
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <div class="card-popup-rainingvis_bg">
                              <span class="card-popup-rainingvis_bg_item"></span>
                              <span class="card-popup-rainingvis_bg_item"></span>
                              <span class="card-popup-rainingvis_bg_item"></span>
                              <span class="card-popup-rainingvis_bg_item"></span>
                              <span class="card-popup-rainingvis_bg_item"></span>
                              <div></div>
                            </div>
                          </div>
                          <br />
                          <div class="reviews-count">2 reviews</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="list-single-header_bottom fl-wrap">
                  <a class="listing-item-category-wrap" href="#">
                    <div class="listing-item-category  red-bg">
                      <i class="fal fa-cheeseburger"></i>
                    </div>
                    <span>Restaurants</span>
                  </a>
                  <div class="list-single-author">
                    {" "}
                    <a href="author-single.html">
                      <span class="author_avatar">
                        {" "}
                        <img alt="" src="images/avatar/1.jpg" />{" "}
                      </span>
                      By Alisa Noory
                    </a>
                  </div>
                  <div class="geodir_status_date gsd_open">
                    <i class="fal fa-lock-open"></i>Open Now
                  </div>
                  <div class="list-single-stats">
                    <ul class="no-list-style">
                      <li>
                        <span class="viewed-counter">
                          <i class="fas fa-eye"></i> Viewed - 156{" "}
                        </span>
                      </li>
                      <li>
                        <span class="bookmark-counter">
                          <i class="fas fa-heart"></i> Bookmark - 24{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div class="scroll-nav-wrapper fl-wrap" style={{ zIndex: "1112" }}>
              <div class="container">
                <nav class="scroll-nav scroll-init">
                  <ul class="no-list-style">
                    <li>
                      <a class="act-scrlink" href="#sec1">
                        <i class="fal fa-images"></i> Top
                      </a>
                    </li>
                    <li>
                      <a href="#sec2">
                        <i class="fal fa-info"></i>Details
                      </a>
                    </li>
                    <li>
                      <a href="#sec3">
                        <i class="fal fa-image"></i>Gallery
                      </a>
                    </li>
                    <li>
                      <a href="#sec4">
                        <i class="fal fa-utensils"></i>Menu
                      </a>
                    </li>
                    <li>
                      <a href="#sec5">
                        <i class="fal fa-comments-alt"></i>Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
                <div class="scroll-nav-wrapper-opt">
                  <a href="#" class="scroll-nav-wrapper-opt-btn">
                    {" "}
                    <i class="fas fa-heart"></i> Save{" "}
                  </a>
                  <a href="#" class="scroll-nav-wrapper-opt-btn showshare">
                    {" "}
                    <i class="fas fa-share"></i> Share{" "}
                  </a>
                  <div class="share-holder hid-share">
                    <div class="share-container  isShare">
                      <a
                        href="http://www.facebook.com/share.php?u=file%3A%2F%2F%2FUsers%2FBramSikkens%2FDownloads%2Fthemeforest-fyzrbEoM-townhub-directory-listing-template%2Ftownhub%2Flisting-single.html"
                        title="Share this page on facebook"
                        class="pop share-icon share-icon-facebook"
                      ></a>
                      <a
                        href="http://pinterest.com/pin/create/button/?url=file%3A%2F%2F%2FUsers%2FBramSikkens%2FDownloads%2Fthemeforest-fyzrbEoM-townhub-directory-listing-template%2Ftownhub%2Flisting-single.html&amp;media=&amp;description="
                        title="Share this page on pinterest"
                        class="pop share-icon share-icon-pinterest"
                      ></a>
                      <a
                        href="https://plusone.google.com/_/+1/confirm?hl=en&amp;url=file%3A%2F%2F%2FUsers%2FBramSikkens%2FDownloads%2Fthemeforest-fyzrbEoM-townhub-directory-listing-template%2Ftownhub%2Flisting-single.html"
                        title="Share this page on googleplus"
                        class="pop share-icon share-icon-googleplus"
                      ></a>
                      <a
                        href="https://twitter.com/share?via=in1.com&amp;text=Townhub - Directory Listing Template"
                        title="Share this page on twitter"
                        class="pop share-icon share-icon-twitter"
                      ></a>
                      <a
                        href="http://www.linkedin.com/shareArticle?mini=true&amp;url=file%3A%2F%2F%2FUsers%2FBramSikkens%2FDownloads%2Fthemeforest-fyzrbEoM-townhub-directory-listing-template%2Ftownhub%2Flisting-single.html&amp;title=Townhub - Directory Listing Template&amp;summary=&amp;source=in1.com"
                        title="Share this page on linkedin"
                        class="pop share-icon share-icon-linkedin"
                      ></a>
                    </div>
                  </div>
                  <div class="show-more-snopt">
                    <i class="fal fa-ellipsis-h"></i>
                  </div>
                  <div class="show-more-snopt-tooltip">
                    <a href="#">
                      {" "}
                      <i class="fas fa-comment-alt"></i> Write a review
                    </a>
                    <a href="#">
                      {" "}
                      <i class="fas fa-flag-alt"></i> Report{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <section className="gray-bg no-top-padding">
              <div className="container">
                <div className="breadcrumbs inline-breadcrumbs fl-wrap">
                  <a href="#">Home</a>
                  <a href="#">Listings</a>
                  <a href="#">New York</a>
                  <span>Listing Single</span>
                </div>
                <div className="clearfix" />
                <div className="row">
                  {/* list-single-main-wrapper-col */}
                  <div className="col-md-12">
                    {/* list-single-main-wrapper */}
                    <div className="list-single-main-wrapper fl-wrap" id="sec2">
                      {/* list-single-main-item */}

                      {this.state.competition.races.map(race => {
                        return <CompetitionRaceTable race={race} />;
                      })}

                      {/* list-single-main-item end */}
                    </div>
                  </div>
                  {/* list-single-main-wrapper-col end */}
                  {/* list-single-sidebar */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
