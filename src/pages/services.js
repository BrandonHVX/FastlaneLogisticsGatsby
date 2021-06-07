import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout.js";
import Services from "../components/Services";

const services = [
  {
    title: "Expedited Delivery",
    text:
      "We provides with the main types of basic conditions International sea transportation is implemented by our partners vessels the largest ocean carriers.",
    icon: "icon-courier",
    link: "/services/expedited_delivery"
  },
  {
    title: "Final Mile",
    text:
      "We provides with the main types of basic conditions International sea transportation is implemented by our partners vessels the largest ocean carriers.",
    icon: "icon-delivery-truck-2",
    link: "/services/final_mile"
  },
  {
    title: "Long Haul",
    text:
      "We provides with the main types of basic conditions International sea transportation is implemented by our partners vessels the largest ocean carriers.",
    icon: "icon-truck",
    link: "/services/long_haul"
  }
];

export default class ServicePage extends Component {
  render() {
    return (
      <Layout>
        <Services />
      </Layout>
    );
  }
}
