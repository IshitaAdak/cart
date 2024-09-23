import React from 'react'
import Slider from "react-slick";
import {Box, Container, Grid} from '@mui/material';
import "./BrandStyle.css"
const Brands = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
      
  return (
    <Box className="brand">
    <Container maxWidth="lg">
    <Grid container>
<Grid item lg={12} md={12} sm={12} xs={12}>
<Box className="brand-heading">Top Brands</Box>
</Grid>
<Grid item lg={12} md={12} sm={12} xs={12}>
<Slider {...settings}>
        <Box className="brandimg">
      <img src="./image/br1.png" alt="" />
        </Box>
        <Box className="brandimg">
        <img src="./image/br3.png" alt="" />
        </Box>
        <Box className="brandimg">
        <img src="./image/br2.png" alt="" />
        </Box>
        <Box className="brandimg">
        <img src="./image/br4.png" alt="" />
        </Box>
        <Box className="brandimg_5">
        <img src="./image/br5.png" alt="" />
        </Box>
      </Slider>
</Grid>
    </Grid>
    </Container>
    </Box>
  )
}

export default Brands