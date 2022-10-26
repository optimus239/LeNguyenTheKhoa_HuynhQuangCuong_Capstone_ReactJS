import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logOut, useQuanLyNguoiDung } from "../store/quanLyNguoiDung";

const Header = () => {
  const { userLogin } = useQuanLyNguoiDung();
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log("navbarOpen: ", navbarOpen);
  const dispatch = useDispatch();
  const dangXuat = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Navbar className="flex flex-wrap items-center justify-between px-2 py-5 bg-transparent fixed mb-3 z-10 w-full ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="uppercase text-red-700 font-bold text-lg items-center"
              href="#pablo"
            >
              Cybersoft
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none justify-between mb-0">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg text-white opacity-75"></i>
                  <span className="ml-2">Trang chủ</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg text-white opacity-75"></i>
                  <span className="ml-2">Phim</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="text-lg text-white opacity-75"></i>
                  <span className="ml-2">Rạp</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {userLogin ? (
              <>
                <span className="mr-2">Xin Chào</span>
                <span className="mr-2">
                  <img
                    className="w-full rounded-full"
                    src="https://api.lorem.space/image/game?w=50&h=50"
                    alt="..."
                  />
                </span>

                {userLogin.hoTen}
                <button
                  className="self-center px-8 py-3 rounded"
                  onClick={dangXuat}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg
                    className="absolute -left-1 w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <button className="self-center px-8 py-3 rounded">
                  <Link to="/login">Đăng nhập</Link>
                </button>
                <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                  <Link to="/register">Đăng ký</Link>
                </button>
              </>
            )}
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
      </Navbar>
    </>
  );
};

export default Header;

const Navbar = styled.div`
  background-color: rgba(112, 110, 110, 0.2);
`;
