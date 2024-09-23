import React from "react";
import {
  Container,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import "./SpecialityStyle.css";
const Speciality = () => {
  return (
    <>
      <Box className="speciality">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className="speciality-heading">Our Speciality</Box>
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
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Speciality;
