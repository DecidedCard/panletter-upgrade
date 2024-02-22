import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, editProfile } from "api/fetchJWT";

const initialState = {
  user: {},
  isLoading: false,
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

export const __updateProfile = createAsyncThunk(
  "updateProfile",
  async (payload, thunkAPI) => {
    try {
      const response = await editProfile(payload);
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
      state.error = null;
    });
    builder.addCase(__initialization.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(__initialization.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(__updateProfile.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__updateProfile.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(__updateProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { initialization } = userSilce.actions;
export default userSilce.reducer;
