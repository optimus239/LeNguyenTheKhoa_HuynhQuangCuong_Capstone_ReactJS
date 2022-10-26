import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/adminLayout/AdminLayout";
import DashBoard from "../layouts/adminLayout/DashBoard";

import MainLayout from "../layouts/MainLayout";
import NotFound from "../layouts/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <DashBoard />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routing;
};

export default Routers;
