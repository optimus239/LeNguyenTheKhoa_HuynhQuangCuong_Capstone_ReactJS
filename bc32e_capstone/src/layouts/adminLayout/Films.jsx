import React, { useEffect } from "react";
import { Table } from "antd";
import { getMovieList, useQuanLyPhim } from "../../store/quanLyPhim";
import { useDispatch } from "react-redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { removeVietnameseTones } from "../../ultis/convertAlphabetToAlphanumeric";

const Films = () => {
  const { movieList } = useQuanLyPhim();
  console.log("movieList: ", movieList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  const columns = [
    {
      title: "maPhim",
      dataIndex: "maPhim",
      width: 100,
      // filters: [
      //   {
      //     text: "Joe",
      //     value: "Joe",
      //   },
      //   {
      //     text: "Jim",
      //     value: "Jim",
      //   },
      //   {
      //     text: "Submenu",
      //     value: "Submenu",
      //     children: [
      //       {
      //         text: "Green",
      //         value: "Green",
      //       },
      //       {
      //         text: "Black",
      //         value: "Black",
      //       },
      //     ],
      //   },
      // ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.maPhim.indexOf(value) === 0,
      sorter: (a, b) => a.maPhim - b.maPhim,
      defaultSortOrder: "descend",
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: "Hình Ảnh",
      width: 100,
      dataIndex: "hinhAnh",
      render: (text, record, index) => {
        return <img width={30} src={text} alt="tenPhim" />;
      },
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      width: 200,
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.tenPhim.indexOf(value) === 0,
      sorter: (a, b) => {
        let tenPhimA = removeVietnameseTones(a.tenPhim.toLowerCase());
        let tenPhimB = removeVietnameseTones(b.tenPhim.toLowerCase());
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend", "descend", "ascend"],
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      render: (text, record, index) => {
        return text.length > 50 ? text.substr(0, 50) + "..." : text;
      },
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: (text, record, index) => {
        return (
          <div>
            <span className="text-xl text-green-400 hover:text-red-400 mr-2">
              <EditOutlined />
            </span>
            <span className="text-xl text-gray-400 hover:text-red-400">
              <DeleteOutlined />
            </span>
          </div>
        );
      },
    },
  ];
  const data = movieList;
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h3>Quản Lý Phim</h3>
      <Table
        rowKey="maPhim"
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
};

export default Films;
