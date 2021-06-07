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
          <section id="page-title">
            <div class="bg-img">
              <img src="assets/images/page-titles/8.jpg" alt="background" />
            </div>
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <h1 class="pagetitle__heading">Long Haul</h1>
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
                          >
                            Expedited Delivery
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/transportation/expedited_delivery"
                            activeClassName="active"
                          >
                            Final Mile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/transportation/long_haul"
                            activeClassName="active"
                            partiallyActive={true}
                          >
                            Long Haul
                          </Link>
                        </li>
                      </ul>
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
                        Our airfreight staff attaches great importance to
                        customizing the booking process for our customers.
                        That’s why we strive to find the air freight solution
                        that best suits your needs. We’ll ask you when the
                        freight is available, what the required delivery date
                        is, and if there’s potential to save on time or cost.
                        Your answers to these and other questions help us decide
                        if you should book the air freight as direct. We'll also
                        see if our sea-air service is a better solution for
                      </p>
                      <p class="text__block-desc">
                        We have more than twenty years of experience. During
                        that time, we’ve become expert in freight transportation
                        by air and all its related services. We work closely
                        with all major airlines around the world. Ongoing
                        negotiations ensure that we always have the cargo space
                        we need and the ability to offer you competitive rates -
                        even during the high season.
                      </p>
                      <p class="text__block-desc">
                        Where possible, we’ll erect and dismantle Unit Load
                        Devices (ULDs), reducing significantly the risk of
                        damage to your shipment and saving you time and expense.
                        We can do this because many of our freight stations have
                        their own ground transportation at or around the
                        airport.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row"></div>
                <div class="row fancybox-layout2 mb-50">
                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-wallet"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Transparent Pricing</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-search"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Real-Time Tracking</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-trolley"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Warehouse Storage</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-package-6"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Security For Cargo</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-payment-method"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Easy Payment Methods</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-call-center"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">24/7 Hours Support</h4>
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
    background: file(relativePath: { eq: "backgrounds/fast-haul-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
