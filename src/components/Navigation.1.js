import React, { Component, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import get from "lodash/get";
import styles from "./navigation.module.css";
import Fastlane from "../images/logo/fastlane.png";

const Navigation = () => {
  const [displaySidenav, setDisplaySidenav] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setDisplaySidenav(!displaySidenav);
  };
  return (
    <header id="header" className="header header-transparent">
      <nav
        className={`navbar navbar-expand-lg sticky-navbar ${displaySidenav &&
          "navbar-nav"}`}
      >
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src={Fastlane} />
          </a>
          <button
            onClick={e => handleClick(e)}
            class="navbar-toggler"
            type="button"
          >
            <span class="menu-lines">
              <span></span>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul class="navbar-nav m-auto">
              <li class="nav__item with-dropdown">
                <Link
                  to="/"
                  class="dropdown-toggle nav__item-link"
                  activeClassName="nav__item-link active"
                >
                  Home
                </Link>
                <i class="fa fa-angle-right" data-toggle="dropdown"></i>
              </li>
              <li class="nav__item with-dropdown">
                <Link
                  to="/company/about"
                  activeClassName="nav__item-link active"
                  class="dropdown-toggle nav__item-link"
                >
                  Company
                </Link>
                <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul class="dropdown-menu">
                  <li class="nav__item">
                    <Link
                      to="/company/about"
                      activeClassName="nav__item-link active"
                      class="nav__item-link"
                    >
                      About Us
                    </Link>
                  </li>

                  <li class="nav__item">
                    <Link
                      to="/company/about"
                      activeClassName="nav__item-link active"
                      class="nav__item-link"
                    >
                      Why Choose Us
                    </Link>
                  </li>

                  <li class="nav__item">
                    <Link
                      to="/company/about"
                      activeClassName="nav__item-link active"
                      class="nav__item-link"
                    >
                      Leadership Team
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav__item with-dropdown">
                <Link
                  to="/services/"
                  activeClassName="nav__item-link active"
                  class="dropdown-toggle nav__item-link"
                >
                  Services
                </Link>
                <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul class="dropdown-menu wide-dropdown-menu">
                  <li class="nav__item">
                    <div class="row mx-0">
                      <div class="col-sm-6 dropdown-menu-col">
                        <h6>Transport Services</h6>
                        <ul class="nav flex-column">
                          <li class="nav__item">
                            <Link
                              to="/transportation/expedited_delivery/"
                              activeClassName="nav__item-link active"
                              class="nav__item-link"
                            >
                              Expedited Delivery
                            </Link>
                          </li>

                          <li class="nav__item">
                            <Link
                              to="/transportation/final_mile/"
                              activeClassName="nav__item-link active"
                              class="nav__item-link"
                            >
                              Final Mile
                            </Link>
                          </li>
                          <li class="nav__item">
                            <Link
                              to="/transportation/long_haul/"
                              activeClassName="nav__item-link active"
                              class="nav__item-link"
                            >
                              Long Haul
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div class="col-sm-6 dropdown-menu-col">
                        <h6>Industry Solutions</h6>
                        <ul class="nav flex-column">
                          <li class="nav__item">
                            <a class="nav__item-link">Amazon Delivery</a>
                          </li>
                          <li class="nav__item">
                            <a class="nav__item-link">Owners & Operators</a>
                          </li>

                          <li class="nav__item">
                            <a class="nav__item-link">Food & Beverage</a>
                          </li>
                          <li class="nav__item">
                            <a class="nav__item-link">Small Businesses</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li class="nav__item">
                <a class="nav__item-link">Contact</a>
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
                <a class="module__btn btn__request btn">
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
  );
};

export default Navigation;
