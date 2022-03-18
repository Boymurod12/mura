import React from 'react'
import { Input, Space } from 'antd';
import './style.scss'


const Nav = () => {
 const { Search } = Input;

const onSearch = value => console.log(value);

  return (
      <div>
<div className='container mx-auto '>
      <nav className='mx-auto'>
         <div className="nav__logo ">
             <img src="https://nout.uz/wp-content/uploads/2021/03/logotype-nout.svg" alt=""  width='200px' height="29"/>
         </div>
         <div className="nav__input">
         <Space direction="vertical">
    <Search
    
      placeholder="input search text"
      allowClear
      enterButton
      onSearch={onSearch}
    />
  
  </Space>
    
          </div>
         <div className="nav__shopcart">
         <i class="fa-solid fa-repeat "></i>
         <i class="fa-regular fa-user "></i>
         <i class="fa-solid fa-bag-shopping"></i>
         </div>
      </nav>
    

    </div>
    <div className="nav_div">
        
    </div>
      </div>
    
  )
}

export default Nav