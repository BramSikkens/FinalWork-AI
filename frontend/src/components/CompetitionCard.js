import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import S3Service from "../services/S3Service";

const CompetitionCard = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    let url = S3Service.ReceiveImageUrlFromBucket("thumbnail.jpg", {
      resize: {
        width: 250,
        height: 200,
        fit: "outside",
      },
    });

    setImage(url);
  }, []);


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
            <img src={image} alt="" />
          </a>
        </div>
        <div class="geodir-category-content fl-wrap title-sin_item">
          <div class="geodir-category-content-title fl-wrap">
            <div class="geodir-category-content-title-item">
              <h3 class="title-sin_map">
                <Link to={"Competition/" + props.Competition.Id}>
                  {props.Competition.title || "No Title"}
                </Link>
              </h3>
              <div class="geodir-category-location fl-wrap">
                <a href="#">
                  <i class="fas fa-map-marker-alt"></i>{" "}
                  {props.Competition.place || "No Place"}
                </a>
              </div>
            </div>
          </div>
          <div class="geodir-category-text fl-wrap">
            <div class="facilities-list fl-wrap">
              <div class="facilities-list-title">
                Type: {props.Competition.type || "No Type"}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CompetitionCard;
