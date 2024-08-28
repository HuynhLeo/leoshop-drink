import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useHistory, useParams } from 'react-router';
import { createRoot } from 'react-dom';

const Cart = () => {

  const { id } = useParams("");
  // console.log(id);
  const [inddata, setIndedata] = useState("");
  console.log(inddata);
  const getinddata = async () => {
    const res = await fetch(`/getproductsone/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });
    const data = await res.json();
    // console.log(data);
    if (res.status !== 201) {
      alert("no data available")
    } else {
      // console.log("ind mila hain");
      setIndedata(data);
    }

  }
  useEffect(() => {
    setTimeout(getinddata, 1000)
  }, [id]);



  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://douongcaocap.vn/wp-content/uploads/2020/10/Bia-Zundert-10-Trappist-10-Chai-330ml-%E2%80%93-Th%C3%B9ng-24-Chai-268x322.jpg" alt="cart_img" />
          <div className="cart_btn">
            <button className="cart_btn1">Thêm vào giỏ hàng</button>
            <button className="cart_btn2">Mua hàng</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Bia Zundert 10 Trappist 10% – Chai 330ml – Thùng 24 Chai</h3>
          <h4>Bia ngoại</h4>
          <Divider />
          <p className="mrp">2.280.000₫</p>
          <p className="description">
            Nguồn gốc: <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: '0.4px' }} > Bia với màu nâu sậm khá ấn tượng, mang những nét đặc trưng táo bạo của dòng Trappist đến từ Hà Lan. Zundert với hương thơm trái cây khô, nho khô, men và chút đường nâu tạo nên một thức uống khá phong phú. Zundert 10 mang một hương vị khó tả. Với chút malt, chút trái cây khô (nho khô, mận khô) và kết thúc với một hậu vị đắng tuyệt vời. Những chai Trappist này mang đến một sự cân bằng hoàn hảo và khó quên. Hương vị chỉ đậm đà thêm thời gian.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
