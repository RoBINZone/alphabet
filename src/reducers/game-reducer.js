import {
  ADD_ANSWER,
  CLEAR_GAME,
  DARK_THEME,
  SET_ANSWERS,
  SET_SCREEN,
  SET_SELECTED_LETTERS_INDEXES,
  SET_START_TIME,
  SET_THEME,
  WELCOME_SCREEN,
} from "../consts.js";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case CLEAR_GAME:
      return {
        ...JSON.parse(JSON.stringify(initialState)),
        theme: state.theme,
      };
    case SET_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };
    case SET_ANSWERS:
      return {
        ...state,
        answers: action.answers,
      };
    case ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.answer],
      };
    case SET_SELECTED_LETTERS_INDEXES:
      return {
        ...state,
        selectedLettersIndexes: action.selectedLettersIndexes,
      };
    case SET_START_TIME:
      return {
        ...state,
        startTime: action.startTime,
      };
    default:
      return state;
  }
};

export const initialState = {
  screen: WELCOME_SCREEN,
  answers: [],
  selectedLettersIndexes: [],
  theme: typeof localStorage !== "undefined"
    ? (localStorage.getItem("theme") || DARK_THEME)
    : DARK_THEME,
};
