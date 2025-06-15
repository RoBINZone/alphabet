import { describe, expect, it } from "vitest";
import { GameplayService } from "./gameplay-service.js";

describe("Statistics Service", () => {
  it("test checkAnswer", () => {
    expect(GameplayService.checkAnswer(0, 1, 2)).toEqual(true);
    expect(GameplayService.checkAnswer(1, 1, 2)).toEqual(false);
    expect(GameplayService.checkAnswer(0, 2, 1)).toEqual(false);
    expect(GameplayService.checkAnswer(1, 2, 1)).toEqual(true);
  });
});
