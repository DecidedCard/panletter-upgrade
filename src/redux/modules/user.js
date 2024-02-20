import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser } from "api/fetchJWT";

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  error: null,
};

export const __initialization = createAsyncThunk(
  "initialization",
  async (payload, thunkAPI) => {
    try {
      const response = await checkUser(payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
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
  extraReducers: (builder) => {
    builder.addCase(__initialization.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(__initialization.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    });
    builder.addCase(__initialization.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const { initialization } = userSilce.actions;
export default userSilce.reducer;
