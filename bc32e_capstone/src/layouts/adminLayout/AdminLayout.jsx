import React, { useState, useEffect } from "react";
import "./AdminLayout.css";

import { PieChartOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
// import React, { useState } from "react";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useQuanLyNguoiDung } from "../../store/quanLyNguoiDung";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <NavLink to="/admin/users">Users</NavLink>,
    "1",
    <PieChartOutlined />
  ),

  getItem("Film Manager", "3", <VideoCameraOutlined />, [
    getItem(<NavLink to="/admin/films">Films</NavLink>, "31"),
    getItem(<NavLink to="/admin/films/addfilm">Add Film</NavLink>, "32"),
  ]),
];

const AdminLayout = () => {
  const { userLogin } = useQuanLyNguoiDung();

  const navigate = useNavigate();
  // if (!userLogin) {
  //   console.log("gì dọ");
  //   navigate("/home");
  // }
  useEffect(() => {
    if (!userLogin) {
      console.log("gì dọ");
      navigate("/home");
    }
  }, [userLogin]);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["3"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="items-center text-blue-400 flex-shrink-0 hidden lg:flex">
              <span className="mr-2">Xin Chào</span>
              <span className="mr-2">
                <img
                  className="w-full rounded-full"
                  src="https://api.lorem.space/image/game?w=50&h=50"
                  alt="..."
                />
              </span>

              {userLogin?.hoTen}
              <button
                className="self-center px-8 py-3 rounded"
                // onClick={dangXuat}
              >
                Đăng xuất
              </button>
            </div>
            <button className="p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
