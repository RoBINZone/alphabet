import React from "react";
import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { StatisticsScreen } from "./StatisticsScreen.jsx";

describe("Statistics Screen", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <StatisticsScreen onScreenChange={() => undefined} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
