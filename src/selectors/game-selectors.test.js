import { describe, expect, it } from "vitest";
import { GameSelectors } from "./game-selectors.js";

describe("Game Selector Tests", () => {
  const answers = [
    {
      correct: false,
      datetime: 1750008619518,
    },
    {
      correct: false,
      datetime: 1750008635935,
    },
    {
      correct: false,
      datetime: 1750008636298,
    },
    {
      correct: false,
      datetime: 1750008636563,
    },
    {
      correct: true,
      datetime: 1750008636715,
    },
    {
      correct: true,
      datetime: 1750008636867,
    },
    {
      correct: false,
      datetime: 1750008637174,
    },
    {
      correct: false,
      datetime: 1750008637624,
    },
    {
      correct: false,
      datetime: 1750008637798,
    },
    {
      correct: true,
      datetime: 1750008637965,
    },
    {
      correct: false,
      datetime: 1750008638125,
    },
    {
      correct: true,
      datetime: 1750008638729,
    },
    {
      correct: false,
      datetime: 1750008644486,
    },
  ];

  it("should get correct answer count", () => {
    expect(GameSelectors.getCorrectCount({ answers })).toEqual(4);
  });

  it("should get incorrect answer count", () => {
    expect(GameSelectors.getIncorrectCount({ answers })).toEqual(9);
  });
});
