import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselList } from "../../storeToolkit/quanLyPhim/quanLyPhimReducer";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarouselList());
  }, []);
  const { carouselList } = useSelector((state) => state.quanLyPhimReducer);
  console.log("carouselList: ", carouselList);

  const renderCarousel = () => {
    return carouselList.map((item, index) => (
      <div key={index}>
        <div
          style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
        ></div>
      </div>
    ));
  };

  return (
    <Carousel effect="fade" autoplay className="opacity-95">
      {renderCarousel()}
    </Carousel>
  );
};

export default Slider;
