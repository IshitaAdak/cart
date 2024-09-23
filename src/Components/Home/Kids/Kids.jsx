import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import './KidsStyle.css';
import kiddata from "./kiddata";
const Kids = () => {
  const [search, setSearch] = useState("");
  return (
    <Box className="kid">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box className="search_text">Search by your preference</Box>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box className="search_bar">
              <TextField className="search_text"
                id="outlined-basic"
                variant="outlined"
                label="Enter"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
          
            </Box>
          </Grid>
          {kiddata
            .filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.category.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <>
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Card className="kid_card">
                      <CardActionArea>
                        <CardMedia
                          className="image"
                          component="img"
                          src={item.img}
                          alt=""
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            component="div"
                            className="card_text"
                          >
                        <span className="text_heading">Category:</span>{item.category}
                          </Typography>
                          <Typography
                            gutterBottom
                            component="div"
                            className="card_text"
                          >
                        <span className="text_heading">Price:</span>${item.price}
                          </Typography>
                          <Link>
                            <Button className="kid_button">View More</Button>
                          </Link>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Kids;
