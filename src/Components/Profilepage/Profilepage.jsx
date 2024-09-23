import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_profile } from "../../Redux/authSlice";
import { Box, Container, Paper, Avatar, Typography, Grid } from "@mui/material";
const Profilepage = () => {
  const dispatch = useDispatch();
  const { profile} = useSelector((s) => s.contents);
  useEffect(() => {
    dispatch(get_profile());
  }, []);
  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 7, mb: 7 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Box display="flex" justifyContent="center" mb={2}>
            <Avatar
              alt={profile?.first_name}
              src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${profile?.profile_pic}`}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            {profile?.first_name} {profile?.last_name}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Email:</strong> {profile?.email}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Profilepage;
