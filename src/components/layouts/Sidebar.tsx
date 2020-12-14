import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router";

const SideNav = () => {
  const history = useHistory();

  const handleUserClick = () => {
    history.push("/list");
  };

  const handleVideosClick = () => {
    history.push("/videos");
  };

  const handleFileClick = () => {
    history.push("/files");
  };

  const handleProgramsClick = () => {
    history.push("/programs");
  };

  const handleProgramChangeRequestsClick = () => {
    history.push("/videos");
  };

  return (
    <div>
      <div
        style={{
          height: "32px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px"
        }}
      >MLM</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={handleUserClick}>
          <UserOutlined />
          <span> Users</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleProgramsClick}>
          {/* <VideoCameraOutlined /> */}
          <span> Eng Programs</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleVideosClick}>
          <UploadOutlined />
          <span> Change Requests</span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideNav;
