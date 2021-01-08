import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        //console.log("handle change", e)
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    handleSubmit = (e) =>  {
        console.log("handle submit", e)
    }

    render() {
        return (
          <div>
            <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
           
            <form onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <div>
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        );
    }
}