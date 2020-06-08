import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  withRouter,
  Link,
} from "react-router-dom";
import { fetchSingleCompetition } from "../services/competitionService";
import S3Service from "../services/S3Service";
import CompetitionResultSection from "./SingleCompetitionSections/CompetitionResultsSection";
import CompetitionAnalyticSection from "./SingleCompetitionSections/CompetitionAnalyticsSection";

function SingleCompetition(props) {
  let { path, url } = useRouteMatch();
  const [image, setImage] = useState("");
  const [competition, setCompetition] = useState({ races: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCompetition();
    fetchImage();
  }, []);

  async function fetchCompetition() {
    const { id } = props.match.params;
    let fetchedCompetition = await fetchSingleCompetition(id);

    setCompetition(fetchedCompetition);
    setLoading(false);
  }

  function fetchImage() {
    let url = S3Service.ReceiveImageUrlFromBucket("thumbnail.jpg", {
      resize: {
        width: 1200,
        height: 800,
      },
    });

    setImage(url);
  }
  return (
    <div id="wrapper">
      <div class="content">
        <section
          class="listing-hero-section hidden-section"
          data-scrollax-parent="true"
          id="sec1"
        >
          <div class="bg-parallax-wrap">
           <div className="bg par-elem " data-bg={image} data-scrollax="properties: { translateY: '30%' }" style={{backgroundImage: {image}, transform: 'translateZ(0px) translateY(-1.73661%)'}} />

            <div class="overlay"></div>
          </div>
          <div class="container">
            <div class="list-single-header-item  fl-wrap">
              <div class="row">
                <div class="col-md-9">
                  <h1>
                    {competition.title || "No Title"}
                    <span class="verified-badge">
                      <i class="fal fa-check"></i>
                    </span>
                  </h1>
                  <div class="geodir-category-location fl-wrap">
                    <a href="#">
                      <i class="fas fa-map-marker-alt"></i> {competition.place}
                    </a>{" "}
                    <a href="#">
                      {" "}
                      <i class="fal fa-phone"></i>
                      +38099231212
                    </a>{" "}
                    <a href="#">
                      <i class="fal fa-envelope"></i> yourmail@domain.com
                    </a>
                  </div>
                </div>
                <div class="col-md-3"></div>
              </div>
            </div>
            <div class="list-single-header_bottom fl-wrap">
              <a class="listing-item-category-wrap" href="#">
                <div class="listing-item-category  red-bg">
                  <i class="fal fa-cheeseburger"></i>
                </div>
                <span>WorldChampîonships</span>
              </a>
              <div class="list-single-author">
                {" "}
                <a href="author-single.html">
                  <span class="author_avatar">
                    {" "}
                    <img alt="" src={image} />
                  </span>
                  By Bram Sikkens
                </a>
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
                  <Link to={url + "/results"}>
                    <i class="fal fa-utensils"></i>Results
                  </Link>
                </li>

                <li>
                  <Link to={url + "/analytics"}>
                    <i class="fal fa-utensils"></i>Analytics
                  </Link>
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

        <Switch>
          <Route path={`${path}/analytics`}>
            <CompetitionAnalyticSection />
          </Route>
          <Route path={`${path}/results`}>
            <CompetitionResultSection races={competition.races} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(SingleCompetition);
