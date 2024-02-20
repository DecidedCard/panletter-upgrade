import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addLetter, checkLetterList, updateLetter } from "api/fetchLetter";

const checkKey = localStorage.key(1);
const check = [];
if (checkKey) {
  check.push(...JSON.parse(localStorage.getItem(checkKey)));
}

const initialState = {
  letterList: [],
  isLetterLoading: false,
  isLetterError: false,
  error: null,
};

export const __initializationLetterList = createAsyncThunk(
  "__initializationLetterList",
  async (payload, thunkAPI) => {
    try {
      const response = await checkLetterList();
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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

export const __updateLetterList = createAsyncThunk(
  "updateLetterList",
  async (payload, thunkAPI) => {
    try {
      const response = await updateLetter(payload);
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
      state.isLetterLoading = true;
      state.isLetterError = false;
      state.error = null;
    });
    builder.addCase(__addLetterList.fulfilled, (state, action) => {
      state.isLetterLoading = false;
      state.isLetterError = false;
      state.letterList = [action.payload, ...state.letterList];
      localStorage.setItem(
        "letterList",
        JSON.stringify([action.payload, ...state.letterList])
      );
    });
    builder.addCase(__addLetterList.rejected, (state, action) => {
      state.isLetterLoading = false;
      state.isLetterError = true;
      state.error = action.payload;
    });
    builder.addCase(__initializationLetterList.pending, (state, action) => {
      state.isLetterLoading = true;
      state.isLetterError = false;
      state.error = null;
    });
    builder.addCase(__initializationLetterList.fulfilled, (state, action) => {
      state.isLetterLoading = false;
      state.isLetterError = false;
      state.letterList = action.payload;
      localStorage.setItem("letterList", JSON.stringify([action.payload]));
    });
    builder.addCase(__initializationLetterList.rejected, (state, action) => {
      state.isLetterLoading = false;
      state.isLetterError = true;
      state.error = action.payload;
    });
    builder.addCase(__updateLetterList.pending, (state, action) => {
      state.isLetterLoading = true;
      state.isLetterError = false;
      state.error = null;
    });
    builder.addCase(__updateLetterList.fulfilled, (state, action) => {
      state.isLetterLoading = false;
      state.isLetterError = false;
      state.letterList = [action.payload];
      localStorage.setItem("letterList", JSON.stringify([action.payload]));
    });
    builder.addCase(__updateLetterList.rejected, (state, action) => {
      state.isLetterLoading = false;
      state.isLetterError = true;
      state.error = action.payload;
    });
  },
});

export const { addLetterList, updateLetterList, deleteLetter } =
  lettersSilce.actions;
export default lettersSilce.reducer;
