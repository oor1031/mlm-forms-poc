import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import List from "../components/pages/List";
import Form from "../components/pages/Form";
import SideNav from "../components/layouts/Sidebar";
import File from "../components/pages/Files";

import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Programs from "../components/pages/Programs";
import ProgramList from "../components/pages/ProgramList";
import ProgramResult from "../components/pages/ProgramResult";
import Videos from "../components/pages/Videos";
import UserRoleManagement from "../components/pages/UsetRolerManagement";

const { Header, Sider, Content } = Layout;

const ApplicationRoutes = () => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
  }, []);

  const handleToggle = (event: any) => {
    event.preventDefault();
    collapse ? setCollapse(false) : setCollapse(true);
  }
  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapse}>
          <SideNav />
        </Sider>
        <Layout>
          <Header
            className="siteLayoutBackground"
            style={{ padding: 0, background: "#001529" }}
          >
            {React.createElement(
              collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: handleToggle,
                style: { color: "#fff" }
              }
            )}
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "calc(100vh - 114px)",
              background: "#fff"
            }}
          >
            <Switch>
            {/* <Route path="/" component={ProgramList} /> */}

            <Route path="/programs" component={ProgramList} />
              <Route path="/form" component={Form} />
              <Route path="/programResult" component={ProgramResult} />

              <Route path="/videos" component={Videos} />
              <Route path="/userRoleManagement" component={UserRoleManagement} />

            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default ApplicationRoutes;
