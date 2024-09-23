import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { delete_product,show_product } from "../../../Redux/crudSlice";
import SweetAlertComponent from "../../SweetAlert/SweetAlert";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
  Pagination,
} from "@mui/material";
import "./ShowStyle.css";
const ShowProduct = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { list, totalpage } = useSelector((s) => s.productdata);
  const [totalRecords, setPage] = useState();
  const [delete_id, setDelete_id] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    dispatch(show_product());
  }, []);
  const handleChange = (item, pageno) => {
    setPage(pageno);
    dispatch(
    show_product({
        page: pageno,
        perpage: 10,
      })
    );
  };
  const Deletefun = () => {
    if (delete_id !== "") {
      dispatch(
        delete_product({
          id: delete_id,
        }
 
      )
        
      ).then(() => {
        toast.error("Product is deleted")
        dispatch(show_product());
      })
    setDelete_id("");
    setIsDeleted(false);
  }
}
  return (
    <>
      <Box className="show">
        <Container maxWidth="lg">
          <Grid container spacing={5} style={{ marginTop: "20px" }}>
            {list?.map((item) => {
              return (
                <>
                  <Grid item lg={4} md={6} xs={12} sm={6}>
                    <Card className="card">
                      <CardActionArea>
                        <CardContent>
                          <CardMedia
                            component="img"
                            className="image"
                       
                            src={`https://wtsacademy.dedicateddevelopers.us/uploads/product/${item?.image}`}
                          />
                          <Typography component="div" className="product_title">
                            {item?.title}
                          </Typography>
                          <Typography className="product_body">
                            {item?.description}
                          </Typography>
                          <Link to={`/product/detail/${item?._id}`}>
                            <Button className="button btnmar">Edit</Button>
                          </Link>
                          <Link
                            to=""
                            onClick={() => {
                              setDelete_id(item?._id);
                              setIsDeleted(true);
                            }}
                          >
                            <Button className="button del">Delete</Button>
                          </Link>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
          {isDeleted && (
            <SweetAlertComponent
              confirm={Deletefun}
              cancel={() => setIsDeleted(false)}
              title={"Are you sure"}
              subtitle={"You will not be able to recover"}
            />
          )}

  <Box className="pagination">
    <Pagination
    count={totalpage}
    totalRecords={totalRecords}
    onChange={handleChange}
    color="primary"
    />
  </Box>
     
        </Container>
      </Box>
    </>
  );
};

export default ShowProduct;
