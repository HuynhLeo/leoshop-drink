import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sign_up = () => {

    const[udata,setUdata] = useState ({
        fname:'',
        email:'',
        mobile:'',
        password:'',
        cpassword:'',
    })
    console.log(udata);
    const adddata = (e) =>{
        const {name,value} = e.target;
        setUdata(()=>{
            return {
                ...udata,
                [name]:value
            }
        })
    }

  return (
    <section>
    <div className='sign_container'>
        <div className='sign_header'>
            <img src='logo2.png' alt='amazonlogo'/>
        </div>
        <div className='sign_form'>
            <form>
                <h1>Tạo tài khoản</h1>
                <div className='form_data'>
                    <label htmlFor='fname'>Họ tên</label>
                    <input type='text'
                    onChange={(e)=> setUdata({...udata,fname:e.target.value})}
                    value={udata.fname}
                     name='fname'id='fname'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    // onChange={(e)=> setUdata({...udata,email:e.target.value})}
                    onChange={adddata}
                     value={udata.email}
                      name='email'id='email'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='number'>Số điện thoại</label>
                    <input type='text'
                     onChange={adddata}
                     value={udata.mobile}
                      name='mobile'id='mobile'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='password'>Mật khẩu</label>
                    <input type='password'
                     onChange={adddata}
                     value={udata.password}
                     name='password' placeholder='ít nhất 6 kí tự'  id='password'/>
                </div>
                <div className='form_data'>
                    <label htmlFor='cpassword'> Nhập lại mật khẩu</label>
                    <input type='password'
                     onChange={adddata}
                     value={udata.cpassword}
                      name='cpassword'  id='cpassword'/>
                </div>
                <button className='signin_btn'>Tiếp tục</button>
                <div className='signin_info'>
                    <p>Bạn đã có tài khoản?</p>
                    <NavLink to='/login'>Đăng nhập</NavLink>
                </div>
            </form>
        </div>

    </div>
</section>
  )
}

export default Sign_up