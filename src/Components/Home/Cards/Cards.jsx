import React from "react";
import {
  Container,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import {Link} from 'react-router-dom'
import "./CardsStyle.css";
const Cards = () => {
  return (
    <Box className="cards">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box className="cards-heading">Store to Explore</Box>
        </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className="card_1">
              <CardActionArea>
                <CardMedia
                  className="image"
                  component="img"
                  src="./image/card1.avif"
                  alt=""
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    className="card_text"
                  >
                    Men Fashion
                  </Typography>
               <Link to="/menform">
               <Button>Shop Now</Button>
               </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className="card_1">
              <CardActionArea>
                <CardMedia
                  className="image"
                  component="img"
                  src="./image/card2.jpg"
                  alt=""
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    className="card_text"
                  >
                    Women Fashion
                  </Typography>
                <Link to="/womenform">
                <Button>Shop Now</Button>
                </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className="card_1">
              <CardActionArea>
                <CardMedia
                  className="image"
                  component="img"
                  src="./image/card3.avif"
                  alt=""
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    className="card_text"
                  >
                    Kids Fashion
                  </Typography>
                <Link to="kidform">
                <Button>Shop Now</Button>
                </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cards;
