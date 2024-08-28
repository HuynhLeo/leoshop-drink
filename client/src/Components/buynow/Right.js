import { Divider } from '@mui/material'
import React from 'react'

const Right = () => {
  return (

    <div className='right_buy'>
        <div className='cost_right'>
            <img style={{maxWidth:240}} src='logo2.png' alt='' /> <Divider/>
            <p>Đơn đặt hàng của bạn đủ điều kiện để được giao hàng miễn phí</p> <br />
            <span style={{color:'#565959'}}>Chọn tùy chọn này khi thanh toán. chi tiết</span>
        <h3>Tổng (1 sản phẩm): <span style={{fontWeight:700, color:'#111'}}>25,000₫</span></h3>
        
        <button className='rightbuy_btn'>Mua hàng</button>
        </div>
    </div>
   
  )
}

export default Right