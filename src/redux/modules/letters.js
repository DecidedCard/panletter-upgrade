import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addLetter } from "api/fetchLetter";

const checkKey = localStorage.key(1);
const check = [];
if (checkKey) {
  check.push(...JSON.parse(localStorage.getItem(checkKey)));
}

const initialState = {
  letterList: check,
  isLoading: false,
  error: null,
};

export const __addLetterList = createAsyncThunk(
  "addLetterList",
  async (payload, thunkAPI) => {
    try {
      const response = await addLetter(payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const lettersSilce = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetterList: (state, action) => {
      return {
        letterList: [action.payload, ...state.letterList],
      };
    },
    updateLetterList: (state, action) => {
      localStorage.setItem("letterList", JSON.stringify([...action.payload]));
      return {
        letterList: [...action.payload],
      };
    },
    deleteLetter: (state, action) => {
      localStorage.setItem("letterList", JSON.stringify([...action.payload]));
      return {
        letterList: [...action.payload],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__addLetterList.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(__addLetterList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.letterList = action.payload;
      localStorage.setItem("letterList", JSON.stringify([action.payload]));
    });
    builder.addCase(__addLetterList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addLetterList, updateLetterList, deleteLetter } =
  lettersSilce.actions;
export default lettersSilce.reducer;
