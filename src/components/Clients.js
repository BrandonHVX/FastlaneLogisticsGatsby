import React, { Component } from "react";

export default class Clients extends Component {
  render() {
    return (
      <section id="clients" class="clients clients-1 pt-50 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div class="heading text-center mb-50">
                <span class="heading__subtitle">Join Us Today</span>
                <h2 class="heading__title">Our Partners</h2>
                <p class="heading__desc">
                  Our skilled personnel, utilising the latest communications,
                  tracking and processing software, combined with decades of
                  experience! Through integrated supply chain solutions, Logisti
                  drives sustainable competitive advantages to some of
                  Australia's largest companies.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 d-flex align-items-start">
              <div class="carousel carousel">
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/9.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/10.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/11.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/12.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/13.png" alt="client" />
                  </a>
                </div>
                <div class="client">
                  <a href="#">
                    <img src="assets/images/clients/11.png" alt="client" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
