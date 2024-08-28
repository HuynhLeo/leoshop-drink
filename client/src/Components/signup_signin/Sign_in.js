import React, { useState } from 'react'
import './signup.css'
import { NavLink } from 'react-router-dom'
const Sign_in = () => {

    const [logdata,setData] = useState({
        email:"",
        password:"",

    });
    console.log(logdata);
    const adddata = (e) =>{
         const {name,value} = e.target;
         
            setData(()=>{
                return{
                    ...logdata,
                    [name]:value
                }

            })

        // console.log(e.target.value);
    }

  return (
    <>
        <section>
            <div className='sign_container'>
                <div className='sign_header'>
                    <img src='logo2.png' alt='amazonlogo'/>
                </div>
                <div className='sign_form'>
                    <form>
                        <h1>Đăng nhập</h1>
                        <div className='form_data'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' 
                             onChange={adddata}
                             value={logdata.email}
                             name='email'id='email'/>
                        </div>
                        <div className='form_data'>
                            <label htmlFor='email'>Mật khẩu</label>
                            <input type='password' 
                            onChange={adddata}
                            value={logdata.password}
                             name='password' placeholder='ít nhất 6 kí tự'  id='password'/>
                        </div>
                        <button className='signin_btn'>Tiếp tục</button>
                    </form>
                </div>
                <div className='create_accountinfo'>
                    <p>Tạo mới</p>
                 <NavLink to='/register'><button>Tạo tài khoản</button></NavLink>   
                </div>
            </div>
        </section>
    </>

  )
}

export default Sign_in