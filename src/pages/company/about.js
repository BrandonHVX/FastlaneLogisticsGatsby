import React, { Component } from "react";
import Layout from "../../components/Layout";
import { graphql, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import get from "lodash/get";
import Fast from "../../images/backgrounds/fast-1.jpg";

export default class About extends Component {
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
          <div
            id="page-title"
            class="page-title page-title-layout4 text-center bg-overlay bg-parallax"
          >
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-8 offset-xl-2">
                  <h1 class="pagetitle__heading">Fastlane Logistics</h1>
                  <span class="pagetitle__subheading">
                    Always ahead of the situation.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
        <section id="about2" class="about about-2">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="heading heading-3 mb-20 pt-60">
                  <span class="heading__subtitle">About Us</span>
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
                <div
                  class="bg-img-about"
                  style={{
                    backgroundImage: `url(${Fast})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                  >
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="inner-padding">
                  <div class="heading heading-3 heading-white mb-50">
                    <h2 class="heading__title">
                      Professional <br />& Licensed Company
                    </h2>
                    <p class="heading__desc">
                      Active member operating under USDOT 2995941 and MC 70887
                      Fastlane is a licensed and bonded freight shipping and
                      trucking company. Our business is located St. Louis
                      Missouri where we are leaders in freight hauling. Fastlane
                      Logistics is a DOT registered motor carrier providing
                      transportation throughout the US.
                    </p>
                  </div>

                  <p class="color-white mb-20">
                    Providing the best transport and shipping services currently
                    available allover the world. Our skilled personnel,
                    utilising the latest communications, new tracking and
                    processing software, combined with decades of experience!
                  </p>
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
