import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CompetitionCard from "../components/CompetitionCard";
import CompetitionList from "../components/CompetitionList";

import { fetchAllCompetitions } from "../services/competitionService";

export default class Competitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      competitions: []
    };
  }

  async componentDidMount() {
    let fetchedCompetitons = await fetchAllCompetitions();
    this.setState(previousState => ({
      competitions: fetchedCompetitons,
      loading: false
    }));
  }

  render() {
    if (this.state.loading == true) {
      return <p>Loading</p>;
    } else {
      return (
        <div id="wrapper">
          <div class="content">
            <section
              class="parallax-section single-par"
              data-scrollax-parent="true"
            >
              <div
                class="bg par-elem "
                data-bg="images/bg/1.jpg"
                data-scrollax="properties: { translateY: '30%' }"
              ></div>
              <div class="overlay op7"></div>
              <div class="container">
                <div class="section-title center-align big-title">
                  <h2>
                    <span>Competitions</span>
                  </h2>
                  <span class="section-separator"></span>
                  <div class="breadcrumbs fl-wrap">
                    <a href="#">Home</a>
                    <span>Competitions</span>
                  </div>
                </div>
              </div>
              <div class="header-sec-link">
                <a href="#sec1" class="custom-scroll-link">
                  <i class="fal fa-angle-double-down"></i>
                </a>
              </div>
            </section>

            <section class="gray-bg small-padding no-top-padding-sec" id="sec1">
              <div class="container">
                <div class="list-main-wrap-header fl-wrap   block_box no-vis-shadow no-bg-header fixed-listing-header">
                  <div class="list-main-wrap-title">
                    <h2>
                      Results For : <span>New York </span>
                    </h2>
                  </div>

                  <div class="list-main-wrap-opt">
                    <div class="price-opt">
                      <span class="price-opt-title">Sort by:</span>
                      <div class="listsearch-input-item">
                        <select
                          data-placeholder="Popularity"
                          class="chosen-select no-search-select"
                        >
                          <option>Popularity</option>
                          <option>Average rating</option>
                          <option>Price: low to high</option>
                          <option>Price: high to low</option>
                        </select>
                      </div>
                    </div>

                    <div class="grid-opt">
                      <ul class="no-list-style">
                        <li class="grid-opt_act">
                          <span
                            class="two-col-grid act-grid-opt tolt"
                            data-microtip-position="bottom"
                            data-tooltip="Grid View"
                          >
                            <i class="fal fa-th"></i>
                          </span>
                        </li>
                        <li class="grid-opt_act">
                          <span
                            class="one-col-grid tolt"
                            data-microtip-position="bottom"
                            data-tooltip="List View"
                          >
                            <i class="fal fa-list"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    class="custom-scroll-link back-to-filters clbtg"
                    href="#lisfw"
                  >
                    <i class="fal fa-search"></i>
                  </a>
                </div>

                <div class="mob-nav-content-btn  color2-bg show-list-wrap-search ntm fl-wrap">
                  <i class="fal fa-filter"></i> Filters
                </div>
                <div class="fl-wrap">
                  <div
                    class="listsearch-input-wrap lws_mobile fl-wrap tabs-act inline-lsiw"
                    id="lisfw"
                  >
                    <div class="tabs-container fl-wrap">
                      <div class="tab">
                        <div
                          id="filters-search"
                          class="tab-content  first-tab "
                        >
                          <div class="fl-wrap">
                            <div class="row">
                              <div class="col-md-2">
                                <div class="listsearch-input-item">
                                  <span class="iconn-dec">
                                    <i class="far fa-bookmark"></i>
                                  </span>
                                  <input
                                    type="text"
                                    placeholder="Year"
                                    value=""
                                  />
                                </div>
                              </div>

                              <div class="col-md-3">
                                <div class="listsearch-input-item">
                                  <select
                                    data-placeholder="City/Location"
                                    class="chosen-select no-search-select"
                                  >
                                    <option>Type</option>
                                    <option>World Championship</option>
                                    <option>World Cup</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="listsearch-input-item location autocomplete-container">
                                  <span class="iconn-dec">
                                    <i class="far fa-map-marker"></i>
                                  </span>
                                  <input
                                    type="text"
                                    placeholder="Location"
                                    class="autocomplete-input"
                                    id="autocompleteid3"
                                    value=""
                                  />
                                  <a href="#">
                                    <i class="fal fa-location"></i>
                                  </a>
                                </div>
                              </div>

                              <div class="col-md-2">
                                <div class="listsearch-input-item">
                                  <button
                                    class="header-search-button color-bg"
                                    onclick="window.location.href='listing.html'"
                                  >
                                    <i class="far fa-search"></i>
                                    <span>Search</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="listing-item-container init-grid-items fl-wrap nocolumn-lic three-columns-grid">
                    {/*CompetitionList*/}
                    <CompetitionList competitions={this.state.competitions} />
                  </div>
                </div>
              </div>
            </section>
            <div class="limit-box fl-wrap"></div>
          </div>
        </div>
      );
    }
  }
}
