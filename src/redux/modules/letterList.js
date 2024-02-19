import { fakeData } from "shared/data";

const ADD_LETTERLIST = "ADD_LETTERLIST";
const UPDATE_LETTERLIST = "UPDATE_LETTERLIST";
const DELETE_LETTER = "DELETE_LETTER";

export const addLetterList = (payload) => {
  return {
    type: ADD_LETTERLIST,
    payload,
  };
};

export const updateLetterList = (payload) => {
  return {
    type: UPDATE_LETTERLIST,
    payload,
  };
};

export const deleteLetter = (payload) => {
  return {
    type: DELETE_LETTER,
    payload,
  };
};

const initialState = {
  letterList: [...fakeData],
};

const letterList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTERLIST:
      return {
        ...state,
        letterList: [action.payload, ...state.letterList],
      };
    case UPDATE_LETTERLIST:
      return {
        ...state,
        letterList: [...action.payload],
      };
    case DELETE_LETTER:
      return {
        ...state,
        letterList: [...action.payload],
      };
    default:
      return state;
  }
};

export default letterList;
