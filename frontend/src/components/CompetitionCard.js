import React from "react";
import { Link } from "react-router-dom";

export default class CompetitionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competition: props.Competition,
    };
  }

  render() {
    return (
      <div class="listing-item">
        <article class="geodir-category-listing fl-wrap">
          <div class="geodir-category-img">
            <div class="geodir-js-favorite_btn">
              <i class="fal fa-heart"></i>
              <span>Save</span>
            </div>
            <a
              href="listing-single.html"
              class="geodir-category-img-wrap fl-wrap"
            >
              <img src="/images/all/1.jpg" alt="" />
            </a>
          </div>
          <div class="geodir-category-content fl-wrap title-sin_item">
            <div class="geodir-category-content-title fl-wrap">
              <div class="geodir-category-content-title-item">
                <h3 class="title-sin_map">
                  <Link to={"competition?id=" + this.state.competition.Id}>
                    {this.state.competition.title || "No Title"}
                  </Link>
                </h3>
                <div class="geodir-category-location fl-wrap">
                  <a href="#">
                    <i class="fas fa-map-marker-alt"></i>{" "}
                    {this.state.competition.place || "No Place"}
                  </a>
                </div>
              </div>
            </div>
            <div class="geodir-category-text fl-wrap">
              <div class="facilities-list fl-wrap">
                <div class="facilities-list-title">
                  Type: {this.state.competition.type || "No Type"}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
