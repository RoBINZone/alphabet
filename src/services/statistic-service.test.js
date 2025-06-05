import { getStatistic, setStatistic, getDateTime } from "./statistic-service";

import { expect, beforeEach, vi, describe, it } from "vitest";

describe("", () => {
  const DATE = "2022-02-24T05:00:00.000Z";
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(DATE);
  });
  it("test getStatistic", () => {
    getStatistic();
    setStatistic();
    getStatistic();
  });
  it("test getDateTime", () => {
    expect(new Date(getDateTime()).toISOString()).toBe(DATE);
  });
});
