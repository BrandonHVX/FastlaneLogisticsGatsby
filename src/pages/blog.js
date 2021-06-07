import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";

class BlogIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet />
        <div>Blog</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list"></ul>
        </div>
      </div>
    );
  }
}

export default BlogIndex;
