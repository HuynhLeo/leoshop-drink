import React from 'react'
import './footer.css'
const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);


  return (
    <footer>
        <div className='footer_container'>
            <div className='footr_details_one'>
                <h3>Tên cửa hàng</h3>
                <p>FUC BIA</p>
                <p>SĐT & Zalo: 0932188259</p>
                <p>Email: fuc@gmail.com</p>
                
            </div>
            <div className='footr_details_one'>
                <h3>VỀ CHÚNG TÔI</h3>
                <p>Trang chủ</p>
                <p>Sản phẩm</p>
                <p>Khuyến mãi HOT</p>
                <p>Flash sale</p>
            </div>
            <div className='footr_details_one'>
                <h3>BIA THEO QUỐC GIA</h3>
                <p>Bia Đức Nhập Khẩu</p>
                <p>Bia Bỉ Nhập Khẩu</p>
                <p>Bia Tiệp Nhập Khẩu</p>
                <p></p>
            </div>
            <div className='footr_details_one'>
                <h3>CHÍNH SÁCH</h3>
                <p>Chính Sách Bảo Hành</p>
                <p>Chính Sách Bảo Mật</p>
                <p>Chính Sách Đổi Trả Hàng Hoá</p>
                <p></p>
            </div>
        </div>
        <div className='lastdetails'>
            <img src='logo2.png' alt='logo'/>
            <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, FUC.com, Inc. or its affiliates</p>
        </div>
    </footer>
  )
}

export default Footer