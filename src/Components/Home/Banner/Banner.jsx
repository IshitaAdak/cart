import React from 'react'
import Slider from "react-slick";
import {Box} from '@mui/material';
import './BannerStyle.css';
const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
      
  return (
<Box className="banner">
<Slider {...settings}>
    <Box className="banimg">
  <img src="./image/ban1.jpg" alt="" />
    </Box>
    <Box className="banimg">
     <img src="./image/ban2.avif" alt="" />
    </Box>
    <Box className="banimg">
    <img src="./image/ban3.avif" alt="" />
    </Box>

  </Slider>
</Box>


  )
}

export default Banner