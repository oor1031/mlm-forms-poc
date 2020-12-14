"use strict";

exports.__esModule = true;

var react_1 = require("react");

var antd_1 = require("antd");

var treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [{
      title: '0-0-0-0',
      key: '0-0-0-0'
    }, {
      title: '0-0-0-1',
      key: '0-0-0-1'
    }, {
      title: '0-0-0-2',
      key: '0-0-0-2'
    }]
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [{
      title: '0-0-1-0',
      key: '0-0-1-0'
    }, {
      title: '0-0-1-1',
      key: '0-0-1-1'
    }, {
      title: '0-0-1-2',
      key: '0-0-1-2'
    }]
  }, {
    title: '0-0-2',
    key: '0-0-2'
  }]
}, {
  title: '0-1',
  key: '0-1',
  children: [{
    title: '0-1-0-0',
    key: '0-1-0-0'
  }, {
    title: '0-1-0-1',
    key: '0-1-0-1'
  }, {
    title: '0-1-0-2',
    key: '0-1-0-2'
  }]
}, {
  title: '0-2',
  key: '0-2'
}];

var UserRoleForm = function UserRoleForm() {
  var _a = react_1.useState(['0-0-0', '0-0-1']),
      expandedKeys = _a[0],
      setExpandedKeys = _a[1];

  var _b = react_1.useState(['0-0-0']),
      checkedKeys = _b[0],
      setCheckedKeys = _b[1];

  var _c = react_1.useState([]),
      selectedKeys = _c[0],
      setSelectedKeys = _c[1];

  var _d = react_1.useState(true),
      autoExpandParent = _d[0],
      setAutoExpandParent = _d[1];

  var onExpand = function onExpand(expandedKeys) {
    console.log('onExpand', expandedKeys); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  var onCheck = function onCheck(checkedKeys) {
    console.log('onCheck', checkedKeys);
    setCheckedKeys(checkedKeys);
  };

  var onSelect = function onSelect(selectedKeys, info) {
    console.log('onSelect', info);
    setSelectedKeys(selectedKeys);
  };

  return react_1["default"].createElement(antd_1.Tree, {
    checkable: true,
    onExpand: onExpand,
    expandedKeys: expandedKeys,
    autoExpandParent: autoExpandParent,
    onCheck: onCheck,
    checkedKeys: checkedKeys,
    onSelect: onSelect,
    selectedKeys: selectedKeys,
    treeData: treeData
  });
};

exports["default"] = UserRoleForm;