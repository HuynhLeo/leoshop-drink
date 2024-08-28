import React from 'react'
import './buynow.css';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
import { Divider } from '@mui/material';
const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        <div className='left_buy'>
            <h1>Giỏ Hàng</h1>
            <p>Chọn tất cả các mục</p>
            <span className='leftbuyprice'>Giá</span>
            <Divider/>
            <div className='item_containert'>
                <img src='https://douongcaocap.vn/wp-content/uploads/2020/10/Bia-Zundert-10-Trappist-10-Chai-330ml-%E2%80%93-Th%C3%B9ng-24-Chai-268x322.jpg' alt=''/>
                <div className='item_details'>
                    <h3>Bia Zundert 10 Trappist 10% – Chai 330ml – Thùng 24 Chai</h3>
                    <h3>Bia ngoại</h3>
                    <Option/>
                </div>
                <h3 className='item_price'>2.280.000₫</h3>
            </div>
            <Divider/>
            <Subtotal/>
           
        </div>
        <Right/>
      </div>

    </div>
  )
}

export default Buynow