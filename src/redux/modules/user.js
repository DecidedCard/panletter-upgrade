import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

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
