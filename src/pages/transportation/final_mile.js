import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import get from "lodash/get";
import Layout from "../../components/Layout";
import ServiceQuote from "../../components/ServiceQuote";

export default class FinalMile extends Component {
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
                  <h1 class="pagetitle__heading">Final Mile</h1>
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
                            to="/transportation/final_mile"
                            activeClassName="active"
                            partiallyActive={true}
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
                </aside>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-8">
                <div class="row">
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="text__block mb-40">
                      <h5 class="text__block-title">Overview</h5>
                      <p class="text__block-desc">
                        Our team will help you simplify your home delivery
                        needs. We cater to businesses that sell bulky and
                        oversized products such as furniture and fixtures. Our
                        final mile delivery services are customized to your
                        needs.
                      </p>
                      <p class="text__block-desc">
                        As your ecommerce sales grow, we can strengthen your
                        supply chain. The delivery is one of the most import
                        aspects of online shopping. Through our service, we can
                        help you deliver a great experience. Our transit times
                        and customer service are second to none. We can provide
                        next-day, second-day and in many cases same-day service.
                      </p>
                      <p class="text__block-desc">
                        We offer a variety of residential delivery options. They
                        range from standard to customized white glove delivery
                        services. All services provide direct pickup and
                        delivery to your customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="text__block">
                  <h5 class="text__block-title">Service Options</h5>
                </div>
                <div class="row fancybox-layout2">
                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-wallet"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Residential Delivery</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-search"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">Commercial Non-Dock</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-12 col-md-6 col-lg-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-trolley"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title">White Golve Services</h4>
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
    background: file(relativePath: { eq: "backgrounds/fast-haul-3.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
