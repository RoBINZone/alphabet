import  {
  getStatistic,
  setStatistic,
  getDateTime
} from "./statistic-service";

import {
	beforeEach, vi, describe, it 
} from "vitest";

describe("", () => {
	beforeEach(() => {
vi.useFakeTimers();
	});
it("test getStatistic", () => {
  getStatistic();
  setStatistic();
});
it("test getDateTime", () => {
  getDateTime();
});
});
