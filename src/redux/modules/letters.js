import { createSlice } from "@reduxjs/toolkit";

const checkKey = localStorage.key(1);
const check = [];
if (checkKey) {
  check.push(...JSON.parse(localStorage.getItem(checkKey)));
}

const initialState = {
  letterList: check,
};

const lettersSilce = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetterList: (state, action) => {
      localStorage.setItem(
        "letterList",
        JSON.stringify([action.payload, ...state.letterList])
      );
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
});

export const { addLetterList, updateLetterList, deleteLetter } =
  lettersSilce.actions;
export default lettersSilce.reducer;
