import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <header id="header" class="header header-transparent">
          <nav class="navbar navbar-expand-lg sticky-navbar">
            <div class="container">
              <a class="navbar-brand" href="index.html">
                <img
                  src="assets/images/logo/logo-light.png"
                  class="logo-light"
                  alt="logo"
                />
                <img
                  src="assets/images/logo/logo-dark.png"
                  class="logo-dark"
                  alt="logo"
                />
              </a>
              <button class="navbar-toggler" type="button">
                <span class="menu-lines">
                  <span></span>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="mainNavigation">
                <ul class="navbar-nav ml-auto">
                  <li class="nav__item with-dropdown">
                    <a
                      href="index.html"
                      class="dropdown-toggle nav__item-link active"
                    >
                      Home
                    </a>
                    <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                    <ul class="dropdown-menu">
                      <li class="nav__item">
                        <a href="index.html" class="nav__item-link">
                          Home Main
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="home-modern.html" class="nav__item-link">
                          Home Moderm
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="home-classic.html" class="nav__item-link">
                          Home classic
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav__item with-dropdown">
                    <a
                      href="about-us.html"
                      class="dropdown-toggle nav__item-link"
                    >
                      Company
                    </a>
                    <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                    <ul class="dropdown-menu">
                      <li class="nav__item">
                        <a href="about-us.html" class="nav__item-link">
                          About Us
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="why-us.html" class="nav__item-link">
                          Why Choose Us
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="leadership-team.html" class="nav__item-link">
                          Leadership Team
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="global-locations.html" class="nav__item-link">
                          Global Locations
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="gallery.html" class="nav__item-link">
                          Our Gallery
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="careers.html" class="nav__item-link">
                          careers
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav__item with-dropdown">
                    <a
                      href="services.html"
                      class="dropdown-toggle nav__item-link"
                    >
                      Services
                    </a>
                    <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                    <ul class="dropdown-menu wide-dropdown-menu">
                      <li class="nav__item">
                        <div class="row mx-0">
                          <div class="col-sm-6 dropdown-menu-col">
                            <h6>Transport Services</h6>
                            <ul class="nav flex-column">
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-service.html"
                                >
                                  Warehousing
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-service.html"
                                >
                                  Air Freight
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-service.html"
                                >
                                  Ocean Freight
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-service.html"
                                >
                                  Road Freight
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-service.html"
                                >
                                  Supply Chain
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-service.html"
                                >
                                  Packaging
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="col-sm-6 dropdown-menu-col">
                            <h6>Industry Solutions</h6>
                            <ul class="nav flex-column">
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-industry.html"
                                >
                                  Retail & Consumer
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-industry.html"
                                >
                                  Sciences & Healthcare
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-industry.html"
                                >
                                  Industrial & Chemical
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-industry.html"
                                >
                                  Power Generation
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-industry.html"
                                >
                                  Food & Beverage
                                </a>
                              </li>
                              <li class="nav__item">
                                <a
                                  class="nav__item-link"
                                  href="single-industry.html"
                                >
                                  Oil & Gas
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="nav__item with-dropdown">
                    <a
                      href="blog-grid.html"
                      class="dropdown-toggle nav__item-link"
                    >
                      News & Media
                    </a>
                    <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                    <ul class="dropdown-menu">
                      <li class="nav__item">
                        <a href="blog-grid.html" class="nav__item-link">
                          blog grid
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="blog-single-post.html" class="nav__item-link">
                          blog single post
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="case-studies.html" class="nav__item-link">
                          case studies
                        </a>
                      </li>

                      <li class="nav__item">
                        <a
                          href="case-studies-single.html"
                          class="nav__item-link"
                        >
                          case study Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav__item with-dropdown">
                    <a
                      href="#"
                      data-toggle="dropdown"
                      class="dropdown-toggle nav__item-link"
                    >
                      Features
                    </a>
                    <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                    <ul class="dropdown-menu">
                      <li class="nav__item">
                        <a href="request-quote.html" class="nav__item-link">
                          request a quote
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="track-shipment.html" class="nav__item-link">
                          track and trace
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="find-location.html" class="nav__item-link">
                          find Location
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="rates.html" class="nav__item-link">
                          Rates & Pricing
                        </a>
                      </li>

                      <li class="nav__item">
                        <a href="faqs.html" class="nav__item-link">
                          help and faqs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav__item">
                    <a href="contacs.html" class="nav__item-link">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
              <div class="navbar-modules">
                <ul class="modules__wrapper d-flex align-items-center list-unstyled">
                  <li>
                    <a href="#" class="module__btn module__btn-search">
                      <i class="fa fa-search"></i>
                    </a>
                  </li>
                  <li class="d-none d-lg-block">
                    <a
                      href="request-quote.html"
                      class="module__btn btn__request btn"
                    >
                      <span>Request A Quote</span>
                      <i class="icon-arrow-right"></i>
                    </a>
                  </li>
                  <li>
                    <div class="dropdown">
                      <button
                        class="module__btn dropdown-toggle"
                        id="langDrobdown"
                        data-toggle="dropdown"
                      >
                        <span>En</span>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="langDrobdown">
                        <a class="dropdown-item" href="#">
                          <img
                            src="assets/images/flags/united-states.png"
                            alt="us"
                          />
                          <span>Us</span>
                        </a>
                        <a class="dropdown-item" href="#">
                          <img
                            src="assets/images/flags/germany.png"
                            alt="germany"
                          />
                          <span>germany</span>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
