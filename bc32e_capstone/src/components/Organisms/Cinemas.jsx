import React, { useState, useEffect } from "react";
import { Radio, Space, Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCinemaList } from "../../storeToolkit/quanLyPhim/quanLyPhimReducer";

const Cinemas = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaList());
  }, []);

  const { cinemaList } = useSelector((state) => state.quanLyPhimReducer);
  console.log("cinemaList: ", cinemaList);
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <Tabs
      className="container"
      tabPosition={tabPosition}
      items={cinemaList.map((val, i) => {
        return {
          label: <img src={val.logo} alt="" className="w-9 h-9" />,
          key: i,
          children: `Content of Tab ${i}`,
        };
      })}
    />
  );
};

export default Cinemas;
