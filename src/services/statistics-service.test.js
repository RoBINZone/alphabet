import { StatisticsService } from "./statistics-service.js";

import { expect, beforeEach, vi, describe, it } from "vitest";

describe("Statistics Service", () => {
  const DATE = "2022-02-24T05:00:00.000Z";
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(DATE);
  });
  it("test getStatistic", () => {
    StatisticsService.getStatistic();
    StatisticsService.setStatistic();
    StatisticsService.getStatistic();
  });
  it("test getDateTime", () => {
    expect(new Date(StatisticsService.getDateTime()).toISOString()).toBe(DATE);
  });
});
