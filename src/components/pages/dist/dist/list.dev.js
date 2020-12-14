"use strict";

exports.__esModule = true;

var react_1 = require("react");

var antd_1 = require("antd");

var react_router_1 = require("react-router");

var axios_1 = require("axios");

var Title = antd_1.Typography.Title;

var List = function List() {
  var history = react_router_1.useHistory();

  var _a = react_1.useState([]),
      allData = _a[0],
      setAllData = _a[1];

  react_1.useEffect(function () {
    axios_1["default"].get("https://tm27x.sse.codesandbox.io/users").then(function (res) {
      setAllData(res.data);
    });
  });
  var columns = [{
    title: "Username",
    dataIndex: "username"
  }, {
    title: "Email",
    dataIndex: "email"
  }, {
    title: "Gender",
    dataIndex: "gender"
  }, {
    title: "Review",
    dataIndex: "review"
  }];
  var data = [{}];
  allData.map(function (user) {
    data.push({
      key: user.id,
      username: user.username,
      email: user.email,
      review: user.website
    });
    return data;
  });

  var handleClick = function handleClick() {
    history.push("/form");
  };

  return react_1["default"].createElement("div", null, react_1["default"].createElement(antd_1.Row, {
    gutter: [40, 0]
  }, react_1["default"].createElement(antd_1.Col, {
    span: 18
  }, react_1["default"].createElement(Title, {
    level: 2
  }, "User List")), react_1["default"].createElement(antd_1.Col, {
    span: 6
  }, react_1["default"].createElement(antd_1.Button, {
    onClick: handleClick,
    block: true
  }, "Add User"))), react_1["default"].createElement(antd_1.Row, {
    gutter: [40, 0]
  }, react_1["default"].createElement(antd_1.Col, {
    span: 24
  }, react_1["default"].createElement(antd_1.Table, {
    columns: columns,
    dataSource: data
  }))));
};

exports["default"] = List;