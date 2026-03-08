import React from "react";
import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { StatisticsScreen } from "./StatisticsScreen.jsx";

describe("Statistics Screen", () => {
  it("should match snapshot", () => {
    localStorage.setItem(
      "statistic",
      JSON.stringify([
        {
          datetime: 1749905469999,
          correct: 10,
          incorrect: 10,
          averageResponseTime: 0.24,
        },
      ]),
    );
    const { asFragment } = render(
      <StatisticsScreen onScreenChange={() => undefined} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

[
  {
    datetime: 1749905469999,
    correct: 10,
    incorrect: 10,
    averageResponseTime: 0.24,
  },
];
