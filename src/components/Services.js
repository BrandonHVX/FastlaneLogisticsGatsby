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
                Delivering the Best Global Logistics Solutions.
              </h2>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 ">
              <p class="heading__desc">
                Our global logistics expertise, advanced supply chain technology
                & customized logistics solutions will help you analyze, develop
                and implement successful supply chain management strategies.
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
                    We can arrange and provides with the comprehensive service
                    in the sphere of urgent, valuable, fragile or any cargoes
                    conscientious accelerated delivery by air.
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
                    We provides with the main types of basic conditions
                    International sea transportation is implemented by our
                    partners’ vessels, the largest ocean carriers.
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
                    We provides with the main types of basic conditions
                    International sea transportation is implemented by our
                    partners’ vessels, the largest ocean carriers.
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
