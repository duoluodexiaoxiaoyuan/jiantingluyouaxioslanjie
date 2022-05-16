import PropTypes from "prop-types";
import React, { Component } from "react";
import MyIntroduction from "./MyIntroduction";
import UniversityLife from "./UniversityLife";
import { Link, withRouter, Route } from "react-router-dom";
import axios from "axios";
import request from "../request/request";
export class Home extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    // 判断跳转路由不等于当前路由
    if (nextProps.location.pathname !== this.props.location.pathname) {
      console.log("路由改变触发");
    }
  }
  componentDidMount() {
    request("http://127.0.0.1:8080/api/register")
      .then((res) => {
        console.log(res);
        localStorage.setItem("name", "存储成功");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div>主页</div>
        <div>
          <Link to="/home/introduction">自我介绍</Link>
        </div>
        <div>
          <Link to="/home/university">大学生活</Link>
        </div>
        <Route path="/home/introduction" component={MyIntroduction} />
        <Route path="/home/university" component={UniversityLife} />
      </div>
    );
  }
}

export default withRouter(Home);
