import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { register } from "../../Redux/authSlice";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './registrationStyle.css';
export default function Registration() {
  const { redirectContact } = useSelector((s) => s.contents);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [profile_pic, setProfile_pic] = useState("");
  const [error, setError] = useState();
  const validation = () => {
    let error = {};
    const userNamePattern = /[A-Za-z]{3}/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!user.first_name) {
      error.first_name = "first name is required";
    } else if (!userNamePattern.test(user.first_name)) {
      error.first_name = "Invalid first name";
    }
    if (!user.last_name) {
      error.last_name = "last name is requied";
    }else if (!userNamePattern.test(user.last_name)) {
      error.last_name = "Invalid last name";
    }
    if (!user.email) {
      error.email = "email is required";
    } else if (!emailPattern.test(user.email)) {
      error.email = "Invalid email address";
    }
    if (!user.password) {
      error.password = "password is required";
    } else if (!passwordPattern.test(user.password)) {
      error.password =
        "Password must contain at least 6 characters,including one uppercase and one lowecase";
    }
    return error;
  };
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "first_name") {
      if (value.trim().length === 0) {
        setUser({ ...user, first_name: "" });
        setError({ ...error, first_name: "first name can't be empty" });
      } else {
        setUser({ ...user, first_name: value });
        setError({ ...error, first_name: "" });
      }
    }
    if (name === "last_name") {
      if (value.trim().length === 0) {
        setUser({ ...user, last_name: "" });
        setError({ ...error, last_name: "last name can't be empty" });
      } else {
        setUser({ ...user, last_name: value });
        setError({ ...error, last_name: "" });
      }
    }
    if (name === "email") {
      if (value.trim().length === 0) {
        setUser({ ...user, email: "" });
        setError({ ...error, email: "email can't be empty" });
      } else {
        setUser({ ...user, email: value });
        setError({ ...error, email: "" });
      }
    }
    if (name === "password") {
      if (value.trim().length === 0) {
        setUser({ ...user, password: "" });
        setError({ ...error, password: "password can't be empty" });
      } else {
        setUser({ ...user, password: value });
        setError({ ...error, password: "" });
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    setError(validation());
    let formData = new FormData();
    formData.append("first_name", user.first_name);
    formData.append("last_name", user.last_name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profile_pic", profile_pic);
    dispatch(register(formData));
  };
  const RedirectUser = () => {
    const name = localStorage.getItem("name");
    const isInContactPage =
      window.location.pathname.toLowerCase() === "/registration";
    if (name !== null && name !== undefined && name !== "") {
      toast.success("Registered successfully")
      isInContactPage && navigate("/login");
    }
  };
  useEffect(() => {
    RedirectUser();
  }, [redirectContact]);
  return (
    <>
      <Box className="reg">
      <Box className="registration-container">
        <Box
          className="reg-form"
       
        >
         <Typography className="heading">Registration</Typography>
          <Box className="form-group">
            <TextField
            className="text-field"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              name="first_name"
              type="text"
              value={user.first_name}
              onChange={(e) => postUserData(e)}
            />
            <span className="error-message">{error?.first_name}</span>
          </Box>
          <Box className="form-group">
            <TextField
            className="text-field"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="last_name"
              type="text"
              value={user.last_name}
              onChange={(e) => postUserData(e)}
            />
            <span className="error-message">{error?.last_name}</span>
          </Box>
          <Box className="form-group">
            <TextField
            className="text-field"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              type="email"
              value={user.email}
              onChange={(e) => postUserData(e)}
            />
            <span className="error-message">{error?.email}</span>
          </Box>
          <Box className="form-group">
            <TextField
            className="text-field"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              type="password"
              value={user.password}
              onChange={(e) => postUserData(e)}
            />
            <span className="error-message">{error?.password}</span>
          </Box>
    <Box className="form-group">
    <TextField 
             className="input_image"
              type="file"
              name="profile_pic"
              accept="profile_pic/*"
              onChange={(e) => setProfile_pic(e.target.files[0])}
            />
    </Box>
          
          <Button variant="contained" onClick={submit} className="submit_button">
            submit
          </Button>
        </Box>
      </Box>
      </Box>
    </>
  );
}
