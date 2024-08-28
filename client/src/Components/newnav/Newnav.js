import React from 'react'
import "../newnav/newnav.css";


const Newnav = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <p><i className="fas fa-shopping-cart"></i> TRANG CHỦ</p>
                    <p>BIA NHẬP KHẨU</p>
                    <p>KHUYẾN MÃI</p>
                    <p>BIA HÀ LAN</p>
                    <p>BIA ĐỨC</p>
                    <p>GIỚI THIỆU</p>
                    <p>DEAL HỜI SHOPEE</p>
                    <p>ZALO Pay</p>
                </div>
                <div className="right_data">
                    {/* <img src="nav.jpg" alt="navdata" /> */}
                </div>
            </div>
        </div>
    )
}

export default Newnav
