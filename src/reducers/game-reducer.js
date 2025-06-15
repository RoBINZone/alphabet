import {
  ADD_ANSWER, CLEAR_GAME,
  SET_ANSWERS,
  SET_SCREEN,
  SET_SELECTED_LETTERS_INDEXES,
  SET_START_TIME,
  WELCOME_SCREEN
} from "../consts.js";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_GAME:
      return JSON.parse(JSON.stringify(initialState));
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
};
