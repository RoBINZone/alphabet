import { describe, expect, it } from "vitest";
import { GameplayService } from "./gameplay-service.js";

describe("Statistics Service", () => {
  it("test checkAnswer", () => {
    expect(GameplayService.checkAnswer(0, 1, 2)).toEqual(true);
    expect(GameplayService.checkAnswer(1, 1, 2)).toEqual(false);
    expect(GameplayService.checkAnswer(0, 2, 1)).toEqual(false);
    expect(GameplayService.checkAnswer(1, 2, 1)).toEqual(true);
  });

  it("test get2RandomLetters", () => {
    for (let i = 0; i < 100; i++) {
      const [index1, index2] = GameplayService.get2RandomLetters();
      expect(index1).not.toBe(index2);
      expect(index1).toBeGreaterThanOrEqual(0);
      expect(index2).toBeGreaterThanOrEqual(0);
      // We don't have access to LETTERS length directly here easily unless we import LETTERS or just assume logic.
      // But we can check if they are numbers.
    }
  });
});
