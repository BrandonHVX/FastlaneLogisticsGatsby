import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import {
  Carousel,
  Jumbotron,
  Container,
  Button,
  Tab,
  Col,
  Nav,
  Row
} from "react-bootstrap";

import Layout from "../components/Layout";

import Img from "gatsby-image";

import Features from "../components/Features";

import Services from "../components/Services";
import Cta from "../components/Cta";
import Quote from "../components/Quote";
import BG from "../images/backgrounds/fast-2.jpg";

class RootIndex extends React.Component {
  render() {
    const images = get(this, "props.data.allFile.edges");
    const imageData = get(this, "props.data.background.childImageSharp.fluid");

    return (
      <Layout>
        <section id="slider1" class="carousel carousel-1">
          <Carousel>
            {images.map(image => (
              <Carousel.Item key={image.node.id}>
                <Img fluid={image.node.childImageSharp.fluid}>ello</Img>
              </Carousel.Item>
            ))}
          </Carousel>
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 d-none d-lg-block">
                {/* <div class="owl-thumbs thumbs-dots" data-slider-id="slider1">
                  {images.map(image => (
                    <button key={image.node.id} class="owl-thumb-item">
                      <i class="icon-forklift-1"></i>
                      <span>{image.node.id}</span>
                    </button>
                  ))}
                </div> */}
              </div>
              <div class="col-sm-12 col-md-12 col-lg-12 d-none d-lg-block">
                <a
                  class="btn btn__video btn__video-lg popup-video"
                  href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                >
                  <div class="video__player">
                    <span class="video__player-animation"></span>
                    <span class="video__player-animation video__player-animation-2"></span>
                    <i class="fa fa-play"></i>
                  </div>
                  <span class="video__btn-title">Watch Our Presentation!</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="fancyboxLayout3" class="fancybox-layout3 p-0">
          <div class="container">
            <div class="row fancybox-boxes-wrap">
              <div class="col-sm-12 col-md-4 col-lg-4 fancybox-item ">
                <div class="fancybox__icon">
                  <i class="icon-wallet"></i>
                </div>
                <div class="fancybox__content">
                  <h4 class="fancybox__title">Fast & Efficient Delivery</h4>
                  <p class="fancybox__desc">
                    Freight and transportation solutions
                  </p>
                </div>
              </div>

              <div class="col-sm-12 col-md-4 col-lg-4 fancybox-item">
                <div class="fancybox__icon">
                  <i class="icon-call-center"></i>
                </div>
                <div class="fancybox__content">
                  <h4 class="fancybox__title">Daily Operations</h4>
                  <p class="fancybox__desc">
                    100% compliant with safety practices and supply
                    childMarkdownRemark
                  </p>
                </div>
              </div>

              <div class="col-sm-12 col-md-4 col-lg-4 fancybox-item">
                <div class="fancybox__icon">
                  <i class="icon-forklift-1"></i>
                </div>
                <div class="fancybox__content">
                  <h4 class="fancybox__title">Next Day Lanes</h4>
                  <p class="fancybox__desc">
                    Provides equipment and warehouse activity based on product
                    needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Quote />

        <Features />
        <Services />

        {/* <Cta /> */}
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: "sliders" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
      sort: { fields: relativePath, order: ASC }
    ) {
      edges {
        node {
          id
          relativePath
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: "sliders" }
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
      sort: { fields: relativePath, order: ASC }
    ) {
      edges {
        node {
          id
          relativePath
          relativeDirectory
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
