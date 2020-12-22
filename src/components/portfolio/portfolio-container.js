import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";
export default class PortfolioContainer extends Component {
    //State uses class based component. Ties into lifestyle method. 
    //Will work in functional component with hooks (Now, not in 2018)
    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                <PortfolioItem />
            </div>
        );
    }
}
