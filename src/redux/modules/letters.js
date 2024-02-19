// LocalStorage 적용 후 주석처리.
// import { fakeData } from "shared/data";

const ADD_LETTERLIST = "letterList/ADD_LETTERLIST";
const UPDATE_LETTERLIST = "letterList/UPDATE_LETTERLIST";
const DELETE_LETTER = "letterList/DELETE_LETTER";

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
const checkKey = localStorage.key(0);
const check = [];
if (checkKey !== null) {
  check.push(...JSON.parse(localStorage.getItem(checkKey)));
}

const initialState = {
  // 로컬스토리지 데이터를 초기값으로 설정.
  letterList: check,

  // LocalStorage 적용 후 주석처리.
  // letterList: [...fakeData],
};

const letters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTERLIST:
      localStorage.setItem(
        "letterList",
        JSON.stringify([action.payload, ...state.letterList])
      );
      return {
        letterList: [action.payload, ...state.letterList],
      };
    case UPDATE_LETTERLIST:
      localStorage.setItem("letterList", JSON.stringify([...action.payload]));
      return {
        letterList: [...action.payload],
      };
    case DELETE_LETTER:
      localStorage.setItem("letterList", JSON.stringify([...action.payload]));
      return {
        letterList: [...action.payload],
      };
    default:
      return state;
  }
};

export default letters;
