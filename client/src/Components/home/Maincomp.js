import React, { useEffect } from "react";
import { Divider } from "@mui/material";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
import { getProducts } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const Maincomp = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Bia Hà Lan" products={products} />
        </div>
        <div className="right_slide">
          <h4>Bia Qui Nhơn</h4>
          <img src="data:image/jpeg;base64,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" />
          <a href="/">Xem thêm</a>
        </div>
      </div>

      <Slide title="Bia Craft" products={products}  />
      <Slide title="Bia Nhập Khẩu " products={products}  />
      <Slide title="Bia Scotland " products={products}  />
    </div>
  );
};

export default Maincomp;
