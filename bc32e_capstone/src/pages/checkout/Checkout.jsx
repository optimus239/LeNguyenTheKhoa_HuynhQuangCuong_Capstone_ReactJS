import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSeatList } from "../../store/quanLyDatVe/quanLyDatVeReducer";
import "./Checkout.css";
import { CloseOutlined } from "@ant-design/icons";

const Checkout = () => {
  const dispatch = useDispatch();
  const param = useParams();
  console.log("param: ", param.movieIds);
  useEffect(() => {
    dispatch(getSeatList(param.movieIds));
  }, []);
  const { seatList } = useSelector((state) => state.quanLyDatVeReducer);
  console.log("seatList: ", seatList);

  const renderSeat = () => {
    return seatList.danhSachGhe?.map((seat, id) => {
      let classVipSeat = seat?.loaiGhe === "Vip" ? "vipSeat" : "";
      let classAvailableSeat = seat?.daDat === true ? "availableSeat" : "";
      return (
        <Fragment key={id}>
          <button className={`seat ${classVipSeat} ${classAvailableSeat}`}>
            {seat.daDat ? <CloseOutlined /> : seat?.stt}
          </button>
        </Fragment>
      );
    });
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div></div>
          <div className="trapezoid">
            <h3 className="mt-5 text-black text-center">Màn hình</h3>
          </div>
          <div>{renderSeat()}</div>
        </div>
        <div className="col-span-3">
          <h3 className="text-center text-2xl">0đ</h3>
          <hr />
          <h3 className="text-xl">Phim</h3>
          <p>địa điểm</p>
          <p>ngày chiếu</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right">
              <span className="text-green-400 text-lg">0đ</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i>
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i>
          </div>
          <hr />
          <div className="mb-0 flex flex-col justify-end">
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-lg">
              Đặt vé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
