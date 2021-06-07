import React, { Component } from "react";
import FastLaneLogo from "../images/logo/fastlane.png";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer" class="footer">
        <div class="footer-newsletter">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                <div class="footer__newsletter-text">
                  <h6>Our Newsletter</h6>
                  <p>Sign up for industry news & insights.</p>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-9 col-xl-7">
                <form class="footer__newsletter-form d-flex flex-wrap">
                  <div class="form-group d-flex flex-1 mb-20 mr-1">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <button class="btn btn__primary btn__hover3 mb-20">
                    Submit Now!
                  </button>
                </form>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-3 col-xl-2">
                <div class="social__icons justify-content-end">
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-4 footer__widget footer__widget-about">
                <div class="footer__widget-content">
                  <img src={FastLaneLogo} alt="logo" class="footer-logo" />
                  <p>
                    Our global Optimecs expertise, advanced supply chain
                    technology & customized Optimecs solutions will help you
                    develop and implement successful supply.
                  </p>
                  <ul class="contact__list list-unstyled">
                    <li>
                      <span>Email:</span>
                      <span>Optime@fastlane-transfer.com</span>
                    </li>
                    <li>
                      <span>Phone:</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                <h6 class="footer__widget-title">Who We Are</h6>
                <div class="footer__widget-content">
                  <nav>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Meet Our Team</a>
                      </li>
                      <li>
                        <a href="#">News & Media</a>
                      </li>
                      <li>
                        <a href="#">Case Studies</a>
                      </li>
                      <li>
                        <a href="#">Contacts</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                <h6 class="footer__widget-title">What We Do</h6>
                <div class="footer__widget-content">
                  <nav>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">Warehousing</a>
                      </li>
                      <li>
                        <a href="#">Air Freight</a>
                      </li>
                      <li>
                        <a href="#">Ocean Freight</a>
                      </li>
                      <li>
                        <a href="#">Road Freight</a>
                      </li>
                      <li>
                        <a href="#">Supply Chain</a>
                      </li>
                      <li>
                        <a href="#">Packaging</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                <h6 class="footer__widget-title">Who We Serve</h6>
                <div class="footer__widget-content">
                  <nav>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">Retail & Consumer</a>
                      </li>
                      <li>
                        <a href="#">Sciences & Healthcare</a>
                      </li>
                      <li>
                        <a href="#">Industrial & Chemical</a>
                      </li>
                      <li>
                        <a href="#">Power Generation</a>
                      </li>
                      <li>
                        <a href="#">Food & Beverage</a>
                      </li>
                      <li>
                        <a href="#">Oil & Gas</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                <h6 class="footer__widget-title">Quick Links</h6>
                <div class="footer__widget-content">
                  <nav>
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">Request A Quote</a>
                      </li>
                      <li>
                        <a href="#">Track & Trace</a>
                      </li>
                      <li>
                        <a href="#">Find A Location</a>
                      </li>
                      <li>
                        <a href="#">Global Agents</a>
                      </li>
                      <li>
                        <a href="#">Help & FAQ</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="footer__copyright">
                  <span>&copy; 2019 Fastlane Transfer</span>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6">
                <nav>
                  <ul class="list-unstyled footer__copyright-links d-flex flex-wrap justify-content-end">
                    <li>
                      <a href="#">Terms & Conditions </a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
