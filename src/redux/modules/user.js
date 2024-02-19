import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser } from "api/fetchJWT";

const initialState = {
  user: {},
};

const check = localStorage.getItem("accessToken");

// 아직 다 작성 못 함.
export const __initialization = createAsyncThunk(
  "initialization",
  async (payload, thunkAPI) => {
    try {
      const response = await checkUser(check);
      thunkAPI.fulfillWithValue();
    } catch (error) {
      console.error(error);
      thunkAPI.rejectWithValue();
    }
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
