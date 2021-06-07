import React, { Component } from "react";
import BG from "../images/backgrounds/truck-on-road.jpg";

const bgstyle = {
  backgroundImage: `url(${BG})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};

export default class Cta extends Component {
  render() {
    return (
      <section
        style={bgstyle}
        id="testimonial3"
        class="testimonial testimonial-3 bg-overlay pt-120 pb-120"
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-6">
              <div class="testimonial-panel-wrap">
                <div
                  class="carousel owl-carousel carousel-arrows"
                  data-slide="1"
                  data-slide-md="1"
                  data-slide-sm="1"
                  data-autoplay="true"
                  data-nav="true"
                  data-dots="false"
                  data-space="0"
                  data-loop="true"
                  data-speed="800"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
