import React from "react";
import "@mui/material";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";
import "./contactStyle.css";
const Contact = () => {
  return (
    <>
      <Box className="con">
        <Container className="contact-container" maxWidth={"lg"}>
          <Grid container spacing={3}>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="contact-card">
                <CardActionArea>
                  <CardContent>
                    <LocationOnIcon className="icon" />
                    <Box className="card-text">
                      <span className="icon-heading">Address:</span>112/5
                      Mahatma Gandhi Road
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="contact-card">
                <CardActionArea>
                  <CardContent>
                    <PhoneIcon className="icon" />
                    <Box className="card-text">
                      <span className="icon-heading">Phone:</span>+92 31456780
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="contact-card">
                <CardActionArea>
                  <CardContent>
                    <EmailIcon className="icon" />
                    <Box className="card-text">
                      <span className="icon-heading">EMAIL:</span>
                      bingoo@gmail.com
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Card className="contact-card">
                <CardActionArea>
                  <CardContent>
                    <PublicIcon className="icon" />
                    <Box className="card-text">
                      <span className="icon-heading">Website:</span>
                      bingooSite.com
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box className="c_2">
                <Typography className="contact-heading">Contact Us</Typography>
                <form action="#">
                  <Box className="form-group">
                    <TextField
                      className="text-field"
                      label="FULL NAME"
                      variant="standard"
           
                      focused
                 
                    />
                  </Box>
                  <Box className="form-group">
                    <TextField
                      className="text-field"
                      label="EMAIL ADDRESS"
                      variant="standard"
            
                      focused
                    />
                  </Box>
                  <Box className="form-group">
                    <TextField
                      className="text-field"
                      label="MESSEGE"
                      // multiline
                      rows={3}
                 
                      variant="standard"
                      focused
                    />
                  </Box>
                  <Button type="submit" className="submit-button">
                    Submit
                  </Button>
                </form>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <img
                  className="contact_image"
                  src="./image/con_pic.avif"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.531957334524!2d88.33601981051517!3d22.484216179469506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027093d8ebc825%3A0x9ebaafbec66af643!2s112%2C%20Mahatma%20Gandhi%20Rd%2C%20New%20Panchanantala%2C%20Paschim%20Putiary%2C%20Kolkata%2C%20West%20Bengal%20700082!5e0!3m2!1sen!2sin!4v1718736343389!5m2!1sen!2sin"
                  allowFullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
