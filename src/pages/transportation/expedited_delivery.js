import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import get from "lodash/get";

import Layout from "../../components/Layout";

export default class ExpeditedDelivery extends Component {
  render() {
    const imageData = get(this, "props.data.background.childImageSharp.fluid");
    return (
      <Layout>
        <BackgroundImage
          Tag="section"
          className={`bg-img bg-overlay-1 page-title bg-parallax`}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <section id="page-title" class="">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <h1 class="pagetitle__heading">Expedited Delivery</h1>
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="services.html">services</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Warehousing
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </BackgroundImage>

        <section id="textContentSection" class="text-content-section pb-40">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-4">
                <aside class="sidebar mb-30">
                  <div class="widget widget-categories">
                    <h5 class="widget__title">Transport Services</h5>
                    <div class="widget-content">
                      <ul class="list-unstyled">
                        <li>
                          <Link
                            to="/transportation/expedited_delivery"
                            activeClassName="active"
                            partiallyActive={true}
                          >
                            Expedited Delivery
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/transportation/final_mile"
                            activeClassName="active"
                          >
                            Final Mile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/transportation/long_haul"
                            activeClassName="active"
                          >
                            Long Haul
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="widget widget-help bg-overlay bg-overlay-grdient-secondary">
                    <div class="bg-img">
                      <img src="assets/images/sidebar/1.jpg" alt="background" />
                    </div>
                    <div class="widget__content">
                      <h5>
                        How Can <br /> We Help You!
                      </h5>
                      <p>
                        We understand the importance approaching each work
                        integrally and believe in the power of simple and easy
                        communication.
                      </p>
                      <a
                        href="#"
                        class="btn btn__primary btn__hover2 btn__block"
                      >
                        Schedule An Appointment
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-8">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="text__block mb-40">
                      <h5 class="text__block-title">Overview</h5>
                      <p class="text__block-desc">
                        Shipment delays. Pressing delivery deadlines.
                        Last-minute orders. Freight needed yesterday. No matter
                        your urgent shipping needs, expedite transportation is
                        an ideal solution. Use it day or night to solve your
                        time-sensitive logistics challenges, and keep your
                        supply chain running smoothly.
                      </p>
                      <p class="text__block-desc"></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="text__block">
                      <h5 class="text__block-title">Why Us!</h5>
                      <p class="text__block-desc">
                        ArcBest® provides best-in-class ground expedite service
                        for your time-sensitive freight. Through our Panther
                        Premium Logistics® fleet and a large network of capacity
                        providers, we offer fast, efficient transportation
                        across the U.S., Canada and Mexico. Your expedite
                        freight travels on an exclusive-use vehicle, without
                        co-mingling, and arrives without interruption.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row fancybox-layout2 mb-50">
                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-wallet"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">
                          Same Day & Express Delivery
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-search"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">
                          Scheduled & Routed Delivery
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-trolley"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">
                          Hot Shot <br /> Delivery
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-package-6"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">
                          Local Pick Up & Delivery
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    background: file(relativePath: { eq: "backgrounds/fast-haul-4.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
