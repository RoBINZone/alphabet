import { expect, describe, it } from "vitest";
import { initialState, reducer } from "./game-reducer.js";
import {
  SET_ANSWERS,
  SET_SCREEN,
  SET_SELECTED_LETTERS_INDEXES,
  SET_START_TIME,
  WELCOME_SCREEN,
} from "../consts.js";

describe("Game reducer", () => {
  it("test reducer SET_SCREEN", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: SET_SCREEN,
          screen: WELCOME_SCREEN,
        },
      ),
    ).toEqual({
      screen: WELCOME_SCREEN,
      answers: [],
      selectedLettersIndexes: [],
    });
  });

  it("test reducer SET_ANSWERS", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: SET_ANSWERS,
          answers: [],
        },
      ),
    ).toEqual({
      screen: WELCOME_SCREEN,
      answers: [],
      selectedLettersIndexes: [],
    });
  });

  it("test reducer SET_SELECTED_LETTERS_INDEXES", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: SET_SELECTED_LETTERS_INDEXES,
          selectedLettersIndexes: [],
        },
      ),
    ).toEqual({
      screen: WELCOME_SCREEN,
      answers: [],
      selectedLettersIndexes: [],
    });
  });

  it("test reducer SET_START_TIME", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: SET_START_TIME,
          startTime: 123,
        },
      ),
    ).toEqual({
      screen: WELCOME_SCREEN,
      answers: [],
      selectedLettersIndexes: [],
      startTime: 123,
    });
  });
});
