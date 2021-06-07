import React, { Component } from "react";

export default class HeaderCta extends Component {
  render() {
    return (
      <section id="fancyboxLayout3" class="fancybox-layout3 p-0">
        <div class="container">
          <div class="row fancybox-boxes-wrap">
            <div class="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div class="fancybox__icon">
                <i class="icon-wallet"></i>
              </div>
              <div class="fancybox__content">
                <h4 class="fancybox__title">Fast & Efficient Delivery</h4>
                <p class="fancybox__desc">
                  International supply chains involves challenging regulations.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div class="fancybox__icon">
                <i class="icon-search"></i>
              </div>
              <div class="fancybox__content">
                <h4 class="fancybox__title">24/7 Hour Support</h4>
                <p class="fancybox__desc">
                  Ensure customers’ supply chains are fully compliant by
                  practices.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div class="fancybox__icon">
                <i class="icon-trolley"></i>
              </div>
              <div class="fancybox__content">
                <h4 class="fancybox__title">Warehouse Storage</h4>
                <p class="fancybox__desc">
                  Depending on your product, we provide warehouse activities.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-3 fancybox-item">
              <div class="fancybox__icon">
                <i class="icon-package-6"></i>
              </div>
              <div class="fancybox__content">
                <h4 class="fancybox__title">Personalized Solutions</h4>
                <p class="fancybox__desc">
                  High security requirements and are certified to local
                  standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
