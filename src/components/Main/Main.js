import React from 'react'
import Slider from "react-slick";
import acer from '../../images/acer.png'
import asus from '../../images/asus.png'
import dell from '../../images/dell.png'
import msi from '../../images/msi.png'
import apple from '../../images/apple.png'
import lenovo from '../../images/lenovo.png'
import razer from '../../images/razer.png'
import samssung from '../../images/samssung.png'




const Main = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: -1,
        autoplay:true,
        autoplaySpeed: 0,
        cssEase: "linear",
    };
    return (
    <div className='container'>
<Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
   
  }


export default Main