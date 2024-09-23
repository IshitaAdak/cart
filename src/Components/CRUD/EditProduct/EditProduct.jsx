import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit_product,update_product } from "../../../Redux/crudSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import "./EditStyle.css";
const EditProduct = () => {
    const {products}=useSelector((s)=>s.productdata)
    const{id}=useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
     dispatch(edit_product(id)) 
    },[id])
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });
  const [image, setImage] = useState();
  const[imagepreview,setImagepreview]=useState('');
  const handleupload=(e)=>{
  setImage(e.target.files[0]);
  setImagepreview(URL.createObjectURL(e.target.files[0]))
  }
  const [error, setError] = useState();

  const validation = () => {
    let error = {};
    if (!product.title) {
      error.title = "title is required";
    }
    if (!product.description) {
      error.description = "description is required";
    }

    return error;
  };

  let name, value;
  const postProductData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.trim().length === 0) {
        setProduct({ ...product, title: "" });
        setError({ ...error, title: "title is required" });
      } else {
        setProduct({ ...product, title: value });
        setError({ ...error, title: "" });
      }
    }

    if (name === "description") {
      if (value.trim().length === 0) {
        setProduct({ ...product, description: "" });
        setError({ ...error, description: "description is required" });
      } else {
        setProduct({ ...product, description: value });
        setError({ ...product, description: "" });
      }
    }
  };

  const submit = (e) => {
e.preventDefault();
setError(validation());
let formData=new FormData();
formData.append("title",product.title);
formData.append("description",product.description);
if(image){
formData.append("image",image);
}else{
formData.append("image",products?.image)
}
formData.append("id",id)
dispatch(update_product(formData)).then(()=>{navigate("/showproduct")})

  }
  useEffect(()=>{
if(products!==null){
setProduct({
title:products?.title,
description:products?.description
})
setImagepreview(`https://wtsacademy.dedicateddevelopers.us/uploads/product/${products?.image}`)
}
  },[products])
  return (
    <>
<Box className="edit">
<Box className="edit-container">
        <Box className="product-form">
          <Typography className="edit-heading">Edit Product</Typography>
          <Box className="form-group">
            <TextField
            className="text-field"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              name="title"
              type="text"
              value={product.title}
              onChange={(e) => postProductData(e)}
            />
       {/* <p className="error-message">{error?.title}</p> */}
          </Box>
          <Box className="form-group">
            <TextField
            className="text-field"
              id="outlined-basic"
              label="Description"
              variant="outlined"
              name="description"
              type="text"
              value={product.description}
              onChange={(e) => postProductData(e)}
            />
            <p className="error-message">{error?.description}</p>
          </Box>
          <Box className="form-group">
<TextField
className="text-field"
       type="file"
       name="image"
       accept="/image*"
       onChange={handleupload}
/>
{imagepreview && (
              <Box margin="normal">
              <img src={imagepreview} alt="Product" style={{ width: "50%", maxHeight: "200px",paddingTop:"15px", objectFit: "cover" }} />
            </Box>
)}
          </Box>
          <Button className="button" variant="contained" onClick={submit}>
            submit
          </Button>
        </Box>
      </Box>
</Box>
    </>
  );
};

export default EditProduct;
