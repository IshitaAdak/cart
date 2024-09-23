import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import data from "./blogdata";
import "./BlogStyle.css";
const Blog = () => {
  const[noOfElement,setnoOfElement]=useState(3);
  const[open,setOpen]=useState(false);
  const slice=data.slice(0,noOfElement);
  const loadmore=()=>{
    setnoOfElement(noOfElement+noOfElement)
  }
  return (
    <>
      <Box className="blog">
        <Box className="blog_banner">
          <img src="./image/blog.jpg" alt="" />
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box className="blog_heading">Check Out Our Lastest Blogs</Box>
            </Grid>
            {slice.map((item,index)=>{
              return(
              <>
<Grid item lg={4} md={6} sm={6} xs={12}>
              <Card className="card">
                <CardActionArea>
                  <CardMedia className="image" component="img" src={item.img} alt="" />
                  <CardContent>
                    <Typography gutterBottom component="div" className="blog_head">{item.head}</Typography>
                    <Typography gutterBottom component="div" className="blog_body">{item.body}</Typography>
                    <Typography gutterBottom component="div" className="author_name">
                      <span className="author">Author:</span>
                      {item.autor}</Typography>
                    <Button className="button">Read More</Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
              </>
              )
            })}
                <Grid item lg={12} md={12} sm={12} xs={12}>
                <Button onClick={()=>{
            loadmore();
            setOpen(!open)
            }}>{open?null:<Typography className="main_button">VIEW MORE...</Typography>}</Button>
            </Grid>
  
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
