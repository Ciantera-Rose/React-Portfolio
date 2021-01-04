import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
  constructor() {
    super();
  }
  adminLinks() {}

  render() {
    return (
      <div>
        <NavLink exact to="/">
          Home
        </NavLink>

        <NavLink exact to="/about-me">
          About
        </NavLink>

        
        <button>Contact</button>
        <button>Blog</button>
        <button>Add Blog</button>
        {false ? <button>AddBlog</button> : null}
      </div>
    );
  }
}
