"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Form_1 = require("../components/pages/Form");
var Sidebar_1 = require("../components/layouts/Sidebar");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var ProgramList_1 = require("../components/pages/ProgramList");
var ProgramResult_1 = require("../components/pages/ProgramResult");
var Videos_1 = require("../components/pages/Videos");
var UsetRolerManagement_1 = require("../components/pages/UsetRolerManagement");
var Header = antd_1.Layout.Header, Sider = antd_1.Layout.Sider, Content = antd_1.Layout.Content;
var ApplicationRoutes = function () {
    var _a = react_1.useState(false), collapse = _a[0], setCollapse = _a[1];
    react_1.useEffect(function () {
        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
    }, []);
    var handleToggle = function (event) {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    };
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(antd_1.Layout, null,
            react_1["default"].createElement(Sider, { trigger: null, collapsible: true, collapsed: collapse },
                react_1["default"].createElement(Sidebar_1["default"], null)),
            react_1["default"].createElement(antd_1.Layout, null,
                react_1["default"].createElement(Header, { className: "siteLayoutBackground", style: { padding: 0, background: "#001529" } }, react_1["default"].createElement(collapse ? icons_1.MenuUnfoldOutlined : icons_1.MenuFoldOutlined, {
                    className: "trigger",
                    onClick: handleToggle,
                    style: { color: "#fff" }
                })),
                react_1["default"].createElement(Content, { style: {
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: "calc(100vh - 114px)",
                        background: "#fff"
                    } },
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/programs", component: ProgramList_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/form", component: Form_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/programResult", component: ProgramResult_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/videos", component: Videos_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { path: "/userRoleManagement", component: UsetRolerManagement_1["default"] })))))));
};
exports["default"] = ApplicationRoutes;
