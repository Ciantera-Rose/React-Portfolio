import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";
export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my Portfolio",
      isLoading: false,
      data: [
        { title: "Quip", category: "eCommerce", slug: "Quip " },
        { title: "Eventbrite", category: "Schedling", slug: "Eventbrite" },
        {
          title: "Ministry Safe",
          category: "Enterprise",
          slug: "Ministry-Safe",
        },
        { title: "Swing Away", category: "eCommerce", slug: "Swing-Away" },
      ],
    };
    // this.handlePageTitleUpdate =  this.handlePageTitleUpdate.bind(this)
    // Use arrow function vs function declaration for the same behavior
    //this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  getPortfolioItems = () => {
    axios
      .get("https://cianterarose.devcamp.space/portfolio/portfolio_items")
      .then((response) => {
        // handle success
        console.log("response data", response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  portfolioItems() {
    return this.state.data.map((item) => {
      return (
        <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />
      );
    });
  }

  handlePageTitleUpdate = () => {
    this.setState({
      pageTitle: "Something Else",
    });
  };

  render() {
    //conditional rendering
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    } 

     this.getPortfolioItems();

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scueduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>
        {this.portfolioItems()}

        <hr />
        <button onClick={this.handlePageTitleUpdate}>Change Title</button>
      </div>
    );
  }
}
