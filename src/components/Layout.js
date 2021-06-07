import React from "react";

import "../styles/scss/style.scss";

import Navigation from "./Navigation";
import Footer from "../components/Footer";

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
