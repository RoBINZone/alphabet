import { describe, it, expect, beforeEach, vi } from "vitest";
import { GameActions } from "./game-actions.js";
import { ADD_ANSWER } from "../consts.js";

describe("Game Action Tests", () => {
  const DATE = "2022-02-24T05:00:00.000Z";

  const gameState = {
    screen: "GAMEPLAY_SCREEN",
    answers: [
      {
        correct: false,
        datetime: 1750013983927,
      },
      {
        correct: true,
        datetime: 1750013984452,
      },
      {
        correct: true,
        datetime: 1750013984873,
      },
      {
        correct: false,
        datetime: 1750013985050,
      },
      {
        correct: true,
        datetime: 1750013985235,
      },
      {
        correct: false,
        datetime: 1750013985609,
      },
      {
        correct: true,
        datetime: 1750013985898,
      },
      {
        correct: true,
        datetime: 1750013986198,
      },
      {
        correct: true,
        datetime: 1750013986485,
      },
    ],
    selectedLettersIndexes: [16, 13],
    startTime: 1750013982741,
  };

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(DATE);
  });

  it("should create an addAnswer action", () => {
    expect(GameActions.addAnswer(gameState, 0)).toEqual({
      answer: {
        correct: false,
        datetime: 1645678800000,
      },
      type: ADD_ANSWER,
    });
  });
});
