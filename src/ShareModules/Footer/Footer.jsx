import React from "react";
import { Box, Container, Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import "./FooterStyle.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <Container maxWidth={"lg"}>
          <Grid container spacing={5}>
            <Grid item lg={4} md={6} xs={12} sm={6}>
              <h5 style={{ color: "goldenrod" }}>CUSTOMER SERVICE</h5>
              <ul className="ft_1">
                <li>Track Order</li>
                <li> Return Order</li>
                <li>Cancel Order</li>
                <li>Contact us</li>
                <li>
                  <TwitterIcon />
                  <PinterestIcon />
                  <FacebookIcon />
                  <InstagramIcon />
                </li>
              </ul>
            </Grid>
            <Grid item lg={4} md={6} xs={12} sm={6}>
              <h5 style={{ color: "goldenrod" }}>QUICK LINKS</h5>
              <ul className="ft_2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <Link className="Link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/product">
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item lg={4} md={12} xs={12} sm={12} className="ft_3">
              <h5 style={{ color: "goldenrod" }}>CONTACT INFO</h5>
              <p style={{ color: "white" }}>
                <PhoneInTalkIcon />
                +92 31456780
              </p>
              <p style={{ color: "white" }}>
                <EmailIcon />
                mailto:bingoo@gmail.com
              </p>
              <p style={{ color: "white" }}>
                <SendIcon />
                Kolkata,India
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
