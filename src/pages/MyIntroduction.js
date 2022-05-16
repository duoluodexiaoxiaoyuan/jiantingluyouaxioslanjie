import PropTypes from "prop-types";
import React, { Component } from "react";
import axios from "axios";
import request from "../request/request";

export class MyIntroduction extends Component {
  static propTypes = {};

  componentDidMount() {
    request("http://127.0.0.1:8080/api/login")
      .then((res) => {
        console.log(res);
        console.log(localStorage.getItem("name"));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>我是个废物，nikinnica</div>
      </div>
    );
  }
}

export default MyIntroduction;
