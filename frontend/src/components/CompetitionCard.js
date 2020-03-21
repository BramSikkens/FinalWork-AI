import React from "react";

export default class CompetitionCard extends React.Component {
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
              <img src="images/all/1.jpg" alt="" />
            </a>
          </div>
          <div class="geodir-category-content fl-wrap title-sin_item">
            <div class="geodir-category-content-title fl-wrap">
              <div class="geodir-category-content-title-item">
                <h3 class="title-sin_map">
                  <a href="competition">
                    2019 ICF Canoe Sprint World Championships
                  </a>
                </h3>
                <div class="geodir-category-location fl-wrap">
                  <a href="#">
                    <i class="fas fa-map-marker-alt"></i> Hungary
                  </a>
                </div>
              </div>
            </div>
            <div class="geodir-category-text fl-wrap">
              <div class="facilities-list fl-wrap">
                <div class="facilities-list-title">
                  Type: Worldchampionship{" "}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
