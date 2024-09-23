import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
import { reg_end_point, login_end_point} from "../API/EndPoints/apiEndPoints";
const initialState = {
  upload_status: "idle",
  isRegistration: false,
  isLogin: false,
  redirectContact: null,
  redirectTo: null,
  profile:[],
  userpic:localStorage.getItem("pic")||null
};
export const register = createAsyncThunk("signup", async (formData) => {
  const res = await axiosInstance.post(reg_end_point.registration, formData);
  const resData = await res?.data;
  return resData;
});
export const logIn = createAsyncThunk("signin", async(formData) => {
  const res = await axiosInstance.post(login_end_point.login, formData);
  const resData = res?.data;
  return resData;
})
export const get_profile=createAsyncThunk("profile_get",async(formData)=>{
  const res=await axiosInstance.get("/user/profile-details",formData);
  const resData=await res?.data;
  return resData
  })
 const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    reset_redirectContact: (state, { payload }) => {
      state.redirectContact = payload;
    },
    check_myname: (state, { payload }) => {
      const name = localStorage.getItem("name");
      if (name !== null && name !== undefined) {
        state.isRegistration = true;
      }
    },
    handleRegistration: (state) => {
      localStorage.removeItem("name");
      state.isRegistration = false;
    },
    reset_redirectTo: (state, { payload }) => {
      state.redirectTo = payload;
    },
    check_token: (state, { payload }) => {
      const token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.isLogin = true;
      }
    },
    handleLoggedOut: (state) => {
      localStorage.removeItem("token");
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
        localStorage.setItem("name", payload?.data?.first_name);
        state.isRegistration=true;
        state.redirectContact="/login"
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.upload_status = "failed";
      })
      .addCase(logIn.pending, (state, { payload }) => {
        state.upload_status = "loading";
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.upload_status = "success";
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("Name", payload?.data?.first_name);
        state.isLogin=true;
        state.redirectTo="/"
      
        state.userpic=payload?.data?.profile_pic;
        localStorage.setItem("pic",payload?.data?.profile_pic)
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.upload_status = "failed";
      })
      .addCase(get_profile.pending,(state)=>{
      state.upload_status="loading"
      })
      .addCase(get_profile.fulfilled,(state,{payload})=>{
      state.upload_status="success";
      state.profile=payload?.data
      })
      .addCase(get_profile.rejected,(state)=>{
      state.upload_status="failed"
      })
  },
});
export const{
  reset_redirectContact,
  reset_redirectTo,
  check_myname,
  check_token,
 handleRegistration,
 handleLoggedOut
} = authSlice.actions;
export default authSlice.reducer;
