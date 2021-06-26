import React, { Component } from "react";
import Scroll from "./Scroll";
import { Link, useStaticQuery, graphql } from "gatsby";

import Fastlane from "../images/logo/fastlane_logo.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: ""
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 1) {
      if (visibilityClass !== "navbar-shrink") {
        this.setState({ visibilityClass: "navbar-shrink" });
      }
    } else {
      if (visibilityClass === "navbar-shrink") {
        this.setState({ visibilityClass: "" });
      }
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={Fastlane} className="img-fluid" />
          </a>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? "" : "collapsed"
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span class="menu-lines">
              <span></span>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${openMenu ? "show" : ""}`}
            id="mainNav"
          >
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
              </li>
              <li class="nav__item with-dropdown">
                <Link
                  to="/services"
                  class="dropdown-toggle nav__item-link"
                  activeClassName="nav__item-link active"
                >
                  Services
                </Link>
                <i class="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul class="dropdown-menu wide-dropdown-menu">
                  <li class="nav__item">
                    <div class="row ">
                      <div class="col-sm-6 dropdown-menu-col">
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
                    </div>
                  </li>
                </ul>
              </li>

              <li class="nav__item">
                <a class="nav__item-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
