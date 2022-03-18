import React from 'react'
import { Carousel } from 'antd';

const Header = () => {
    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        autospeed :'500'
      };
  return (
    <div>

<Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="https://nout.uz/wp-content/uploads/2022/02/rog_strixscar_17_ccf_1970x650.jpg" alt="" /></h3>

    </div>
    <div>
      <h3 style={contentStyle}><img src="https://nout.uz/wp-content/uploads/2022/02/1975x6504.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://nout.uz/wp-content/uploads/2022/02/1975x6503.jpg" alt="" /></h3>
    </div> 
    <div>
      <h3 style={contentStyle}><img src="https://nout.uz/wp-content/uploads/2022/02/1975x6502.jpg" alt="" /></h3>
    </div> 
    <div>
      <h3 style={contentStyle}><img src="https://nout.uz/wp-content/uploads/2022/02/1975x6501.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://nout.uz/wp-content/uploads/2022/02/1975x650.jpg" alt="" /></h3>
    </div>
  </Carousel>
    </div>
  )
}

export default Header