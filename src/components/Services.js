import React, { Component } from "react";

import "../styles/scss/style.scss";

class Template extends Component {
  render() {
    return (
      <section id="services" class="services pb-40">
        <div class="container">
          <div class="row heading heading-2 mb-40">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <span class="heading__subtitle">Real Solutions, Real Fast!</span>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6">
              <h2 class="heading__title">
                Delivering the Best Logistics Solutions Nationwide.
              </h2>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 ">
              <p class="heading__desc">
                Our nationwide logistics expertise & customized logistics
                solutions will help you analyze, develop and implement
                successful services tailored to your business.
              </p>
            </div>
          </div>
          <div class="row text-center">
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="service-item">
                <div class="service__icon">
                  <i class="icon-courier"></i>
                </div>
                <div class="service__content">
                  <h4 class="service__title">Expedited Delivery</h4>
                  <p class="service__desc">
                    Shipment delays. Pressing delivery deadlines. Last-minute
                    orders. Freight needed yesterday. No matter your urgent
                    shipping needs, expedited transportation is an ideal
                    solution.
                  </p>
                  <a href="#" class="btn btn__white">
                    <span>Read More</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="service-item">
                <div class="service__icon">
                  <i class="icon-delivery-truck-2"></i>
                </div>
                <div class="service__content">
                  <h4 class="service__title">Final Mile</h4>
                  <p class="service__desc">
                    Our team will help you simplify your home delivery needs. We
                    cater to businesses. Our final mile delivery services are
                    customized to your needs.
                  </p>
                  <a href="#" class="btn btn__white">
                    <span>Read More</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="service-item">
                <div class="service__icon">
                  <i class="icon-truck"></i>
                </div>
                <div class="service__content">
                  <h4 class="service__title">Long Haul</h4>
                  <p class="service__desc">
                    Fast delivery for regional and cross-country distances can
                    create unique logistical challenges for B2B customers who
                    need long haul trucking options.
                  </p>
                  <a href="#" class="btn btn__white">
                    <span>Read More</span>
                    <i class="icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center">
              <p class="text__link mb-0">
                Logistic & Transport Solutions Saves Your Time{" "}
                <a href="#">Find your solution</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Template;
