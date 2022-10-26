import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuanLyNguoiDung } from "../../store/quanLyNguoiDung";

const AdminLayout = () => {
  const { userLogin } = useQuanLyNguoiDung();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLogin || userLogin.maLoaiNguoiDung !== "QuanTri") {
      navigate("/home");
    }
  });
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
