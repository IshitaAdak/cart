import React from "react";
import {
  Container,
  Box,
  Grid,

} from "@mui/material";
import "./Card2Style.css";
const Card2 = () => {
  return (
    <Box className="card2">
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box className="card2_heading">
              New Arrivals
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Box className="card card_1 nohover">
         <Box className="context">Summer Shirts</Box>
         <Box className="off">50%-80%</Box>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
          <Box className="card card_2 nohover">
         <Box className="context">Ethnic Wear</Box>
         <Box className="off">30%-40%</Box>
            </Box>
          </Grid>
       
          <Grid item lg={4} md={4} sm={12} xs={12}>
          <Box className="card card_3 nohover">
         <Box className="context">Denim Jackets</Box>
         <Box className="off">40%-70%</Box>
            </Box>
          </Grid>
          </Grid>
        
      </Container>
    </Box>
  );
};

export default Card2;
