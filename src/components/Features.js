import React, { Component } from "react";
import AboutImg from "../images/about/1.jpg";

import { graphql, useStaticQuery } from "gatsby";

import BackgroundImage from "gatsby-background-image";

const Features = () => {
  const data = graphql`
    query {
      backgrounds: file(relativePath: { eq: "backgrounds/2.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;
  return (
    <div>
      <BackgroundImage Tag="section" backgroundColor={`#040e18`}>
        <h2>gatsby-background-image</h2>
      </BackgroundImage>
    </div>
  );
};

// Set ImageData.

export default Features;
