import React, { Component } from "react";
import { Form, Col, Button, Accordion, Card } from "react-bootstrap";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.ContactForm = React.createRef();
    this.state = {
      name: "",
      email: ""
    };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <section
        id="requestQuoteTabs"
        class="request-quote request-quote-tabs p-60 "
      >
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <div class="request__form">
                <nav class="nav nav-tabs">
                  <div class="row heading heading-2 ">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <span class="heading__subtitle_quote">
                        Real Solutions, Real Fast!
                      </span>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                      <h1 class="heading__title_quote">Request a Quote</h1>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6 ">
                      <p class="heading__desc">
                        Our global logistics expertise, advanced supply chain
                        technology & customized logistics solutions will help
                        you analyze, develop and implement successful supply
                        chain management strategies.
                      </p>
                    </div>
                  </div>
                </nav>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="quote">
                    <div>
                      <Form
                        onSubmit={this.handleSubmit}
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              name="email"
                              type="email"
                              placeholder="Enter email"
                              value={email}
                              onChange={this.handleChange}
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="name"
                              name="name"
                              placeholder="Name"
                              value={name}
                              onChange={this.handleChange}
                            />
                          </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="track">
                    <div class="request-quote-panel">
                      <div class="request__form-body">
                        <div class="row">
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="form-group">
                              <label>Shipment Type</label>
                              <div class="form-group form-group-select">
                                <select class="form-control">
                                  <option>Packaging</option>
                                  <option>Packaging 1</option>
                                  <option>Packaging 2</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <div class="form-group">
                              <label>Tracking Number</label>
                              <div class="form-group">
                                <textarea
                                  class="form-control"
                                  placeholder="You can enter up to a maximum of 10 airway bill numbers for tracking."
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12 d-flex flex-wrap">
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Fragile
                                <input
                                  type="radio"
                                  name="radioGroup2"
                                  checked=""
                                />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Express Delivery
                                <input type="radio" name="radioGroup2" />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Insurance
                                <input type="radio" name="radioGroup2" />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                            <div class="form-group input-radio">
                              <label class="label-radio">
                                Packaging
                                <input type="radio" name="radioGroup2" />
                                <span class="radio-indicator"></span>
                              </label>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-12 col-lg-12">
                            <button class="btn btn__secondary btn__block">
                              Track & Trace
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="widget widget-download bg-theme">
                        <div class="widget__content">
                          <h5>
                            Industry
                            <br />
                            Solutions!
                          </h5>
                          <p>
                            Our worldwide presence ensures the timeliness, cost
                            efficiency and compliance adherence required to
                            ensure your production timelines are met.
                          </p>
                          <a
                            href="#"
                            class="btn btn__secondary btn__hover2 btn__block"
                          >
                            <span>Download 2019 Brochure</span>
                            <i class="icon-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
