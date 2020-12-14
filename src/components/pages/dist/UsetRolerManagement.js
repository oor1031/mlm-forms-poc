"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var react_router_1 = require("react-router");
var axios_1 = require("axios");
var icons_1 = require("@ant-design/icons");
var UserRoleForm_1 = require("./UserRoleForm");
var UserRoleManagement = function () {
    var Title = antd_1.Typography.Title;
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(-1), recordCount = _b[0], setRecordCount = _b[1];
    var _c = react_1.useState([]), allData = _c[0], setAllData = _c[1];
    var history = react_router_1.useHistory();
    var columns = [
        {
            title: "Username",
            dataIndex: "username"
        },
        {
            title: "Email",
            dataIndex: "email"
        },
        {
            title: "Gender",
            dataIndex: "gender"
        },
        {
            title: "Review",
            dataIndex: "review"
        }
    ];
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
    var handleClick = function () {
        history.push("/form");
    };
    var antIcon = react_1["default"].createElement(icons_1.LoadingOutlined, { style: { fontSize: 24 }, spin: true });
    var key = 'updatable';
    var fetchEngPrograms = function () {
        axios_1["default"].get("http://localhost:5000/users").then(function (response) {
            setRecordCount(response.data.length);
            setAllData(response.data);
        })
            .then(function (response) {
            setLoading(false);
            antd_1.message.success({ content: "Loaded!", key: key, duration: 1 });
        })["catch"](function (error) {
            setLoading(false);
            antd_1.message.error({ content: error, key: key, duration: 2 });
        });
    };
    react_1.useEffect(function () {
        fetchEngPrograms();
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(antd_1.Row, { gutter: [40, 0] },
            react_1["default"].createElement(antd_1.Col, { span: 18 },
                react_1["default"].createElement(Title, { level: 2 }, "User Role Management")),
            react_1["default"].createElement(UserRoleForm_1["default"], null))));
};
exports["default"] = UserRoleManagement;
