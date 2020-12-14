"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_router_1 = require("react-router");
var SideNav = function () {
    var history = react_router_1.useHistory();
    var handleUserClick = function () {
        history.push("/list");
    };
    var handleVideosClick = function () {
        history.push("/videos");
    };
    var handleFileClick = function () {
        history.push("/files");
    };
    var handleProgramsClick = function () {
        history.push("/programs");
    };
    var handleProgramChangeRequestsClick = function () {
        history.push("/videos");
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { style: {
                height: "32px",
                background: "rgba(255, 255, 255, 0.2)",
                margin: "16px"
            } }, "MLM"),
        react_1["default"].createElement(antd_1.Menu, { theme: "dark", mode: "inline", defaultSelectedKeys: ["1"] },
            react_1["default"].createElement(antd_1.Menu.Item, { key: "1", onClick: handleUserClick },
                react_1["default"].createElement(icons_1.UserOutlined, null),
                react_1["default"].createElement("span", null, " Users")),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "2", onClick: handleProgramsClick },
                react_1["default"].createElement("span", null, " Eng Programs")),
            react_1["default"].createElement(antd_1.Menu.Item, { key: "3", onClick: handleVideosClick },
                react_1["default"].createElement(icons_1.UploadOutlined, null),
                react_1["default"].createElement("span", null, " Change Requests")))));
};
exports["default"] = SideNav;
