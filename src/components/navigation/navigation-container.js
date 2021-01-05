import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
  constructor() {
    super();
  }
  adminLinks() {}

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <NavLink exact activeClassName="nav-link-active" to="/">
            Home
          </NavLink>

          <NavLink exact to="/about-me">
            About
          </NavLink>

          <NavLink exact to="/contact">
            Contact
          </NavLink>

          <NavLink exact to="/blog">
            Blog
          </NavLink>

          <button>Add Blog</button>
          {false ? <button>AddBlog</button> : null}
        </div>

        <div className="right-side">
          CIANTERA ROSE
        </div>
      </div>  
    );
  }
}
