import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { product_submit } from "../../../Redux/crudSlice";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./AddProductStyle.css";
const AddProduct = () => {
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
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
formData.append("image",image)
dispatch(product_submit(formData)).then(()=>{
  navigate("/showproduct")
})
toast.success("Product added successfully")

  };
  return (
    <>
<Box className="add">
<Box className="add-container">
        <Box className="product-form">
          <Typography className="add-heading">Add Product</Typography>
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

export default AddProduct;
