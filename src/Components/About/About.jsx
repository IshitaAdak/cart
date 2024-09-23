import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Faq from "./FAQ/Faq";
import "./aboutStyle.css";
export default function About() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box className="about">
        <Container maxWidth={"lg"}>
          <Grid container spacing={4}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className="image">
                <img src="/image/about.avif" alt="" />
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className="text">
                <Typography className="text-heading" component="div">
                  Who Are We?
                </Typography>
                <Typography className="text-t" component="div">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae iure sed, non est reprehenderit asperiores
                  consectetur doloribus aspernatur vel libero expedita fugiat
                  reiciendis nisi itaque, quidem, illum suscipit veniam error
                  eligendi corrupti quaerat. Soluta eos, a neque harum non saepe
                  nisi molestiae veniam nam dicta sed illum adipisci numquam
                  dolores eligendi laborum nesciunt iure repellendus. Esse ut
                  laudantium fugiat iusto error ea labore porro totam quas unde
                  nostrum molestias nam est quasi, suscipit numquam placeat
                  cupiditate doloremque neque Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Perspiciatis, beatae.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className="about-heading">Our Speciality</Box>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="card-image"
                    component="img"
                    src="/image/about1.avif"
                    alt=""
                  />
                  <CardContent>
                    <Box className="card-text text-color_1">Free Shipping</Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="card-image"
                    component="img"
                    src="/image/about2.avif"
                    alt=""
                  />
                  <CardContent>
                    <Box className="card-text text-color_2">
                      Fastest Delivery
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="card-image"
                    component="img"
                    src="/image/about3.jpg"
                    alt=""
                  />
                  <CardContent>
                    <Box className="card-text text-color_3">Low Cost EMI</Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia
                    className="card-image"
                    component="img"
                    src="/image/about4.avif"
                    alt=""
                  />
                  <CardContent>
                    <Box className="card-text text-color_4">
                      24/7 Customer Support
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className="about-heading">Testimonials</Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Slider {...settings}>
                <Box>
                  <Card className="slider">
                    <CardActionArea>
                      <CardMedia
                        className="slider-image"
                        component="img"
                        src="/image/slider1.avif"
                        alt=""
                      />
                      <CardContent>
                        <Box className="slider-text">
                          <div>
                            Lorem ipsum, dolor sit amet consectetur.
                            <FormatQuoteIcon />
                          </div>
                          Animi eligendi provident fugit expedita molestias
                          nostrum! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Odit, repellendus! lorem ipsum.{" "}
                        </Box>
                        <Box className="slider-icon">
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarHalfIcon sx={{ color: "yellow" }} />{" "}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box>
                  <Card className="slider">
                    <CardActionArea>
                      <CardMedia
                        className="slider-image"
                        component="img"
                        src="/image/slider6.jpg"
                        alt=""
                      />
                      <CardContent>
                        <Box className="slider-text">
                          <div>
                            Lorem ipsum, dolor sit amet consectetur.
                            <FormatQuoteIcon />
                          </div>
                          Animi eligendi provident fugit expedita molestias
                          nostrum! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Odit, repellendus! lorem ipsum.{" "}
                        </Box>
                        <Box className="slider-icon">
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />{" "}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box>
                  <Card className="slider">
                    <CardActionArea>
                      <CardMedia
                        className="slider-image"
                        component="img"
                        src="/image/slider3.jpg"
                        alt=""
                      />
                      <CardContent>
                        <Box className="slider-text">
                          <div>
                            Lorem ipsum, dolor sit amet consectetur.
                            <FormatQuoteIcon />
                          </div>
                          Animi eligendi provident fugit expedita molestias
                          nostrum! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Odit, repellendus! lorem ipsum.{" "}
                        </Box>
                        <Box className="slider-icon">
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarHalfIcon sx={{ color: "yellow" }} />{" "}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box>
                  <Card className="slider">
                    <CardActionArea>
                      <CardMedia
                        className="slider-image"
                        component="img"
                        src="/image/slider4.jpg"
                        alt=""
                      />
                      <CardContent>
                        <Box className="slider-text">
                          <div>
                            Lorem ipsum, dolor sit amet consectetur.
                            <FormatQuoteIcon />
                          </div>
                          Animi eligendi provident fugit expedita molestias
                          nostrum! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Odit, repellendus! lorem ipsum.{" "}
                        </Box>
                        <Box className="slider-icon">
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />{" "}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box>
                  <Card className="slider">
                    <CardActionArea>
                      <CardMedia
                        className="slider-image"
                        component="img"
                        src="/image/slider5.jpg"
                        alt=""
                      />
                      <CardContent>
                        <Box className="slider-text">
                          <div>
                            Lorem ipsum, dolor sit amet consectetur.
                            <FormatQuoteIcon />
                          </div>
                          Animi eligendi provident fugit expedita molestias
                          nostrum! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Odit, repellendus! lorem ipsum.{" "}
                        </Box>
                        <Box className="slider-icon">
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarHalfIcon sx={{ color: "yellow" }} />{" "}
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
                <Box>
                  <Card className="slider">
                    <CardActionArea>
                      <CardMedia
                        className="slider-image"
                        component="img"
                        src="/image/slider2.avif"
                        alt=""
                      />
                      <CardContent>
                        <Box className="slider-text">
                          <div>
                            Lorem ipsum, dolor sit amet consectetur.
                            <FormatQuoteIcon />
                          </div>
                          Animi eligendi provident fugit expedita molestias
                          nostrum! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Odit, repellendus! lorem ipsum.{" "}
                        </Box>
                        <Box className="slider-icon">
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                          <StarIcon sx={{ color: "yellow" }} />
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              </Slider>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className="about-heading">Frequently Asked Questions</Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
<Faq/>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
