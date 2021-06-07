import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <section
        id="requestQuoteTabs"
        class="request-quote request-quote-tabs p-60 "
      >
        <div class="container">
          <div class="row heading heading-2 ">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <span class="heading__subtitle">Real Solutions, Real Fast!</span>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12">
              <h1 class="heading__title">Request a Quote</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="request__form">
                <nav class="nav nav-tabs"></nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
