import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
export default class PortfolioContainer extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce"},
                {title: "Eventbrite", category: "Schedling"}, 
                {title:  "Ministry Safe", category: "Enterprise"},
                {title: "Swing Away", category: "eCommerce"}
               ]
        }
       // this.handlePageTitleUpdate =  this.handlePageTitleUpdate.bind(this)
       // Use arrow function vs function declaration for the same behavior
       //this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />
        })
    }

    handlePageTitleUpdate = () => {
        this.setState({
            pageTitle: "Something Else"
        })
    }

    render() {
        //conditional rendering
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

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

                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }
}
