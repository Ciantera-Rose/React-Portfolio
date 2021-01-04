import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" activeClassName="nav-link-active" />
              <Route exact path="/about-me" activeClassName="nav-link-active" />
              <Route exact path="/contact" activeClassName="nav-link-active" />
              <Route exact path="/blog" activeClassName="nav-link-active" />
            </Switch>
          </div>
        </Router>

        <h1>Ciantera Rose React Portfolio</h1>
        <div>{moment().format("MMMM do YYYY, hh:mm:ss a")}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
