import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header class="main-header dsh-header">
        <a href="index.html" class="logo-holder">
          <img src="images/logo.png" alt=""></img>
        </a>

        <div class="header-search_btn show-search-button">
          <i class="fal fa-search"></i>
          <span>Search</span>
        </div>

        <a href="dashboard-add-listing.html" class="add-list color-bg">
          Add Listing{" "}
          <span>
            <i class="fal fa-layer-plus"></i>
          </span>
        </a>
        <div
          class="cart-btn   show-header-modal"
          data-microtip-position="bottom"
          role="tooltip"
          aria-label="Your Wishlist"
        >
          <i class="fal fa-heart"></i>
          <span class="cart-counter green-bg"></span>{" "}
        </div>

        <div class="header-user-menu">
          <div class="header-user-name">
            <span>
              <img src="images/avatar/1.jpg" alt=""></img>
            </span>
            Hello , Alisa
          </div>
          <ul>
            <li>
              <a href="dashboard-myprofile.html"> Edit profile</a>
            </li>
            <li>
              <a href="dashboard-add-listing.html"> Add Listing</a>
            </li>
            <li>
              <a href="dashboard-bookings.html"> Bookings </a>
            </li>
            <li>
              <a href="dashboard-review.html"> Reviews </a>
            </li>
            <li>
              <a href="#">Log Out</a>
            </li>
          </ul>
        </div>

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
                  Listings <i class="fa fa-caret-down"></i>
                </a>

                <ul>
                  <li>
                    <a href="listing.html">Column map</a>
                  </li>
                  <li>
                    <a href="listing2.html">Column map 2</a>
                  </li>
                  <li>
                    <a href="listing3.html">Fullwidth Map</a>
                  </li>
                  <li>
                    <a href="listing4.html">Fullwidth Map 2</a>
                  </li>
                  <li>
                    <a href="listing5.html">Without Map</a>
                  </li>
                  <li>
                    <a href="listing6.html">Without Map 2</a>
                  </li>
                  <li>
                    <a href="#">
                      Single <i class="fa fa-caret-down"></i>
                    </a>

                    <ul>
                      <li>
                        <a href="listing-single.html">Style 1</a>
                      </li>
                      <li>
                        <a href="listing-single2.html">Style 2</a>
                      </li>
                      <li>
                        <a href="listing-single3.html">Style 3</a>
                      </li>
                      <li>
                        <a href="listing-single4.html">Style 4</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">News</a>
              </li>
              <li>
                <a href="#" class="act-link">
                  Pages <i class="fa fa-caret-down"></i>
                </a>

                <ul>
                  <li>
                    <a href="#">
                      Shop<i class="fa fa-caret-down"></i>
                    </a>

                    <ul>
                      <li>
                        <a href="shop.html">Products</a>
                      </li>
                      <li>
                        <a href="product-single.html">Product single</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="author-single.html">User single</a>
                  </li>
                  <li>
                    <a href="help.html">How it Works</a>
                  </li>
                  <li>
                    <a href="booking.html">Booking</a>
                  </li>
                  <li>
                    <a href="pricing-tables.html">Pricing</a>
                  </li>
                  <li>
                    <a href="dashboard.html">User Dasboard</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                  <li>
                    <a href="dashboard-add-listing.html">Add Listing</a>
                  </li>
                  <li>
                    <a href="invoice.html">Invoice</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
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

export default Header;
