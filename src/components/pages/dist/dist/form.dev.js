"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var react_1 = require("react");

var antd_1 = require("antd");

var axios_1 = require("axios");

var react_router_1 = require("react-router");

var Title = antd_1.Typography.Title;
var layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
var key = 'formMessageKey';

var FormApp = function FormApp() {
  var _a = react_1.useState(false),
      loading = _a[0],
      setLoading = _a[1];

  var history = react_router_1.useHistory();

  var createChangeRequestHandler = function createChangeRequestHandler(values) {
    setLoading(true);
    antd_1.message.loading({
      content: 'Creating Change Request...',
      key: key
    });
    axios_1["default"].post("http://localhost:5000/users", values).then(function (res) {
      setLoading(false);
      antd_1.message.success({
        content: 'Success!',
        key: key,
        duration: 1
      });
      history.push("/programResult");
    })["catch"](function (error) {
      setLoading(false);
      antd_1.message.error({
        content: error,
        key: key,
        duration: 2
      });
    });
  };

  return react_1["default"].createElement("div", null, react_1["default"].createElement(antd_1.Row, {
    gutter: [40, 0]
  }, react_1["default"].createElement(antd_1.Col, {
    span: 23
  }, react_1["default"].createElement(Title, {
    style: {
      textAlign: "center"
    },
    level: 2
  }, "Please Fill the User Form"))), react_1["default"].createElement(antd_1.Row, {
    gutter: [40, 0]
  }, react_1["default"].createElement(antd_1.Col, {
    span: 18
  }, react_1["default"].createElement(antd_1.Form, __assign({}, layout, {
    onFinish: createChangeRequestHandler
  }), react_1["default"].createElement(antd_1.Form.Item, {
    name: "username",
    label: "UserName",
    rules: [{
      required: true,
      message: "Please input your name"
    }]
  }, react_1["default"].createElement(antd_1.Input, {
    placeholder: "Please Enter your username"
  })), react_1["default"].createElement(antd_1.Form.Item, {
    name: "email",
    label: "Email",
    rules: [{
      required: true,
      message: "Please input your correct email",
      type: "email"
    }]
  }, react_1["default"].createElement(antd_1.Input, {
    placeholder: "Please Enter your email"
  })), react_1["default"].createElement(antd_1.Form.Item, {
    name: "gender",
    label: "Gender",
    rules: [{
      required: true,
      message: "Please select your gender"
    }]
  }, react_1["default"].createElement(antd_1.Radio.Group, null, react_1["default"].createElement(antd_1.Radio, {
    value: "male"
  }, "Male"), react_1["default"].createElement(antd_1.Radio, {
    value: "female"
  }, "Female"), react_1["default"].createElement(antd_1.Radio, {
    value: "others"
  }, "Others"))), react_1["default"].createElement(antd_1.Form.Item, {
    name: "hobbies",
    label: "Hobbies",
    rules: [{
      required: true,
      message: "Please select your hobbies",
      type: "array"
    }]
  }, react_1["default"].createElement(antd_1.Select, {
    mode: "multiple",
    placeholder: "Please select you hobbies"
  }, react_1["default"].createElement(antd_1.Select.Option, {
    value: "Reading"
  }, "Reading"), react_1["default"].createElement(antd_1.Select.Option, {
    value: "Writing"
  }, "Writing"), react_1["default"].createElement(antd_1.Select.Option, {
    value: "Coding"
  }, "Coding"), react_1["default"].createElement(antd_1.Select.Option, {
    value: "Singing"
  }, "Singing"), react_1["default"].createElement(antd_1.Select.Option, {
    value: "Dancing"
  }, "Dancing"))), react_1["default"].createElement(antd_1.Form.Item, {
    name: "review",
    label: "Review"
  }, react_1["default"].createElement(antd_1.Slider, null)), react_1["default"].createElement(antd_1.Form.Item, {
    name: "notificaiton",
    label: "Notificaiton",
    valuePropName: "checked"
  }, react_1["default"].createElement(antd_1.Switch, null)), react_1["default"].createElement("div", {
    style: {
      textAlign: "right"
    }
  }, react_1["default"].createElement(antd_1.Button, {
    type: "primary",
    loading: loading,
    htmlType: "submit"
  }, "Save"), " ", react_1["default"].createElement(antd_1.Button, {
    type: "default",
    htmlType: "button",
    onClick: function onClick() {
      return history.push("/list");
    }
  }, "Back"))))));
};

var ReachableContext = react_1["default"].createContext({});
var UnreachableContext = react_1["default"].createContext({});
var config = {
  title: 'Use Hook!',
  content: react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(ReachableContext.Consumer, null, function (name) {
    return "Reachable: " + name + "!";
  }), react_1["default"].createElement("br", null), react_1["default"].createElement(UnreachableContext.Consumer, null, function (name) {
    return "Unreachable: " + name + "!";
  }))
};

var ModalConfirm = function ModalConfirm() {
  var _a = antd_1.Modal.useModal(),
      modal = _a[0],
      contextHolder = _a[1];

  return react_1["default"].createElement(ReachableContext.Provider, {
    value: "Light"
  }, react_1["default"].createElement(antd_1.Space, null, react_1["default"].createElement(antd_1.Button, {
    id: "modalConfirmButton",
    onClick: function onClick() {
      modal.confirm(config);
    }
  }, "Confirm"), react_1["default"].createElement(antd_1.Button, {
    id: "modalWarningButton",
    onClick: function onClick() {
      modal.warning(config);
    }
  }, "Warning"), react_1["default"].createElement(antd_1.Button, {
    onClick: function onClick() {
      modal.info(config);
    }
  }, "Info"), react_1["default"].createElement(antd_1.Button, {
    id: "modalErrorButton",
    onClick: function onClick() {
      modal.error(config);
    }
  }, "Error")), contextHolder, react_1["default"].createElement(UnreachableContext.Provider, {
    value: "Bamboo"
  }));
};

exports["default"] = FormApp;