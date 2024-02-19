import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser } from "api/fetchJWT";

const initialState = {
  user: null,
};

const check = localStorage.getItem("accessToken");

// 아직 다 작성 못 함.
export const __initialization = createAsyncThunk(
  "initialization",
  async (payload, thunkAPI) => {
    const response = await checkUser(check);
    console.log(response.response);
    thunkAPI.dispatch(response);
  }
);

const userSilce = createSlice({
  name: "user",
  initialState,
  reducers: {
    initialization: (state, action) => {
      return { user: action.payload };
    },
  },
});

export const { initialization } = userSilce.actions;
export default userSilce.reducer;
