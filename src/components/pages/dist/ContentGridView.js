"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("antd/dist/antd.css");
require("./ContentGridView.css");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var Paragraph = antd_1.Typography.Paragraph;
var menu = (react_1["default"].createElement(antd_1.Menu, null,
    react_1["default"].createElement(antd_1.Menu.Item, null,
        react_1["default"].createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "http://www.alipay.com/" }, "1st menu item")),
    react_1["default"].createElement(antd_1.Menu.Item, null,
        react_1["default"].createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "http://www.taobao.com/" }, "2nd menu item")),
    react_1["default"].createElement(antd_1.Menu.Item, null,
        react_1["default"].createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "http://www.tmall.com/" }, "3rd menu item"))));
var DropdownMenu = function () {
    return (react_1["default"].createElement(antd_1.Dropdown, { key: "more", overlay: menu },
        react_1["default"].createElement(antd_1.Button, { style: {
                border: 'none',
                padding: 0
            } },
            react_1["default"].createElement(icons_1.EllipsisOutlined, { style: {
                    fontSize: 20,
                    verticalAlign: 'top'
                } }))));
};
// const routes: array
//   = [
// ];
var ContentGridView = function () {
    var _a = react_1.useState(null), tableComponent = _a[0], setTableComponent = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.PageHeader, { title: "Programs", className: "site-page-header", tags: react_1["default"].createElement(antd_1.Tag, { color: "blue" }, "Current"), extra: [
                react_1["default"].createElement(antd_1.Button, { key: "2" }, "Refresh"),
                react_1["default"].createElement(antd_1.Button, { key: "1", type: "primary" }, "Create"),
                react_1["default"].createElement(DropdownMenu, { key: "more" }),
            ] })));
};
exports["default"] = ContentGridView;
