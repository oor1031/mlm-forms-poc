"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1'
                    },
                ]
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: React.createElement("span", { style: { color: '#1890ff' } }, "sss"), key: '0-0-1-0' }]
            },
        ]
    },
];
var UserRoleForm = function () {
    var onSelect = function (selectedKeys, info) {
        console.log('selected', selectedKeys, info);
    };
    var onCheck = function (checkedKeys, info) {
        console.log('onCheck', checkedKeys, info);
    };
    return (React.createElement(antd_1.Tree, { checkable: true, defaultExpandedKeys: ['0-0-0', '0-0-1'], defaultSelectedKeys: ['0-0-0', '0-0-1'], defaultCheckedKeys: ['0-0-0', '0-0-1'], 
        /*
  // @ts-ignore */
        onSelect: onSelect, 
        /*
  // @ts-ignore */
        onCheck: onCheck, treeData: treeData }));
};
exports["default"] = UserRoleForm;
