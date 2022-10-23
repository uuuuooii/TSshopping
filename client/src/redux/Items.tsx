import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetItems:any = createAsyncThunk(
  "/items",
  async () => {
    try {
      const response = await axios.get("http://localhost:3001/items");
      const data = response.data.data;
      return data;
    } catch (error) {}
   
  }
);

const Items = createSlice({
  name: "items",
  initialState:[],
  reducers: {},
  extraReducers: {
 
  },
});




export default Items.reducer;
