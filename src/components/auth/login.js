import React, { Component } from "react";
import axios from "axios";

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
            [e.target.name]: e.target.value,
            errorText: ""
        })
    }

    handleSubmit = (e) =>  {
        //console.log("handle submit", this.state.email, this.state.password)
        axios
            .post(
                "https://api.devcamp.space/sessions",
            {
            client: {
                email: this.state.email,
                password: this.state.password,
                errorText: ""
            }
        },
          { withCredentials: true }
        )
        .then(response => {
            if (response.data.status === "created") {
                console.log("You can come in...")
            } else {
                this.setState({
                    errorText: "Wrong email or password"
                })
            }
        })
        .catch(error => {
            //console.log("error occured", error)
            this.setState({
                errorText: "An error occurred"
            })
        })
        e.preventDefault()
    }

    render() {
        return (
          <div>
            <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
            <div>{this.state.errorText}</div>
           
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