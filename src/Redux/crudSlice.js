import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
import { product_list_end_point, product_post_end_point } from "../API/EndPoints/apiEndPoints";
const initialState={
upload_status:"idle",
list:[{}],
totalpage:"",
products:[{}]
}
 export const product_submit=createAsyncThunk("product_post",
async(formData)=>{
const res=await axiosInstance.post(product_post_end_point.product_post,formData);
const resData=await res?.data;
return resData
}
 )
 export const show_product=createAsyncThunk("show_product",
    async(formData)=>{
    const res=await axiosInstance.post(product_list_end_point.show_product,formData);
    const resData=await res?.data;
   
    return resData
    }
 )
 export const edit_product=createAsyncThunk("edit_product",
  async(id)=>{
  const res=await axiosInstance.get(`/product/detail/${id}`);
const resData=await res?.data;
return resData
  }
 )
 export const update_product=createAsyncThunk("update_product",
  async(formData)=>{
  let res=await axiosInstance.post(`/product/update`,formData);
  let resData=res?.data
  return resData
  }
 )
 export const delete_product=createAsyncThunk("delete_product",
   async(formdata)=>{
   let res=await axiosInstance.post(`/product/remove`,formdata);
   
let resData=await res?.data;

   return resData
   }
 )
 const crudSlice=createSlice({
name:"product_info",
initialState,
reducers:{},
extraReducers:(builder)=>{
builder
.addCase(product_submit.pending,(state)=>{
state.upload_status="loading"
}
)
.addCase(product_submit.fulfilled,(state)=>{
state.upload_status="success"
})
.addCase(product_submit.rejected,(state)=>{
state.upload_status="failed"
})
.addCase(show_product.pending,(state)=>{
state.upload_status="loading"
})
.addCase(show_product.fulfilled,(state,{payload})=>{
state.upload_status="showing product details";
state.list=payload?.data;
state.totalpage=payload?.totalPages;
})
.addCase(show_product.rejected,(state)=>{
state.upload_status="failed"
})
.addCase(delete_product.pending,(state)=>{
state.upload_status="loading"
})
.addCase(delete_product.fulfilled,(state)=>{
state.upload_status="success"
})
.addCase(delete_product.rejected,(state)=>{
state.upload_status="failed"
})
.addCase(edit_product.pending,(state)=>{
state.upload_status="loading"
})
.addCase(edit_product.fulfilled,(state,{payload})=>{
state.upload_status="success";
state.products=payload?.data
})
.addCase(edit_product.rejected,(state)=>{
state.upload_status="failed"
})
.addCase(update_product.pending,(state)=>{
state.upload_status="loading"
})
.addCase(update_product.fulfilled,(state)=>{
  state.upload_status="success"
  })
  .addCase(update_product.rejected,(state)=>{
    state.upload_status="failed"
    })
}
})
export default crudSlice.reducer