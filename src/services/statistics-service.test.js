import { StatisticsService } from "./statistics-service.js";

import { expect, beforeEach, vi, describe, it } from "vitest";

describe("Statistics Service", () => {
  const DATE = "2022-02-24T05:00:00.000Z";
  beforeEach(() => {
    localStorage.clear();
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
  it("test clearStatistics", () => {
    StatisticsService.clearStatistics();
    expect(JSON.parse(localStorage.getItem("statistic"))).toEqual([]);
  });
  it("test formatDate", () => {
    expect(StatisticsService.formatDate(new Date(DATE))).toBe(
      "2/24/2022, 7:00:00 AM",
    );
  });
});
