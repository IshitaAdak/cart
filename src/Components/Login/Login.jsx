import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logIn, reset_redirectContact } from "../../Redux/authSlice";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './LoginStyle.css'
export default function Login() {
  const {redirectContact,isRegistration} = useSelector((s) => s.contents);
  const[myname,setMyname]=useState("")
  const myName=localStorage.getItem("name");
  useEffect(()=>{
  setMyname(myName)
  },[myName])
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validation = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    let error = {};
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
    let data = {
      email: user.email,
      password: user.password,
    };
  if(data.email!=="" && data.password!=="")
{
  dispatch(logIn(data)).then(()=>{
    RedirectUser()
  })
}
   
  };
  const RedirectUser = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    if (token !== null && token !== undefined && token !== "" && isInLoginPage) {
      toast.success("Login successfully")
     navigate("/");
    }
  };

  useEffect(() => {
    reset_redirectContact(null);
  }, [redirectContact]);
  return (
    <>
    <div className="log">
    <Box className="login-container">
        <Box
          className="login-form"
        >
 <Typography className="login-heading">Login</Typography>
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
         <p className="error-message">{error?.email}</p>
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
           <p className="error-message">{error?.password}</p>
          </Box>
          <Button className="button"
            variant="contained"
            onClick={submit}
    >
            submit
          </Button>
       {isRegistration?(
       <p>
        {myname}-you have sucessfully registered
       </p>
       ):(
        <p className="down-text">New to Bingoo?
        <Link to="/registration">SignUp</Link></p>
       )}
        </Box>
      </Box>
    </div>
    </>
  );
}
