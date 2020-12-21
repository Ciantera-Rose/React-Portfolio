import React, { Component } from 'react';
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Ciantera Rose React Portfolio</h1>
        <div>{moment().format("MMMM do YYYY, hh:mm:ss a")}</div>
      </div>
    );
  }
}
