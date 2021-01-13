import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
    };
  }

  getBlogItem() {
    axios
      .get(
        `https://cianterarose.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then((response) => {
        this.setState({
          blogItem: response.data.portfolio_blog,
        });
      })
      .catch((error) => {
        console.log("getBlogItem error", error);
      });
  }

  render() {
    console.log("currentId", this.state.currentId);
    return (
      <div>
        <h1>Blog detail</h1>
      </div>
    );
  }
}
