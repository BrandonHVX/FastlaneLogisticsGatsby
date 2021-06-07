import React, { Component } from "react";
import Layout from "../../components/Layout";

export default class About extends Component {
  render() {
    return (
      <Layout>
        <section
          id="page-title"
          class="page-title page-title-layout4 text-center bg-overlay bg-parallax"
        >
          <div class="bg-img">
            <img src="assets/images/page-titles/1.jpg" alt="background" />
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                <span class="pagetitle__subheading">
                  Affordable Price, Certified Forwarders
                </span>
                <h1 class="pagetitle__heading">
                  Advanced Supply Chain Technology & Customized Logistics
                  Solutions!
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section id="about2" class="about about-2">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading heading-3 mb-20 pt-60">
                  <span class="heading__subtitle">Fastlane Logistics</span>
                  <h2 class="heading__title">
                    Flexible Pricing <br />& Years Of Experience!
                  </h2>
                  <p>
                    Fastlane Logistics is a leading provider of freight
                    transportation and supply chain management nationwide.
                    Fastlane specializes in delivering customized solutions for
                    service offerings that include dedicated, expedited, retail
                    distribution services and transportation management.
                  </p>
                </div>
                <ul class="list-items list-items-layout2 list-unstyled mb-30">
                  <li>Transparent Pricing, Environmental Sensitivity</li>
                  <li>24/7 Hours Support, Professional and Qualified</li>
                  <li>Real Time Tracking, Fast & Efficient Delivery</li>
                  <li>Warehouse Storage, Personalised solutions</li>
                </ul>
                <a href="#" class="btn btn__primary mr-30 mb-20">
                  More About Us
                </a>
                <a
                  href="#"
                  class="btn btn__secondary btn__link btn__underlined mb-20"
                >
                  Find your solution
                </a>
              </div>
              <div class="col-sm-12 col-md-9 col-lg-6">
                <div class="about__img">
                  <img
                    src="https://carfax-img.vast.com/carfax/897322457342399290/2/344x258"
                    alt="about img"
                    class="img-fluid"
                  />
                  <div class="counter-item-wrapper counters-white">
                    <div class="counter-item">
                      <div class="counter__icon">
                        <i class="icon-box"></i>
                      </div>
                      <h4>
                        <span class="counter">6,1541</span>
                      </h4>
                      <p class="counter__desc">Delivered Goods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="banner3" class="banner banner-3 p-0 bg-theme">
          <div class="container-fluid col-padding-0">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6 background-banner bg-overlay">
                <div class="bg-img">
                  <img src="assets/images/banners/7.jpg" alt="background" />
                </div>
                <div class="video__btn video__btn-white video__btn-right-center">
                  <a
                    class="popup-video"
                    href="https://www.youtube.com/watch?4=&v=TKnufs85hXk"
                  >
                    <span class="video__player-animation"></span>
                    <span class="video__player-animation video__player-animation-2"></span>
                    <div class="video__player">
                      <i class="fa fa-play"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="inner-padding">
                  <div class="heading heading-3 heading-white mb-50">
                    <h2 class="heading__title">
                      Flexible Pricing <br />& Years Of Experience!
                    </h2>
                    <p class="heading__desc">
                      Established in 1971, Averitt Express is a leading provider
                      of freight transportation and supply chain management with
                      international reach to more than 100 countries. Averitt
                      specializes in delivering customized solutions for service
                      offerings that include climate controlled, cross
                      border/domestic offshore, dedicated, expedited,
                      intermodal, international ocean/air, local customization,
                      less-than-truckload, PortSide®, retail distribution
                      services, transportation management, truckload (dry van,
                      flatbed, brokerage) and warehousing services. Averitt's
                      technology offerings include a full suite of web-based
                      shipping tools, electronic data interchange (EDI), and
                      transportation and operations management systems. For more
                      information, call 1-800-AVERITT (283-7488) or visit
                      AverittExpress.com.
                    </p>
                  </div>
                  <div class="counters-white d-flex flex-wrap justify-content-between">
                    <div class="counter-item">
                      <h4>
                        <span class="counter">3,214</span>
                        <span>m</span>
                      </h4>
                      <p class="counter__desc">Clients Worldwide</p>
                    </div>
                    <div class="counter-item">
                      <h4>
                        <span class="counter">5,154</span>
                        <span>m</span>
                      </h4>
                      <p class="counter__desc">Delivered Goods</p>
                    </div>
                    <div class="counter-item">
                      <h4>
                        <span class="counter">8,845</span>
                        <span>m</span>
                      </h4>
                      <p class="counter__desc">Miles Driven</p>
                    </div>
                  </div>
                  <p class="color-white mb-20">
                    Providing the best transport and shipping services currently
                    available allover the world. Our skilled personnel,
                    utilising the latest communications, new tracking and
                    processing software, combined with decades of experience!
                  </p>
                  <img
                    src="assets/images/about/singnture2.png"
                    alt="singnture"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
